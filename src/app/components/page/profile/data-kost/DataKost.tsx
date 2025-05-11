"use client";
import NavbarProfil from "@/app/components/component/navbar/NavbarProfil";
import Sidebar from "@/app/components/component/sidebar/Sidebar";
const DataKostComponent: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className=" inset-x-0 top-0 h-16">
          <NavbarProfil />
        </div>
        <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-[93vh]">
          <Sidebar />
          <div className="border-2">
            <h1 className="text-[1rem]">ini side kanan</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataKostComponent;
