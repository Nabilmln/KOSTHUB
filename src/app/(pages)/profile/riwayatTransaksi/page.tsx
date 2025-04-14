"use client";
import NavbarProfil from "@/app/component/navbar/NavbarProfil";
import Sidebar from "@/app/component/sidebar/Sidebar";
const RiwayatTransaksi = () => {
  return (
    <>
      <NavbarProfil />

      <div className="grid grid-cols-[0.4fr_2fr] grid-rows-1 gap-1 pt-[3vh] border-t-1 h-screen w-screen">
        <Sidebar />
        <div className="border-2">
          <h1 className="text-[1rem]">ini side kanan Riwayat Transaksi</h1>
        </div>
      </div>
    </>
  );
};

export default RiwayatTransaksi;
