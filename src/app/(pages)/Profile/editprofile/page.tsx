"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Sidebar from "@/app/component/sidebar/Sidebar";
import Image from "next/image";
import profilehd from "../../../../../public/asset/prfilhd.png";
import { useState } from "react";
import Modal from "@/app/component/modal/Modal";
import { ModalProps } from "@/app/type";
import { useHook } from "@/app/layout/Provider";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const { setCurrentUser } = useHook();
  const [nama, setNama] = useState<string>("");
  const [tanggal, setTanggal] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nomorHp, setNomorHp] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps | null>(null);
  const router = useRouter();

  const handleEditProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!nama || !tanggal || !email || !nomorHp || !gender) {
    //   setModalData({
    //     title: "Edit Profile Gagal",
    //     icon: "warning",
    //     deskripsi: "Field Tidak Boleh Kosong!",
    //     confirmButtonColor: "#3572EF",
    //     confirmButtonText: "try again!",
    //     onClose: () => {
    //       setModalData(null);
    //     },
    //   });
    // }
    // const updateProfile = {
    //   nama: nama,
    //   date: tanggal,
    //   gender: gender,
    //   contact: nomorHp,
    // };
    // setCurrentUser((prev) => {
    //   const newUpdate = [...prev];
    //   const index = newUpdate.length - 1;
    //   newUpdate[index] = {
    //     ...newUpdate[index],
    //     ...updateProfile,
    //   };
    //   setModalData({
    //     title: "Berhasil",
    //     icon: "success",
    //     deskripsi: "Selamat Biodata Kamu Sudah Di Update",
    //     confirmButtonColor: "#3572EF",
    //     confirmButtonText: "Oke",
    //     onClose: () => {
    //       setModalData(null);
    //       router.push("/Profile");
    //     },
    //   });
    //   return newUpdate;
    // });
  };
  return (
    <>
      <NavbarProfil />

      <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-screen w-screen">
        <Sidebar />
        <div className="border-2">
          <div
            className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-1 h-full w-full"
            title="side-kanan"
          >
            <div className="border-2 flex justify-center items-center">
              <Image
                src={profilehd}
                alt="profil"
                width={300}
                height={300}
                className=""
              />
            </div>

            <div className="border-2 flex justify-center items-center">
              <form onSubmit={handleEditProfile}>
                <div className="grid grid-cols-1 grid-rows-2 gap-2">
                  <div className="flex items-center">
                    <div className="mx-2">
                      <label htmlFor="Username">Nama :</label> <br />
                      <input
                        type="text"
                        className="border-2 rounded-md py-2 w-[15vw] px-4"
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                    <div className="mx-2">
                      <label htmlFor="Tanggal Lahir"> Tanggal Lahir:</label>{" "}
                      <br />
                      <div className="flex border-2 rounded-md py-2 w-[15vw]">
                        <input
                          type="date"
                          className=" px-4 w-[15vw]"
                          onChange={(e) => setTanggal(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-2">
                    <label htmlFor="Email">Email :</label> <br />
                    <input
                      type="text"
                      className="border-2 rounded-md py-2 w-[31vw] px-2"
                      placeholder="Koshut@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mx-2">
                    <label htmlFor="nohp">Nomor Hp:</label> <br />
                    <input
                      type="text"
                      className="border-2 rounded-md py-2 w-[31vw] px-2"
                      placeholder="+62"
                      onChange={(e) => setNomorHp(e.target.value)}
                    />
                  </div>

                  <div className="mx-2">
                    <label htmlFor="Gender">Jenis Kelamin:</label> <br />
                    <select
                      value={gender}
                      className="border-2 rounded-md py-2 w-[31vw] px-2"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="-" className="text-black">
                        -
                      </option>
                      <option value="Laki" className="text-black">
                        Laki-Laki
                      </option>
                      <option value="Perempuan" className="text-black">
                        Perempuan
                      </option>
                    </select>
                  </div>

                  <div className="mx-2">
                    <label htmlFor="">Bio :</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 rounded-md w-[31vw] h-[10vh]"
                    />
                  </div>
                  <div className="mx-2">
                    <button
                      className="border-2 rounded-md p-1 w-[31vw] hover:bg-sky-500 duration-[0.3s]"
                      type="submit"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {modalData && <Modal {...modalData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
