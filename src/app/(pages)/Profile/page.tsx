"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Link from "next/link";
import Image from "next/image";
import profilehd from "../../../../public/asset/prfilhd.png";
import Sidebar from "@/app/component/sidebar/Sidebar";
import { useHook } from "@/app/component/hooks/UserAuth";

const profil = () => {
  const { currentUser, isLoading } = useHook();

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
              <form className="">
                <div className="grid grid-cols-1 grid-rows-2 gap-2">
                  <div className="flex items-center">
                    <div className="mx-2">
                      <label htmlFor="Username">Nama :</label> <br />
                      <h1 className="border-2 rounded-md py-2 w-[15vw] px-2">
                        {isLoading
                          ? "loading..."
                          : currentUser?.fullname ?? "guest"}
                      </h1>
                    </div>
                    <div className="mx-2">
                      <label htmlFor="Tanggal Lahir"> Tanggal Lahir:</label>{" "}
                      <br />
                      <h1 className="border-2 rounded-md py-2 w-[15vw] px-2">
                        {isLoading
                          ? "loading..."
                          : currentUser?.tanggal_lahir ?? "00/00/0000"}
                      </h1>
                    </div>
                  </div>
                  <div className="mx-2">
                    <label htmlFor="Email">Email :</label> <br />
                    <h1 className="border-2 rounded-md py-2 w-[31vw] px-2">
                      {isLoading
                        ? "loading..."
                        : currentUser?.email ?? "Koshub@gmail.com"}
                    </h1>
                  </div>
                  <div className="mx-2">
                    <label htmlFor="nohp">Nomor Hp:</label> <br />
                    <h1 className="border-2 rounded-md py-2 w-[31vw] px-2">
                      {isLoading
                        ? "loading..."
                        : currentUser?.nomor ?? "0811111111"}
                    </h1>
                  </div>

                  <div className="mx-2">
                    <label htmlFor="Jenis Kelamin">Jenis Kelamin:</label> <br />
                    <h1 className="border-2 rounded-md py-2 w-[31vw] px-2">
                      {isLoading ? "loading..." : currentUser?.gender}
                    </h1>
                  </div>

                  <div className="mx-2">
                    <label htmlFor="">Bio :</label>
                    <br />
                    <h1 className="border-2 rounded-md py-2 w-[31vw] h-[10vh] px-2"></h1>
                  </div>
                  <div className="mx-2">
                    <Link href="Profile/editprofile">
                      <button
                        className="border-2 rounded-md p-1 w-[31vw] hover:bg-sky-500 duration-[0.3s]"
                        type="submit"
                      >
                        Edit Porfile
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profil;
