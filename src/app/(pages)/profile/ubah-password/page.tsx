"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Sidebar from "@/app/component/sidebar/Sidebar";
import Image from "next/image";
import profile from "../../../../../public/asset/prfilhd.png";
const UbahPassword = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className=" inset-x-0 top-0 h-16">
          <NavbarProfil />
        </div>

        <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-[93vh]">
          <Sidebar />
          <div className="border-2 flex justify-center items-center">
            <div className="grid grid-cols-[0.6fr_2fr] grid-rows-1 gap-x-2 h-full">
              <div className="border-2 rounded-md flex justify-center  items-center ">
                <div className="">
                  <Image
                    src={profile}
                    alt="profil"
                    width={400}
                    height={0}
                    className=""
                  />
                </div>
              </div>
              <div className="border-2 rounded-md h-full flex justify-center items-center">
                <div className="">
                  <form className="flex-col">
                    <div>
                      <label htmlFor="">Password Lama :</label>
                      <br />
                      <input
                        type="password"
                        className="border-2 w-[30vw] rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Password Baru:</label>
                      <br />
                      <input
                        type="password"
                        className="border-2 w-[30vw] rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Konfirmasi Password:</label> <br />
                      <input
                        type="password"
                        className="border-2 w-[30vw] rounded-md p-2"
                      />
                    </div>
                    <button className="border-2 w-[30vw] rounded-md p-2 bg-sky-600 mt-4">
                      Ubah
                    </button>
                  </form>
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
