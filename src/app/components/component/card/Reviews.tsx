import profile from "../../../../../public/asset/profile1.svg";
import Image from "next/image";
import { Star } from "lucide-react";
import { reviewTypeProps } from "../props";
import { useState } from "react";

const Reviews: React.FC<reviewTypeProps> = ({ data }) => {
  const [ratingStar] = useState<number>(0);
  return (
    <div className="h-[20vh] w-[93vw] shadow-md border-1  rounded-md p-2 m-4 ">
      <div className="flex justify-between items-center mx-6">
        <div className="flex">
          <Image src={profile} alt="" width={56} height={44} />
          <div className="flex-col">
            <h1 className="font-semibold">{data.nama}</h1>
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star}>
                  <Star
                    color={
                      ratingStar || data.bintang >= star ? "#FFFF00" : "#000000"
                    }
                    className="duration-[0.2s]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="font-light">{data.tanggal}</span>
        </div>
      </div>

      <div className="pt-1 flex-col ">
        <p className="font-light">{data.komentar}</p>
        <div className="pl-2 mt-2">
          <Image
            src={`http://localhost:5000/${data.imageUlasan}`}
            alt="ImageUlasan"
            width={100}
            height={200}
            className="w-30 h-20 object-center rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
