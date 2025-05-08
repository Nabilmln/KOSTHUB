"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Sidebar from "@/app/component/sidebar/Sidebar";
import { Target, Search } from "lucide-react";
import { useState } from "react";
const RiwayatTransaksi = () => {
  const [month, setMonth] = useState<string>();

  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return (
    <>
      <div className="h-screen w-screen">
        <div className=" inset-x-0 top-0 h-16">
          <NavbarProfil />
        </div>

        <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-[93vh]">
          <Sidebar />
          <div className=" p-4">
            <div className="bg-[#D9D9D9] h-full p-2 rounded-md">
              <h1 className="font-light text-[1rem]">Invoice</h1>
              <div className="flex justify-start items-start gap-4 my-4">
                <select
                  value={month}
                  className="border-2 rounded-md p-2"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="">Pilih Bulan</option>

                  {bulan.map((e) => (
                    <option key={e} value={e} className="text-black">
                      {e}
                    </option>
                  ))}
                </select>
                <div className="border-2 rounded-lg flex justify-around p-2">
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="Search Here..."
                  />
                  <Search />
                </div>
              </div>
              <div className="flex justify-around items-center border-y-2 p-2">
                <h1 className="">Mitra</h1>
                <h1 className="">Tanggal</h1>
                <h1 className="">MetodePembayaran</h1>
                <h1 className="">Status</h1>
                <h1 className="">Jumlah</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiwayatTransaksi;
