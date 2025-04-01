"use client";
import { useState } from "react";
import NavbarHome from "@/app/component/navbar/NavbarHome";
const Home = () => {
  const [filter, setFilter] = useState<string>("");
  const [short, setShort] = useState<string>("");

  return (
    <>
      <NavbarHome />
      <div className="w-screen h-screen">
        <div className="flex justify-around">
          <div className="">
            <button className="border-2 rounded-full w-[5vw] hover:">
              All
            </button>
            <button className="border-2 rounded-full w-[5vw] hover:">
              Top Kost
            </button>
          </div>

          <div className="flex">
            <button className="border-2 rounded-full w-[5vw] hover:">
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
      </div>
    </>
  );
};

export default Home;
