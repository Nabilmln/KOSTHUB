"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Sidebar from "@/app/component/sidebar/Sidebar";
import Image from "next/image";
import profile from "../../../../../public/asset/prfilhd.png";
import { useState } from "react";
import API from "@/app/util/API";
import { ModalProps } from "@/app/type";
import Modal from "@/app/component/modal/Modal";
import { useHook } from "@/app/component/hooks/Kontex";

const UbahPassword = () => {
  const { currentUser } = useHook();
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps | null>(null);

  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault();
    API.put(
      "/api/auth/change-password",
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
        },
      }
    )
      .then((res) => {
        setModalData({
          title: "Berhasil ganti password",
          deskripsi: "Selamat Password Anda Berubah",
          icon: "success",
          confirmButtonColor: "#3572EF",
          confirmButtonText: "lanjut",
          onClose: () => {
            setModalData(null);
            console.log(res.data);
            setOldPassword("");
            setNewPassword("");
          },
        });
      })
      .catch((err) => {
        setModalData({
          title: "Gagal ganti password",
          deskripsi: "Gagal mohon coba lagi",
          icon: "error",
          confirmButtonColor: "#3572EF",
          confirmButtonText: "Try again ",
          onClose: () => {
            setModalData(null);
          },
        });
      });
  };
  return (
    <>
      <div className="h-screen w-screen">
        <div className=" inset-x-0 top-0 h-16">
          <NavbarProfil />
        </div>

        <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-[93vh]">
          <Sidebar />
          <div className="border-2 flex justify-center items-center">
            <div className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-x-4 h-full">
              <div className=" rounded-md flex justify-center  items-center ">
                <div className="">
                  <Image
                    src={profile}
                    alt="profil"
                    width={300}
                    height={100}
                    className=""
                  />
                </div>
              </div>
              <div className=" rounded-md h-full flex justify-center items-center">
                <div className="">
                  <div className="flex-col">
                    <div>
                      <label htmlFor="">Password Lama :</label>
                      <br />
                      <input
                        type="password"
                        value={oldPassword}
                        className="border-2 w-[30vw] rounded-md p-2"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Password Baru:</label>
                      <br />
                      <input
                        type="password"
                        className="border-2 w-[30vw] rounded-md p-2"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>

                    <button
                      className="border-2 w-[30vw] rounded-md p-2 bg-sky-600 mt-4"
                      onClick={(e) => handlePassword(e)}
                    >
                      Ubah
                    </button>
                  </div>
                  {modalData && <Modal {...modalData} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UbahPassword;
