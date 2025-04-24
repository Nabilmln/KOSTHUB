import { JSXElementConstructor, useState } from "react";
import { Snowflake, Star } from "lucide-react";
import { BedDouble, ShowerHead, Map, Wifi, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { itemsTypeProps } from "../props";
import Image from "next/image";

const Items: React.FC<itemsTypeProps> = ({ data }) => {
  const [ratingStar, setRatingStar] = useState<number>(0);

  // const Icon: Record<string, JSX.Element> = {
  //   "AC": <Snowflake size={16} />,
  //   "Kasur": <BedDouble size={16} />,
  //   "Kamar Mandi Dalam": <ShowerHead size={16} />,
  //   "WiFi": <Wifi size={16} />,
  // };

  return (
    <Link
      href={`/kost/${data.id_kos}`}
      className="border-2 rounded-md flex flex-col items-center p-[1rem]"
    >
      <Image
        src={data?.image?.find((img) => img.isThumbnail)?.url ?? "/kost2.png"}
        alt="Gambar"
        width={1078}
        height={123}
      />

      <div className="flex justify-center gap-x-2 p-2">
        <div className="bg-sky-300 rounded-md p-1">
          <h1 className="font-bold">Rp.{data.harga_pertahun}/Bulan</h1>
        </div>
        <div className="bg-sky-300 rounded-md p-1">
          <h1 className="font-bold"> Rp.{data.harga_pertahun}/Tahun</h1>
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
          {data.fasilitas.map((item, index) => (
            <div key={index}>
              <h1>{item}</h1>
            </div>
          ))}
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
