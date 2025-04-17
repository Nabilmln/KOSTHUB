"use client";
import { useState } from "react";
import NavbarHome from "@/app/component/navbar/NavbarHome";
import Items from "@/app/component/card/Items";
import { itemsData } from "@/app/data/card";
import FooterLanding from "@/app/component/footer/FooterLanding";
import { Funnel } from "lucide-react";

const Home = () => {
  const [filter, setFilter] = useState<string>("");
  const [short, setShort] = useState<string>("");

  return (
    <>
      <NavbarHome />
      <div className="w-screen h-screen pt-[1rem]">
        <div className="flex justify-around">
          <div className="grid grid-cols-2 gap-x-100">
            <div title="side-kana" className="flex space-x-4 ">
              <button className="border-2 rounded-md w-[5vw] hover:bg-sky-400 duration-[1s]">
                All
              </button>
              <button className="border-2 rounded-md w-[5vw] hover:bg-sky-400 duration-[1s]">
                Top Kost
              </button>
            </div>
            <div title="side-kiri" className="flex space-x-4">
              <form
                action=""
                className="border-2 rounded-sm flex items-center space-x-2 p-1"
              >
                <Funnel />
                <h1 className="">Filter</h1>
                <select
                  value={filter}
                  className="outline-none"
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="-" className="text-black font-bold">
                    Pilih
                  </option>
                  <option value="diminati" className="text-black font-semibold">
                    Diminati
                  </option>
                  <option
                    value="paling-diminati"
                    className="text-black font-semibold"
                  >
                    Paling diminati
                  </option>
                </select>
              </form>
            </div>
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
