import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { BedDouble, ShowerHead, Map, Wifi, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { itemsType } from "@/app/type";

const items = ({
  _id,
  image,
  harga,
  hargabulan,
  hargatahun,
  deskripsi,
  lokasi,
  kamar,
  toilet,
  map,
  fotofrofil,
  username,
  nomorhp,
}: itemsType) => {
  const [ratingStar, setRatingStar] = useState<number>(0);
  return (
    <Link
      href={`/kost/${_id}`}
      className="border-2 rounded-md flex flex-col items-center p-[1rem]"
    >
      <Image src={image} alt="test" width={400} height={10}></Image>
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
      <div className="flex items-center gap-x-3">
        <div className="grid grid-cols-4 grid-rows-1 gap-x-2 border-1 rounded-md p-1 w-[13vw] text-center">
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
            <Wifi />
          </div>
        </div>
        <div className=" flex gap-x-2" title="Rating">
          <div
            onMouseOver={() => setRatingStar(1)}
            onMouseOut={() => setRatingStar(0)}
          >
            <Star
              color={ratingStar >= 1 ? "#FFFF00" : "#000000"}
              className="duration-[0.2s]"
            />
          </div>
          <div
            onMouseOver={() => setRatingStar(2)}
            onMouseOut={() => setRatingStar(0)}
          >
            <Star
              color={ratingStar >= 2 ? "#FFFF00" : "#000000"}
              className="duration-[0.2s]"
            />
          </div>
          <div
            onMouseOver={() => setRatingStar(3)}
            onMouseOut={() => setRatingStar(0)}
          >
            <Star
              color={ratingStar >= 3 ? "#FFFF00" : "#000000"}
              className="duration-[0.2s]"
            />
          </div>
          <div
            onMouseOver={() => setRatingStar(4)}
            onMouseOut={() => setRatingStar(0)}
          >
            <Star
              color={ratingStar >= 4 ? "#FFFF00" : "#000000"}
              className="duration-[0.2s]"
            />
          </div>
          <div
            onMouseOver={() => setRatingStar(5)}
            onMouseOut={() => setRatingStar(0)}
          >
            <Star
              color={ratingStar >= 5 ? "#FFFF00" : "#000000"}
              className="duration-[0.2s]"
            />
          </div>
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
    </Link>
  );
};
export default items;
