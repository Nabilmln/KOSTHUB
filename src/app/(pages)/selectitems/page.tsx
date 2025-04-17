import Image from "next/image";
import image from "../../../../public/asset/image1.svg";
import image1 from "../../../../public/asset/image2.svg";
import image2 from "../../../../public/asset/image3.svg";
import image3 from "../../../../public/asset//image4.svg";
import image4 from "../../../../public/asset/image5.svg";
import facebook from "../../../../public/asset/facebook.svg";
import twitter from "../../../../public/asset/twiter.svg";
import instagram from "../../../../public/asset/instagram.svg";
import { Hotel, Star, Phone, Mail } from "lucide-react";

const SelectItems = () => {
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-2 ">
        <div className="h-[60vh] p-2 " title="ini kiri">
          <div className="shadow-2xl rounded-md flex justify-center items-center border-1">
            <div className="grid grid-cols-2 grid-rows-1 gap-x-1 ">
              <div className="flex justify-center items-center">
                <div className=" flex justify-center items-center h-[50vh] w-[20vw] mt-6 ml-6 rounded-md">
                  <Image src={image} width={360} height={90} alt="" />
                </div>
              </div>
              <div className="flex justify-center items-center h-[50vh] w-[24vw] mt-8 rounded-md ">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[47vh] w-[23vw]">
                  <div className=" rounded-md flex justify-center items-center ">
                    <Image src={image1} alt="" width={180} height={46} />
                  </div>
                  <div className="rounded-md flex justify-center items-center ">
                    <Image src={image2} alt="" width={180} height={46} />
                  </div>
                  <div className=" rounded-md flex justify-center items-center ">
                    <Image src={image3} alt="" width={180} height={46} />
                  </div>
                  <div className=" rounded-md flex justify-center items-center ">
                    <Image src={image4} alt="" width={180} height={46} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[90vh] rounded-md" title="ini kanan">
          <div className=" flex justify-center items-center h-[70vh] w-[35vw] mt-8 bg-sky-600 rounded-md shadow-lx border-1">
            <div className="flex-col">
              <div className="border-1 h-[15vh] w-[30vw] rounded-md bg-white flex-col p-2">
                <h1 className="font-bold text-[2rem]">Serenity III</h1>
                <p className="font-light">
                  Ie Masen Kaye Adang, Syiah Kuala, Banda Aceh
                </p>
                <p className="font-light">IDR.30.000.000/year</p>
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className=" h-[28vh] w-[30vw] rounded-md bg-white flex-col p-2 mt-[10rem] border-1">
                <h1 className="font-semibold w-[14vw] text-6">
                  Are you interested? Please contact us!
                </h1>
                <p className="font-light mt-2">Contact</p>
                <div className="flex gap-x-2 mt-2">
                  <Hotel />
                  <p className="font-light">
                    Ie Masen Kaye Adang, Syiah Kuala, Banda Aceh
                  </p>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <Phone />
                  <p className="font-light">012-3456-7890</p>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <Mail />
                  <p className="font-light">serenity@gmail.com</p>
                </div>
                <p className="font-bold text-2">Sosial Media</p>
                <div className="flex gap-x-2 mt-2">
                  <Image src={facebook} alt="" />
                  <Image src={twitter} alt="" />
                  <Image src={instagram} alt="" />
                  <p className="font-light">Serenity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-center ">
            <div className="w-[35vw] h-[5vh] bg-green-500  mt-2 border-1 rounded-md hover:bg-green-700  flex justify-center duration-[0.4s]">
              <button className="text-white font-bold text-[1rem]">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectItems;
