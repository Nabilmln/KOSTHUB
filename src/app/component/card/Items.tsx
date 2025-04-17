import Image from "next/image";
import { BedDouble, ShowerHead, Map, Wifi, Phone, MapPin } from "lucide-react";
import { itemsType } from "@/app/type";

const items = ({
  image,
  harga,
  hargabulan,
  hargatahun,
  deskripsi,
  lokasi,
  kamar,
  toilet,
  map,
  wifi,
  fotofrofil,
  username,
  nomorhp,
}: itemsType) => {
  return (
    <div className="border-2 rounded-md flex flex-col items-center p-[1rem]">
      <Image src={image} alt="" width={400} height={10}></Image>
      <div className="">
        <h1 className="font-light text-[1rem]">{harga}</h1>
      </div>
      <div className="flex justify-center gap-x-2">
        <div className="bg-sky-300 rounded-md p-1">
          <h1 className="font-bold">{hargabulan}</h1>
        </div>
        <div className="bg-sky-300 rounded-md p-1">
          <h1 className="font-bold">{hargatahun}</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-light">{deskripsi}</h1>
      </div>
      <div className="flex">
        <MapPin />
        <h1 className="font-light">{lokasi}</h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-x-4 border-2 rounded-md p-2 w-[20vw] text-center">
        <div className="flex">
          <BedDouble />
          <h1 className="font-bold">{kamar}</h1>
        </div>
        <div className="flex">
          <ShowerHead />
          <h1>{toilet}</h1>
        </div>
        <div className="flex">
          <Map />
          <h1>{map}</h1>
        </div>
        <div className="flex">
          <h1 className="font-bold">{wifi}</h1>
          <Wifi />
        </div>
      </div>

      <div className="flex gap-x-[4rem] pt-[1rem] ">
        <div className="flex items-center gap-x-1">
          <Image src={fotofrofil} alt="" width={30} height={0}></Image>
          <h1 className="font-bold">{username}</h1>
        </div>
        <div className="flex border-2 rounded-md p-1">
          <Phone />
          <h1 className="font-light">{nomorhp}</h1>
        </div>
      </div>
    </div>
  );
};
export default items;
