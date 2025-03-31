import { ourServicesType } from "@/app/type";
import Image from "next/image";

const OurServices = ({ image, title, deskripsi }: ourServicesType) => {
  return (
    <div className="border-2 h-[25vh] w-[20vw] rounded-md flex items-center">
      <div className="flex justify-center items-center flex-col">
        <Image src={image} alt="" width={40} height={10} />
        <h1 className="font-bold">{title}</h1> <br />
        <p className="font-light text-center">{deskripsi}</p>
      </div>
    </div>
  );
};

export default OurServices;
