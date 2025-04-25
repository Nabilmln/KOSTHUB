import profile from "../../../../public/asset/profile1.svg";
import Image from "next/image";
import { Star } from "lucide-react";
import { reviewTypeProps } from "../props";

const Reviews: React.FC<reviewTypeProps> = ({ data }) => {
  return (
    <div className="h-[20vh] w-[93vw] shadow-md border-1  rounded-md p-2 m-4 ">
      <div className="flex justify-between items-center mx-6">
        <div className="flex">
          <Image src={profile} alt="" width={56} height={44} />
          <div className="flex-col">
            <h1 className="font-semibold">{data.nama}</h1>
            <div className="flex">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
          </div>
        </div>

        <div>{/* <h1 className="font-light">{data.date}</h1> */}</div>
      </div>

      <div className="pt-1 flex-col ">
        <p className="font-light">{data.komentar}</p>
        <div className="pl-2 mt-2">
          {/* <Image src={data.image} alt="pict" width={106} height={44} /> */}
        </div>
      </div>
    </div>
  );
};
export default Reviews;
