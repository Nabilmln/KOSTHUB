"use client";
import Image from "next/image";
import image from "../../../../../public/asset/image1.svg";
import image1 from "../../../../../public/asset/image2.svg";
import image2 from "../../../../../public/asset/image3.svg";
import image3 from "../../../../../public/asset//image4.svg";
import image4 from "../../../../../public/asset/image5.svg";
import facebook from "../../../../../public/asset/facebook.svg";
import twitter from "../../../../../public/asset/twiter.svg";
import instagram from "../../../../../public/asset/instagram.svg";
import Property from "@/app/component/card/Property";
import { PropertyData } from "@/app/data/card";
import NabvarItem from "@/app/component/navbar/NavbarItem";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Hotel,
  Star,
  Phone,
  Mail,
  Heart,
  Forward,
  Bookmark,
} from "lucide-react";

const SelectItems = () => {
  const [kostId, setKostId] = useState<string>("");
  const [ratingStar, setRatingStar] = useState<number>(0);

  useEffect(() => {
    setKostId(() => {
      const pathName = usePathname().split("/");
      const id = pathName[pathName.length - 1];
      return id;
    });
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <div className=" inset-x-0 top-0 h-16">
        <NabvarItem />
      </div>
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
          <div className="flex items-center justify-between mt-2">
            <h1 className="font-bold text-[2rem]">Serenity III</h1>
            <div className="flex gap-x-4">
              <Heart className="hover:text-red-500 duration-[0.4s]" />
              <Forward />
              <Bookmark className="hover:text-yellow-300 duration-[0.4s]" />
            </div>
          </div>
          <div>
            <h1 className="font-light">Lamgugob, Banda Aceh</h1>
          </div>
          <div className="w-full rounded-md h-[10vh] bg-sky-500 flex justify-center items-center shadow-lg border-1">
            <div className=" grid grid-cols-4 grid-rows-1 gap-x-16 ">
              {PropertyData.map((item, index) => (
                <Property
                  key={index}
                  Icon={item.Icon}
                  title={item.title}
                  index={item.index}
                />
              ))}
            </div>
          </div>
          <div className="mt-1 w-full rounded-md h-[12vh] bg-sky-500 border-1 p-2 flex-col">
            <h1 className="font-bold text-[1rem]">Description</h1>
            <div className="rounded-md shadow-lg bg-white p-2">
              <h1 className="font-semibold">
                For rent: A comfortable house featuring an air-conditioned
                bedroom, a fully equipped kitchen with a refrigerator and stove.
                Please note that electricity, water, and Wi-Fi bills are the
                tenant's responsibility!
              </h1>
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
                <div className="flex items-center gap-3">
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
