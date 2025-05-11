"use client";
import { Star, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { itemsTypeProps } from "../props";
import Image from "next/image";
import { getFasilitas } from "@/app/components/helper/faslitasHelper";
import kostDummy from "../../../../../public/kost2.png";

const Items: React.FC<itemsTypeProps> = ({ data }) => {
  return (
    <Link
      href={`/kost/${data.id_kos}`}
      className="shadow-lg border-1 rounded-lg flex flex-col items-center p-[1rem]"
    >
      <Image
        src={
          `http://localhost:5000/${data.image.thumbnail}`
            ? `http://localhost:5000/${data.image.thumbnail}`
            : kostDummy
        }
        alt="thumbnail"
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="flex justify-center gap-x-2 p-2 items-center">
        <div className="bg-[#A7E6FF] rounded-md p-2 ">
          <h1 className="font-bold">Rp.{data.harga_pertahun}/Bulan</h1>
        </div>
        <div className="bg-[#A7E6FF] rounded-md p-2">
          <h1 className="font-bold">
            {" "}
            Rp.{data.harga_pertahun} /Tahun{" "}
            <span className=" bg-[#2DE79D] rounded-md p-1 text-white">
              Best Deal
            </span>
          </h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-light">{data.deskripsi}</h1>
      </div>
      <div className="flex">
        <MapPin />
        <h1 className="font-light">{data.alamat}</h1>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="grid grid-cols-4 grid-rows-1 gap-x-1 border-1 rounded-md p-1 w-[14vw] text-center">
          <div className="flex">
            {data.fasilitas.map((item, key) => (
              <div key={key} className="flex justify-center items-center">
                <div className="flex justify-center items-center mx-1">
                  {getFasilitas(item.nama)}
                  <span className="font-light">{item.jumlah}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex gap-1" title="Rating">
          <Star />
          <h1>/{data.avgBintang}</h1>
        </div>
      </div>

      <div className="flex gap-x-[4rem] pt-[1rem] ">
        <div className="flex items-center gap-x-1">
          <h1 className="font-bold">{data?.nama_kos}</h1>
        </div>
        <div className="flex border-2 rounded-md p-1">
          <Phone />
          <h1 className="font-light">{data?.kontak?.nomor}</h1>
        </div>
      </div>
    </Link>
  );
};
export default Items;
