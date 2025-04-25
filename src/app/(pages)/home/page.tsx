"use client";
import { useState, useEffect } from "react";
import NavbarHome from "@/app/component/navbar/NavbarHome";
import Items from "@/app/component/card/Items";
import FooterLanding from "@/app/component/footer/FooterLanding";
import { Funnel } from "lucide-react";

import API from "@/app/util/API";

const Home = () => {
  const [filter, setFilter] = useState<string>("");
  const [short, setShort] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetch = async () => {
    try {
      const res = await API.get("/api/kos/", {});
      setItems(res.data);
    } catch (err) {
      console.log("gagal fetch", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex-col">
          <NavbarHome />
          <div className="flex justify-center items-center h-screen w-screen gap-2">
            <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-sky-500 size-105"></div>
            <p className="text-[2rem] font-light">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="w-screen h-full pb-[1rem]">
            <div className="m-2">
              <NavbarHome />
            </div>
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
                      <option
                        value="diminati"
                        className="text-black font-semibold"
                      >
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
            <div className="w-full h-full ">
              <div className=" flex justify-center items-center">
                <h1 className="font-bold text-[3rem]">Top picks for you</h1>
              </div>
              <div className="grid grid-cols-4 grid-rows-1 gap-4 p-[1rem]">
                {items.slice(0, 4).map((item, index) => (
                  <Items key={index} data={item} />
                ))}
              </div>
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-[3rem]">More Recommendation</h1>
              </div>
              <div className="grid grid-cols-4 grid-rows-1 gap-4 p-[1rem]">
                {items.slice(4, 40).map((item, index) => (
                  <Items key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
          <FooterLanding />
        </>
      )}
    </div>
  );
};

export default Home;
