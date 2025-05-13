"use client";
import Image from "next/image";
import NavbarItem from "@/app/components/component/navbar/NavbarItem";
import Reviews from "@/app/components/component/card/Reviews";
import { useState, useEffect } from "react";
import { Star, Phone, Mail } from "lucide-react";
import API from "@/app/components/util/API";
import { useParams } from "next/navigation";
import { useHook } from "@/app/components/component/hooks/Kontex";
import { itemsType } from "@/app/components/type/API";

import { getFasilitas } from "@/app/components/helper/faslitasHelper";

const ReservaseComponent: React.FC = () => {
  const [reservase, setReservase] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedField, setSelectedField] = useState<any>();
  const [kostData, setKostData] = useState<itemsType | null>(null);
  const [ratingStar] = useState<number>(0);
  const [nama, setNama] = useState<string>("");
  const [tanggal_lahir, setTanggal_Lahir] = useState<string>("");
  const [nomor_hp, setNomor_Hp] = useState<string>();
  const [gender, setGender] = useState<boolean | null>(null);
  const [email, setEmail] = useState<string>("");
  const [periode_penyewaan, setPeriode_Penyewaan] = useState<string>("");
  const [kontrak, setKontrak] = useState<string>("");
  const [bukti_pembayaran, setBukti_Pembayaran] = useState<string>("");
  const { currentUser } = useHook();
  const { id } = useParams();

  const PeriodeOption = ["Bulan", "Tahun"];

  const handleGetDataKos = async () => {
    if (id) {
      setIsLoading(false);
      API.get(`/api/kos/${id}`, {
        headers: {
          Authorization: `Bearer ${id}`,
        },
      })
        .then((res) => {
          setKostData(res.data);
          console.log("Data kos berhasil diterima", res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Data kos gagal diambil", err);
          setIsLoading(false);
        });
    }
  };

  const handleReservase = async () => {
    API.post(
      `/api/reservase/${currentUser?.user._id}/${kostData?.id_kos}`,
      {
        nama,
        tanggal_lahir,
        nomor_hp,
        gender,
        email,
        periode_penyewaan: selectedField,
        kontrak,
        bukti_pembayaran,
      },
      {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
        },
      }
    )
      .then((res) => {
        console.log("Berhasil Melakukan Reservase", res);
      })
      .catch((err) => {
        console.log("Gagal Melakukan Reservase", err);
      });
  };

  const handleChange = (value: any) => {
    setGender((prev) => (prev === value ? "" : value));
  };

  useEffect(() => {
    handleGetDataKos();
    console.log("idKost Object", kostData?._id);
  }, []);

  return (
    <div>
      <div className="h-screen w-screen relative">
        <div className="inset-x-0 top-0 h-16">
          <NavbarItem />
        </div>

        <div className="grid grid-cols-[1.1fr_0.8fr] grid-rows-1 gap-x-4">
          <div className="h-[60vh] p-2" title="ini kiri">
            <div className="rounded-md flex justify-center items-center ">
              <div className="grid grid-cols-2 grid-rows-1 gap-x-1">
                <div className="flex justify-center items-center">
                  {kostData?.image.gallery.slice(0, 1).map((item, key) => (
                    <Image
                      key={key}
                      src={`http://localhost:5000/${item}`}
                      alt="gallery"
                      width={600}
                      height={500}
                      className="w-full h-[50vh] object-center rounded-md"
                    />
                  ))}
                </div>
                <div className="flex justify-center items-center h-[50vh] w-[24vw] mt-8 rounded-md">
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[47vh] w-[23vw]">
                    {kostData?.image.gallery.slice(1, 5).map((item, key) => (
                      <Image
                        key={key}
                        src={`http://localhost:5000/${item}`}
                        alt="gallery"
                        width={300}
                        height={200}
                        className="w-full h-48 object-center rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-2">
              <div className="mt-1 w-full rounded-md h-[30vh] bg-[#3572EF] flex justify-center items-center shadow-lg border-1">
                <div className=" w-[25vw] bg-white h-[25vh] rounded-md flex-col px-6 ">
                  <h1 className="text-[2rem] font-bold">
                    {kostData?.nama_kos}
                  </h1>
                  <p className="font-light">{kostData?.alamat}</p>
                  <div className="flex-col pt-4">
                    <h1 className="font-light">{kostData?.harga_pertahun}</h1>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star}>
                          <Star
                            color={
                              ratingStar || kostData?.avgBintang >= star
                                ? "#FFFF00"
                                : "#000000"
                            }
                            className=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-col pt-4">
                    <div className="flex gap-2 my-1">
                      <Phone />
                      <h1 className=" font-light">{kostData?.kontak.nomor}</h1>
                    </div>
                    <div className="flex gap-2 my-1">
                      <Mail />
                      <h1 className=" font-light">{kostData?.kontak.email}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1 w-[48vh] rounded-md h-[30vh] bg-[#3572EF] border-1 p-4 m-2 flex-col">
                <div className="flex-col ">
                  {kostData?.fasilitas.map((item, key) => (
                    <div
                      key={key}
                      className="flex flex-col w-full bg-white rounded-lg justify-center p-1 my-4"
                    >
                      <div className=" flex">
                        {getFasilitas(item.nama)}
                        <p className="px-2">{item.jumlah}</p>
                        <h1 className="px-2">{item.nama}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[90vh] rounded-md" title="ini kanan">
            <div className="flex justify-center items-center h-[70vh] w-[35vw] mt-8 bg-white rounded-md shadow-lg border">
              <div className="w-full p-4 space-y-4">
                <h2 className="font-bold text-2xl text-center">
                  Formulir Reservase
                </h2>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="nama" className="font-medium">
                      Nama:
                    </label>
                    <input
                      id="nama"
                      type="text"
                      className="border-2 rounded-md w-full h-10 px-2"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="tanggal_lahir" className="font-medium">
                      Tanggal Lahir:
                    </label>
                    <input
                      id="tanggal_lahir"
                      type="date"
                      className="border-2 rounded-md w-full h-10 px-2"
                      value={tanggal_lahir}
                      onChange={(e) => setTanggal_Lahir(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="nomor_hp" className="font-medium">
                      Nomor Handphone:
                    </label>
                    <input
                      id="nomor_hp"
                      type="text"
                      className="border-2 rounded-md w-full h-10 px-2"
                      value={nomor_hp}
                      onChange={(e) => setNomor_Hp(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="font-medium">
                      Gender:
                    </label>
                    <div className="flex items-center justify-around">
                      <input
                        type="radio"
                        id="Laki"
                        name="gender"
                        value="true"
                        checked={gender === true}
                        onChange={() => setGender(true)}
                        className="w-[2vw] h-[2vh]"
                      />
                      <label htmlFor="Laki">Laki-Laki</label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="Perempuan"
                        name="gender"
                        value="false"
                        checked={gender === false}
                        onChange={() => setGender(false)}
                        className="w-[2vw] h-[2vh]"
                      />
                      <label htmlFor="Perempuan">Perempuan</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="font-medium">
                    Email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="border-2 rounded-md w-full h-10 px-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Silakan unduh terlebih dahulu kontrak kos, tandatangani,
                    lalu unggah kembali.
                    <a href="/asset/Kontrak kos.png" download>
                      <span className="text-sky-500 cursor-pointer">
                        Unduh disini
                      </span>
                    </a>
                  </p>
                </div>

                <div>
                  <label htmlFor="kontrak" className="font-medium">
                    Unggah Kontrak:
                  </label>
                  <input
                    type="file"
                    className="border-2 rounded-md w-full h-10 px-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setKontrak(file.name);
                      }
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="pembayaran" className="font-medium">
                    Periode Penyewaan:
                  </label>{" "}
                  <div className="border-2 rounded-md w-full h-10 px-2 flex items-center">
                    <select
                      value={selectedField}
                      className="outline-none"
                      onChange={(e) => {
                        const field = e.target.value;
                        setSelectedField(field);
                      }}
                    >
                      <option value="" className="text-black font-bold ">
                        Pilih Periode Penyewaan
                      </option>
                      {PeriodeOption.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="bukti_pembayaran" className="font-medium">
                    Unggah Bukti Pembayaran:
                  </label>
                  <input
                    type="file"
                    className="border-2 rounded-md w-full h-10 px-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setBukti_Pembayaran(file.name);
                      }
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded-md duration-300"
                    onClick={() => handleReservase()}
                  >
                    Reserve
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-md duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReservaseComponent;
