"use client";
import NavbarProfil from "@/app/components/component/navbar/NavbarProfil";
import Sidebar from "@/app/components/component/sidebar/Sidebar";
import { useHook } from "@/app/components/component/hooks/Kontex";
import { itemsType } from "@/app/components/type";
import Items from "@/app/components/component/card/Items";
import API from "@/app/components/util/API";
import { useEffect, useState } from "react";

const SimpanKostComponent: React.FC = () => {
  const { currentUser } = useHook();
  const [dataKost, setDataKost] = useState<itemsType[]>();

  const handleFetch = async () => {
    try {
      const res = await API.get("/api/auth/getSaveKost", {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
        },
      });
      setDataKost(res.data.savedKos);
    } catch (error) {
      console.log("Data Kost di Get", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  console.log("Data Save Kost", currentUser?.user.savedKos);
  return (
    <>
      <div className="h-screen w-screen">
        <div className=" inset-x-0 top-0 h-16">
          <NavbarProfil />
        </div>

        <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-[93vh]">
          <Sidebar />
          <div className="border-2">
            <div className="grid grid-cols-3 grid-rows-1 p-2 gap-2 ">
              {dataKost?.map((item, key) => (
                <Items key={key} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpanKostComponent;
