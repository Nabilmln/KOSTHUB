"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import { bestReviewTypeProps } from "../props";

const BestRewiew: React.FC<bestReviewTypeProps> = ({ data }) => {
  const [ratingStar, setRatingStar] = useState<number>(0);

  return (
    <div className="border-2 h-[25vh] w-[25vw] rounded-md p-[1rem]">
      <div className="grid grid-cols-2 grid-rows-1 ">
        <div className="flex items-center gap-x-2">
          <Image src={data.image} width={36} alt="Accont" height={16} />
          <h1 className="">{data.title}</h1>
        </div>
        <h1 className="font-light">{data.date}</h1>
      </div>
      <div className=" flex gap-x-4" title="Rating">
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
      <div className="grid grid-cols-2 grid-rows-1 mt-2">
        <div>
          <Image
            src={data.gambar}
            alt="kost"
            width={160}
            height={46}
            className="rounded-md"
          />
        </div>
        <div>
          <p className="font-medium text-left">{data.deskripsi}</p>
        </div>
      </div>
    </div>
  );
};
export default BestRewiew;
