import Image from "next/image";
import { BedDouble, MapPin, ShowerHead } from "lucide-react";
import { bestPropertyTypeProps } from "../props";

const BestProperty: React.FC<bestPropertyTypeProps> = ({ data }) => {
  return (
    <div className="border-2 h-[33vh] w-[20vw] rounded-md items-center p-[1rem]">
      <div className="flex items-center flex-col">
        <Image src={data.image} alt="" width={400} height={20} />
        <h1 className="font-bold">{data.title}</h1>
        <p className="font-light">{data.deskripsi}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4" title="Lokasi">
        <div className="flex">
          <MapPin />
          <h1 className="font-light">{data.lokasi}</h1>
        </div>

        <div className="flex" title="KamarMandi">
          <ShowerHead />
          <h1 className="font-light">{data.toilet}</h1>
        </div>

        <div className="col-start-2 row-start-2 flex" title="Kamar">
          <BedDouble />
          <h1 className="font-light">{data.kamar}</h1>
        </div>

        <div className="" title="Rating"></div>
      </div>
    </div>
  );
};

export default BestProperty;
