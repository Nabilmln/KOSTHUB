"use client";
import { useState } from "react";
import { useHook } from "@/app/layout/Provider";
import { useRouter } from "next/navigation";
import { ModalProps } from "@/app/type";
import Modal from "@/app/component/modal/Modal";

const Biodata = () => {
  const { user, setUser } = useHook();
  const [date, setDate] = useState<string>("");
  const [nama, setNama] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [modaData, setModalData] = useState<ModalProps | null>(null);
  const router = useRouter();

  const handleIsiBiodata = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !date || !gender || !contact) {
      setModalData({
        title: "Isi Biodata Gagal",
        icon: "warning",
        deskripsi: "Field Tidak boleh Kosong!",
        confirmButtonColor: "#3572EF",
        confirmButtonText: "try again!",
        onClose: () => {
          setModalData(null);
        },
      });
    }
    const newBiodata = {
      nama: nama,
      date: date,
      gender: gender,
      contact: contact,
    };
    setUser((prev) => {
      const update = [...prev];
      const index = update.length - 1;
      update[index] = {
        ...update[index],
        ...newBiodata,
      };
      setModalData({
        title: "Berhasil",
        icon: "success",
        deskripsi: "Selamat Biodata Mu sudah selesai",
        confirmButtonColor: "#3572EF",
        confirmButtonText: "Login",
        onClose: () => {
          setModalData(null);
          router.push("/Login");
        },
      });
      return update;
    });
  };

  const handleChange = (value: string) => {
    setGender((prev) => (prev === value ? "" : value));
  };

  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="grid grid-cols-1 grid-rows-2 gap-4" title="background">
          <div className="bg-white" title="white"></div>
          <div
            className="bg-sky-500 w-[100vw] h-[50vh] rounded-t-[6rem]"
            title="blue"
          ></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <div className="flex justify-center">
            <h1 className="font-bold text-[2rem]">Biodata</h1>
          </div>
          <div className="border-2 rounded-md p-[2rem]">
            <div className="flex flex-col">
              <form onSubmit={handleIsiBiodata}>
                <label htmlFor="Nama Lengkap">Nama Lengkap :</label>
                <br />
                <input
                  type="text"
                  className="p-[1rem] border-2 rounded-md bg-slate-300 w-[20vw]"
                  onChange={(e) => setNama(e.target.value)}
                />
                <div>
                  <label htmlFor="Tanggal Lahir">Tanggal Lahir :</label> <br />
                  <input
                    type="date"
                    className="border-2 rounded-md bg-slate-300 w-[20vw] p-[1rem]"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="NomorHp">Nomor Hp :</label> <br />
                  <input
                    type="text"
                    className="border-2 rounded-md bg-slate-300 p-[1rem] w-[20vw]"
                    placeholder="+62"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <fieldset>
                  <label htmlFor="Role">Gender:</label> <br />
                  <div className="flex gap-x-1 text-[1rem] items-center">
                    <input
                      type="radio"
                      className="w-[2vw] h-[2vh]"
                      name="gender"
                      onChange={() => handleChange("Laki")}
                    />
                    <label htmlFor="">Laki-Laki</label>
                    <input
                      type="radio"
                      className="w-[2vw] h-[2vh]"
                      name="gender"
                      onChange={() => handleChange("Perempuan")}
                    />
                    <label htmlFor="Perempuan">Perempuan</label>
                  </div>
                </fieldset>
                <div>
                  <div className="flex justify-center py-[1rem ]">
                    <button
                      className="border-2 rounded-md p-1 w-[14vw] h-[4vh] hover:bg-black duration-[0.5s] hover:text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {modaData && <Modal {...modaData} />}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Biodata;
