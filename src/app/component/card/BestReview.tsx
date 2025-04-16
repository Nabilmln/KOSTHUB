import Image from "next/image";

import { Star } from "lucide-react";

import { bestReviewType } from "@/app/type";
const BestRewiew = ({
  image,
  title,
  date,
  gambar,
  deskripsi,
}: bestReviewType) => {
  return (
    <div className="border-2 h-[25vh] w-[25vw] rounded-md p-[1rem]">
      <div className="grid grid-cols-2 grid-rows-1 ">
        <div className="flex items-center gap-x-2">
          <Image src={image} width={36} alt="Accont" height={16} />
          <h1 className="">{title}</h1>
        </div>
        <h1 className="font-light">{date}</h1>
      </div>
      <div className=" flex gap-x-1" title="Rating">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className="grid grid-cols-2 grid-rows-1 mt-2">
        <div>
          <Image
            src={gambar}
            alt="kost"
            width={160}
            height={46}
            className="rounded-md"
          />
        </div>
        <div>
          <p className="font-medium text-left">{deskripsi}</p>
        </div>
      </div>
    </div>
  );
};
export default BestRewiew;
