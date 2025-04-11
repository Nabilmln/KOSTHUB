"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../../public/asset/porfil.png";
import {
  User,
  File,
  HandCoins,
  Bookmark,
  KeyRound,
  DoorClosed,
  CalendarDays,
} from "lucide-react";

const profil = () => {
  return (
    <>
      <NavbarProfil />
      {/* Component */}
      <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-screen w-screen">
        <div className="border-2" title="side-kiri">
          <div title="side-top">
            <Link href="#">
              <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] text-[1.8rem] items-center">
                <User width="16" hanging="16" className="w-[3vw] h-[3vh]" />
                <h1 className="font-light">Profile</h1>
              </div>
            </Link>
            <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
              <File width="16" hanging="16" className="w-[3vw] h-[3vh]" />
              <h1 className="font-light">Data Kost</h1>
            </div>
            <Link href="#">
              <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
                <Bookmark width="16" hanging="16" className="w-[3vw] h-[3vh]" />
                <h1 className="font-light">Simpan Kost</h1>
              </div>
            </Link>
            <Link href="#">
              <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
                <HandCoins
                  width="16"
                  hanging="16"
                  className="w-[3vw] h-[3vh]"
                />
                <h1 className="font-light">Riwayat Transaksi</h1>
              </div>
            </Link>
          </div>
          <div title="side-bot">
            <Link href="#">
              <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
                <KeyRound width="16" hanging="16" className="w-[3vw] h-[3vh]" />
                <h1 className="font-light">Ubah Password</h1>
              </div>
            </Link>

            <Link href="#">
              <div className="flex gap-x-2 text-red-600 items-center text-[1.8rem]">
                <DoorClosed
                  width="16"
                  hanging="16"
                  className="w-[3vw] h-[3vh] "
                />
                <h1 className="font-light ">Log out</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-2">
          <div
            className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-1 h-full w-full"
            title="side-kanan"
          >
            <div className="border-2 flex justify-center items-center">
              <Image
                src={profile}
                alt="profil"
                width={100}
                height={100}
                className=""
              />
            </div>
            <div className="border-2 flex justify-center items-center">
              <form className="">
                <div className="grid grid-cols-1 grid-rows-2 gap-2">
                  <div className="flex items-center">
                    <div className="mx-2">
                      <label htmlFor="Username">Username :</label> <br />
                      <input
                        type="text"
                        className="border-2 rounded-md py-2 w-[15vw] px-4"
                      />
                    </div>
                    <div className="mx-2">
                      <label htmlFor="Tanggal Lahir"> Tanggal Lahir:</label>{" "}
                      <br />
                      <div className="flex border-2 rounded-md py-2 w-[15vw]">
                        <input type="date" className=" px-4 w-[15vw]" />
                      </div>
                    </div>
                  </div>
                  <div className="mx-2">
                    <label htmlFor="Email">Email :</label> <br />
                    <input
                      type="text"
                      className="border-2 rounded-md py-2 w-[31vw] px-2"
                      placeholder="Koshut@example.com"
                    />
                  </div>
                  <div className="mx-2">
                    <label htmlFor="nohp">Nomor Hp:</label> <br />
                    <input
                      type="text"
                      className="border-2 rounded-md py-2 w-[31vw] px-2"
                      placeholder="+62"
                    />
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
