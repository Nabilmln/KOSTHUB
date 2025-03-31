import Image from "next/image";
import { BedDouble, MapPin, ShowerHead } from "lucide-react";
import { bestPropertyType } from "@/app/type";

const BestProperty = ({
  image,
  title,
  deskripsi,
  lokasi,
  toilet,
  kamar,
}: bestPropertyType) => {
  return (
    <div className="border-2 h-[33vh] w-[20vw] rounded-md items-center p-[1rem]">
      <div className="flex items-center flex-col">
        <Image src={image} alt="" width={400} height={20} />
        <h1 className="font-bold">{title}</h1>
        <p className="font-light">{deskripsi}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4" title="Lokasi">
        <div className="flex">
          <MapPin />
          <h1 className="font-light">{lokasi}</h1>
        </div>

        <div className="flex" title="KamarMandi">
          <ShowerHead />
          <h1 className="font-light">{toilet}</h1>
        </div>

        <div className="col-start-2 row-start-2 flex" title="Kamar">
          <BedDouble />
          <h1 className="font-light">{kamar}</h1>
        </div>

        <div className="" title="Rating"></div>
      </div>
    </div>
  );
};

export default BestProperty;
