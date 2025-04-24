import profile from "../../../../public/asset/profile1.svg";
import Image from "next/image";
import kasur from "../../../../public/asset/kasur1.svg";
import { Star } from "lucide-react";
const Reviews = () => {
  return (
    <div className="h-[20vh] w-[93vw] shadow-2xl border-1 rounded-md p-2 ">
      <div className="flex justify-between items-center mx-6">
        <div className="flex">
          <Image src={profile} alt="" width={56} height={44} />
          <div className="flex-col">
            <h1 className="font-semibold">Risa Larana</h1>
            <div className="flex">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-light">13 April 2025</h1>
        </div>
      </div>

      <div className="pt-1 flex-col ">
        <p className="font-light">
          Kamar luas, ada AC dan kamar mandi dalam. Suasananya tenang cocok buat
          yang kerja WFH. Dapet parkiran motor dan wifi kenceng juga. Worth it
          untuk harga segitu!
        </p>
        <div className="pl-2 mt-2">
          <Image src={kasur} alt="pict" width={106} height={44} />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
