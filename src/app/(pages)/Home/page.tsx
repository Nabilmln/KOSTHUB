"use client";
import { useState } from "react";
import NavbarHome from "@/app/component/navbar/NavbarHome";
import Items from "@/app/component/card/Items";
import { itemsData } from "@/app/data/card";
import FooterLanding from "@/app/component/footer/FooterLanding";

const Home = () => {
  const [filter, setFilter] = useState<string>("");
  const [short, setShort] = useState<string>("");

  return (
    <>
      <NavbarHome />
      <div className="w-screen h-screen pt-[1rem]">
        <div className="flex justify-around">
          <div className="">
            <button className="border-2 rounded-full w-[5vw] hover:bg-sky-400 duration-[1s]">
              All
            </button>
            <button className="border-2 rounded-full w-[5vw] hover:bg-sky-400 duration-[1s]">
              Top Kost
            </button>
          </div>

          <div className="flex">
            <button className="border-2 rounded-full w-[5vw] hover:bg-sky-400 duration-[1s]">
              Filter
            </button>
            <form
              action=""
              className="border-2 rounded-full w-[14vw] flex items-center"
            >
              <h1 className="">
                <span className="font-light">Short By:</span> Highest Price
              </h1>
              <select
                value={short}
                className=""
                onChange={(e) => setShort(e.target.value)}
              >
                <option value="-" className="text-black font-bold">
                  pilih
                </option>
                <option value="terbaik" className="text-black font-bold">
                  Terbaik
                </option>
                <option value="terburuk" className="text-black font-bold">
                  Terburuk
                </option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-1 gap-4 p-[1rem]">
          {itemsData.map((item, index) => (
            <Items
              key={index}
              image={item.image}
              harga={item.harga}
              hargabulan={item.hargabulan}
              hargatahun={item.hargatahun}
              deskripsi={item.deskripsi}
              lokasi={item.lokasi}
              kamar={item.kamar}
              toilet={item.toilet}
              map={item.map}
              wifi={item.wifi}
              fotofrofil={item.fotofrofil}
              username={item.username}
              nomorhp={item.nomorhp}
            />
          ))}
        </div>
      </div>
      <FooterLanding />
    </>
  );
};

export default Home;
