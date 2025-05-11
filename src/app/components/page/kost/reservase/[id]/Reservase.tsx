"use client";
import Image from "next/image";
import image from "../../../../public/asset/image1.svg";
import image1 from "../../../../public/asset/image2.svg";
import image2 from "../../../../public/asset/image3.svg";
import image3 from "../../../../public/asset/image4.svg";
import image4 from "../../../../public/asset/image5.svg";
import NavbarItem from "@/app/components/component/navbar/NavbarItem";
import { usePathname } from "next/navigation";
import Reviews from "@/app/components/component/card/Reviews";
import { useState, useEffect } from "react";
import {
  Hotel,
  Star,
  Phone,
  Mail,
  Forward,
  Bookmark,
  BedDouble,
} from "lucide-react";
import API from "@/app/components/util/API";
import { itemsType } from "@/app/components/type";
const ReservaseComponent: React.FC = () => {
  const handleReservase = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
                  <div className="flex justify-center items-center h-[50vh] w-[20vw] mt-6 ml-6 rounded-md">
                    <Image src={image} width={360} height={90} alt="foto" />
                  </div>
                </div>
                <div className="flex justify-center items-center h-[50vh] w-[24vw] mt-8 rounded-md">
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[47vh] w-[23vw]">
                    <div className="rounded-md flex justify-center items-center">
                      <Image src={image1} alt="foto" width={180} height={46} />
                    </div>
                    <div className="rounded-md flex justify-center items-center">
                      <Image src={image2} alt="foto" width={180} height={46} />
                    </div>
                    <div className="rounded-md flex justify-center items-center">
                      <Image src={image3} alt="foto" width={180} height={46} />
                    </div>
                    <div className="rounded-md flex justify-center items-center">
                      <Image src={image4} alt="foto" width={180} height={46} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-2">
              <div className="mt-1 w-full rounded-md h-[30vh] bg-[#3572EF] flex justify-center items-center shadow-lg border-1">
                <div className=" w-[25vw] bg-white h-[25vh] rounded-md flex-col px-6 ">
                  <h1 className="text-[2rem] font-bold">Serenity III</h1>
                  <p className="font-light">
                    Ie Masen Kaye Adang, Syiah Kuala, Banda Aceh
                  </p>
                  <div className="flex-col pt-4">
                    <h1 className="font-light">IDR.300.000.000/year</h1>
                    <div className="flex">
                      <Star className="text-yellow-400" />
                      <Star className="text-yellow-400" />
                      <Star className="text-yellow-400" />
                      <Star className="text-yellow-400" />
                      <Star className="text-yellow-400" />
                    </div>
                  </div>

                  <div className="flex-col pt-4">
                    <div className="flex gap-2">
                      <Phone />
                      <h1 className=" font-light">012-3456-7890</h1>
                    </div>
                    <div className="flex gap-2">
                      <Mail />
                      <h1 className=" font-light">serenity@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1 w-[38vh] rounded-md h-[30vh] bg-[#3572EF] border-1 p-4 m-2 flex-col">
                <div className="flex-col ">
                  <h1 className="text-white">Furniture :</h1>

                  <div className="flex-col bg-white rounded-md">
                    <div className="flex h-[3vh] w-[10vw justify-between r">
                      <div className="flex ">
                        <BedDouble />
                        <h1 className="font-light">Bedroom</h1>
                      </div>
                      <h1>4</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[90vh] rounded-md" title="ini kanan">
            <div className="flex justify-center items-center h-[70vh] w-[35vw] mt-8 bg-white rounded-md shadow-lx border-1">
              {/* Ini side Kiri */}
              <form>
                <label htmlFor="Title" className="font-bold text-[2rem] ">
                  Formulir Reservase :
                </label>
                <br />
                <div className="grid grid-cols-2 grid-rows-1 gap-2 py-2 px-2">
                  <div>
                    <label htmlFor="" className="">
                      Nama :
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="border-2 rounded-md w-[17vw] h-[4vh] py-2 px-2 "
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold ">
                      Tanggal Lahir :
                    </label>{" "}
                    <br />
                    <input
                      type="date"
                      className="border-2 rounded-md w-[17vw] h-[4vh] "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-2 py-2 px-2">
                  <div>
                    <label htmlFor="" className="font-bold">
                      Nomor Handphone :
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="border-2 rounded-md w-[17vw] h-[4vh] py-2 px-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold">
                      Gender :
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="border-2 rounded-md w-[17vw] h-[4vh] py-2 px-2"
                    />
                  </div>
                </div>

                <div className="py-2 px-2 flex-col">
                  <label htmlFor="Email" className="font-bold">
                    Email :
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    className="border-2 rounded-md h-[4vh] w-[34vw] py-2 px-2"
                  />
                  <p className="font-light">
                    Silakan unduh terlebih dahulu kontrak kos, tandatangani,
                    lalu unggah kembali dokumen yang telah ditandatangani.{" "}
                    <span className="text-sky-500">Unduh disini</span>
                  </p>
                </div>

                <div className="py-2 px-2">
                  <input
                    type="file"
                    className="border-2 rounded-md h-[4vh] w-[34vw] outline-none"
                    placeholder="Unggah Dokument"
                  />
                </div>

                <div className="py-2 px-2">
                  <label htmlFor="" className="font-bold">
                    Metode Pembayatan :
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-md h-[4vh] w-[34vw] outline-none py-2 px-2"
                  />
                </div>

                <div className="py-2 px-2">
                  <label htmlFor="" className="font-bold">
                    Unggah Bukti Pembayaran :
                  </label>
                  <input
                    type="file"
                    className="border-2 rounded-md h-[4vh] w-[34vw] outline-none "
                  />
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-2 p-1">
                  <div className="w-[17vw] h-[5vh] bg-green-500 mt-2 border-1 rounded-md hover:bg-green-700 flex justify-center duration-[0.4s] ">
                    <button className="text-white font-bold text-[1rem]">
                      Reserve
                    </button>
                  </div>

                  <div className="w-[17vw] h-[5vh] bg-red-500 mt-2 border-1 rounded-md hover:bg-red-700 flex justify-center duration-[0.4s]">
                    <button className="text-white font-bold text-[1rem]">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="flex-col pl-4">
            <h1 className="font-bold text-[2rem]">2 Reviews</h1>
            {kostData.ulasan.map((items, index) => (
              <Reviews key={index} data={items} />
            ))}
          </div> */}
      </div>
    </div>
  );
};
export default ReservaseComponent;
