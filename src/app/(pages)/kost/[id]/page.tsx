"use client";
import Image from "next/image";
import image from "../../../../../public/asset/image1.svg";
import image1 from "../../../../../public/asset/image2.svg";
import image2 from "../../../../../public/asset/image3.svg";
import image3 from "../../../../../public/asset/image4.svg";
import image4 from "../../../../../public/asset/image5.svg";
import facebook from "../../../../../public/asset/facebook.svg";
import twiter from "../../../../../public/asset/twiter.svg";
import instagram from "../../../../../public/asset/instagram.svg";
import NavbarItem from "@/app/component/navbar/NavbarItem";
import { usePathname } from "next/navigation";
import Reviews from "@/app/component/card/Reviews";
import { useState, useEffect } from "react";
import { Hotel, Star, Phone, Mail, Forward, Bookmark } from "lucide-react";
import API from "@/app/util/API";
import { itemsType } from "@/app/type";
import { useHook } from "@/app/component/hooks/Kontex";

const SelectItems = () => {
  const { currentUser, setCurrentUser } = useHook();
  const [kostId, setKostId] = useState<string>("");
  const [kostData, setKostData] = useState<itemsType | null>(null);
  const [ratingStar, setRatingStar] = useState<number>(0);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetData = async () => {
    if (kostId) {
      setIsLoading(true);
      API.get(`/api/kos/${kostId}`, {
        headers: {
          Authorization: `Bearer ${kostId}`,
        },
      })
        .then((res) => {
          setKostData(res.data);
          console.log("Data Berhasil Diterima:", res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Gagal Mengambil Data", err);
          setIsLoading(false);
        });
    }
  };

  const handleSaveKost = async () => {
    try {
      const res = await API.post(
        `/api/auth/save-kos/${kostData?.id_kos}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );
      setCurrentUser(res.data);
    } catch (err) {
      console.log("Gagal Simpan Kost", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const pathParts = pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    setKostId(id);
    handleGetData();
  }, [pathname, kostId]);

  return (
    <div>
      {isLoading ? (
        <div className="flex-col">
          <NavbarItem />
          <div className="flex justify-center items-center h-screen w-screen gap-2">
            <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
            <p className="text-[2rem] font-light">Loading..</p>
          </div>
        </div>
      ) : kostData ? (
        <div className="h-screen w-screen relative">
          <div className="inset-x-0 top-0 h-16">
            <NavbarItem />
          </div>

          <div className="grid grid-cols-[1.1fr_0.8fr] grid-rows-1 gap-x-4">
            <div className="h-[60vh] p-2" title="ini kiri">
              <div className="shadow-2xl rounded-md flex justify-center items-center border-1">
                <div className="grid grid-cols-2 grid-rows-1 gap-x-1">
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center h-[50vh] w-[20vw] mt-6 ml-6 rounded-md">
                      <Image src={image} width={360} height={90} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[50vh] w-[24vw] mt-8 rounded-md">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[47vh] w-[23vw]">
                      <div className="rounded-md flex justify-center items-center">
                        <Image src={image1} alt="" width={180} height={46} />
                      </div>
                      <div className="rounded-md flex justify-center items-center">
                        <Image src={image2} alt="" width={180} height={46} />
                      </div>
                      <div className="rounded-md flex justify-center items-center">
                        <Image src={image3} alt="" width={180} height={46} />
                      </div>
                      <div className="rounded-md flex justify-center items-center">
                        <Image src={image4} alt="" width={180} height={46} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <h1 className="font-bold text-[2rem]">{kostData.nama_kos}</h1>
                <div className="flex gap-x-4">
                  <Forward />
                  <button onClick={handleSaveKost}>
                    <Bookmark className="hover:text-yellow-300 duration-[0.4s]" />
                  </button>
                </div>
              </div>
              <div className="pb-1">
                <h1 className="font-light">{kostData.alamat}</h1>
              </div>
              <div className="w-full rounded-md h-[10vh] bg-[#3572EF] flex justify-center items-center shadow-lg border-1">
                <div className="grid grid-cols-4 grid-rows-1 gap-x-16">
                  {/* {kostData.fasilitas.map((item, index) => (
                    <Property key={index} title={item} />
                  ))} */}
                </div>
              </div>
              <div className="mt-1 w-full rounded-md h-[12vh] bg-[#3572EF] border-1 p-2 flex-col">
                <h1 className="font-bold text-[1rem] pl-1">Description</h1>
                <div className="rounded-md shadow-lg bg-white p-2">
                  <h1 className="">{kostData.deskripsi}</h1>
                </div>
              </div>
            </div>
            <div className="h-[90vh] rounded-md" title="ini kanan">
              <div className="flex justify-center items-center h-[70vh] w-[35vw] mt-8 bg-[#3572EF] rounded-md shadow-lx border-1">
                <div className="flex-col">
                  <div className="border-1 h-[15vh] w-[30vw] rounded-md bg-white flex-col p-2">
                    <h1 className="font-bold text-[2rem]">
                      {kostData.nama_kos}
                    </h1>
                    <p className="font-light">{kostData.alamat}</p>
                    <p className="font-bold">
                      IDR.{kostData.harga_pertahun}/Year
                    </p>

                    <div className="flex items-center gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          onMouseOver={() => setRatingStar(star)}
                          onMouseOut={() => setRatingStar(0)}
                        >
                          <Star
                            color={ratingStar >= star ? "#FFFF00" : "#000000"}
                            className="duration-[0.2s]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-[28vh] w-[30vw] rounded-md bg-white flex-col p-2 mt-[10rem] border-1">
                    <h1 className="font-semibold w-[14vw] text-6">
                      Are you interested? Please contact us!
                    </h1>
                    <p className="font-light mt-2">Contact</p>
                    <div className="flex gap-x-2 mt-2">
                      <Hotel />
                      <p className="font-light">{kostData.alamat}</p>
                    </div>
                    <div className="flex gap-x-2 mt-2">
                      <Phone />
                      <p className="font-light">{kostData.kontak.nomor}</p>
                    </div>
                    <div className="flex gap-x-2 mt-2">
                      <Mail />
                      <p className="font-light">{kostData.kontak.email}</p>
                    </div>
                    <p className="font-bold text-2">Sosial Media</p>
                    <div className="flex gap-x-2 mt-2">
                      <Image src={facebook} alt="" />
                      <Image src={twiter} alt="" />
                      <Image src={instagram} alt="" />
                      <p className="font-light">{kostData.nama_kos}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex text-center">
                {/* <Link href={`/reservase/${kostData.id_kos}`}> */}
                <div className="w-[35vw] h-[5vh] bg-green-500 mt-2 border-1 rounded-md hover:bg-green-700 flex justify-center duration-[0.4s]">
                  <button className="text-white font-bold text-[2rem]">
                    Reserve
                  </button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="flex-col pl-4">
            <h1 className="font-bold text-[2rem]">
              {kostData.ulasan && kostData.ulasan.length} Reviews
            </h1>
            {kostData.ulasan.map((items, index) => (
              <Reviews key={index} data={items} />
            ))}
          </div>
        </div>
      ) : (
        <p>Data tidak ditemukan</p>
      )}
    </div>
  );
};
export default SelectItems;
