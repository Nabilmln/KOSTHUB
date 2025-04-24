"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Sidebar from "@/app/component/sidebar/Sidebar";
import Image from "next/image";
import profilehd from "../../../../../public/asset/prfilhd.png";
import { useState } from "react";
import Modal from "@/app/component/modal/Modal";
import { ModalProps } from "@/app/type";
import { useRouter } from "next/navigation";
import { useHook } from "@/app/component/hooks/Kontex";
import API from "@/app/util/API";

const EditProfile = () => {
  const { setCurrentUser, currentUser } = useHook();
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullName] = useState<string>("");
  const [tanggal_lahir, setTanggal_Lahir] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nomor, setNomor] = useState<string>("");
  const [gender, setGender] = useState<boolean | undefined>(undefined);
  const [bio, setBio] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps | null>(null);
  const router = useRouter();

  const data = {
    fullname,
    tanggal_lahir,
    nomor,
    gender,
    bio,
    alamat,
  };

  const filter = Object.fromEntries(
    Object.entries(data).filter(
      ([_, v]) => v !== undefined && v !== null && v !== ""
    )
  );

  const handleEditProfile = (e: React.FormEvent) => {
    e.preventDefault();
    API.put(
      "/api/auth/update-profile",
      {
        username: currentUser?.user.username,
        ...filter,
        email: currentUser?.user.email,
      },
      {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
        },
      }
    )
      .then((res) => {
        setModalData({
          title: "Behasil Update Profile",
          icon: "success",
          deskripsi: "Selamat Profile Anda Sudah Berubah",
          confirmButtonColor: "#3572EF",
          confirmButtonText: "Lanjut",
          onClose: () => {
            setModalData(null);
            console.log(res.data.user);
            setCurrentUser(res.data);
            setAlamat("");
            setBio("");
            setEmail("");
            setFullName("");
            setNomor("");
            router.push("/profile");
          },
        });
      })
      .catch((err) => {
        console.log("gagal Update", err);
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
          <div className="border-2">
            <div
              className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-1 h-full w-full"
              title="side-kanan"
            >
              <div className="border-2 flex flex-col justify-center items-center">
                <Image
                  src={profilehd}
                  alt="profil"
                  width={300}
                  height={300}
                  className=""
                />
                <input
                  type="file"
                  className="border-2 p-2 mt-2 rounded-md bg-gray-400 w-[11vw] hover:bg-gray-600 duration-[0.3s]"
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
                          onChange={(e) => setFullName(e.target.value)}
                          value={fullname}
                        />
                      </div>
                      <div className="mx-2">
                        <label htmlFor="Tanggal Lahir"> Tanggal Lahir:</label>{" "}
                        <br />
                        <div className="flex border-2 rounded-md py-2 w-[15vw]">
                          <input
                            type="date"
                            className=" px-4 w-[15vw]"
                            onChange={(e) => setTanggal_Lahir(e.target.value)}
                            value={tanggal_lahir}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mx-2">
                        <label htmlFor="NomorHp">NomorHP :</label> <br />
                        <input
                          type="text"
                          className="border-2 rounded-md py-2 w-[15vw] px-4"
                          onChange={(e) => setNomor(e.target.value)}
                          value={nomor}
                        />
                      </div>
                      <div className="mx-2">
                        <label htmlFor="Gender">Gender:</label> <br />
                        <select
                          value={
                            gender === undefined
                              ? "-"
                              : gender
                              ? "true"
                              : "false"
                          }
                          className="border-2 rounded-md py-2 w-[15vw] px-2"
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === "-") {
                              setGender(undefined);
                            } else {
                              setGender(value === "true");
                            }
                          }}
                        >
                          <option value="-" className="text-black">
                            -
                          </option>
                          <option value="true" className="text-black">
                            Laki-Laki
                          </option>
                          <option value="false" className="text-black">
                            Perempuan
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mx-2">
                      <label htmlFor="Email">Email :</label>
                      <br />
                      <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 rounded-md w-[31vw] py-2"
                        value={email}
                      />
                    </div>

                    <div className="mx-2">
                      <label htmlFor="Alamat">Alamat :</label>
                      <br />
                      <input
                        type="text"
                        onChange={(e) => setAlamat(e.target.value)}
                        className="border-2 rounded-md w-[31vw] py-2"
                        value={alamat}
                      />
                    </div>

                    <div className="mx-2">
                      <label htmlFor="Bio">Bio :</label>
                      <br />
                      <input
                        type="text"
                        className="border-2 rounded-md w-[31vw] h-[10vh]"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
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
      </div>
    </>
  );
};

export default EditProfile;
