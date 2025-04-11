import Link from "next/link";
import {
  User,
  File,
  HandCoins,
  Bookmark,
  KeyRound,
  DoorClosed,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="border-2" title="side-kiri">
      <div title="side-top">
        <Link href="#">
          <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] text-[1.8rem] items-center">
            <User width="16" hanging="16" className="w-[3vw] h-[3vh]" />
            <h1 className="font-light">Profile</h1>
          </div>
        </Link>
        <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
          <File width="16" hanging="16" className="w-[3vw] h-[3vh]" />
          <h1 className="font-light">Data Kost</h1>
        </div>
        <Link href="#">
          <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
            <Bookmark width="16" hanging="16" className="w-[3vw] h-[3vh]" />
            <h1 className="font-light">Simpan Kost</h1>
          </div>
        </Link>
        <Link href="#">
          <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
            <HandCoins width="16" hanging="16" className="w-[3vw] h-[3vh]" />
            <h1 className="font-light">Riwayat Transaksi</h1>
          </div>
        </Link>
      </div>
      <div title="side-bot">
        <Link href="#">
          <div className="flex gap-x-2 hover:text-sky-600 duration-[0.5s] items-center text-[1.8rem]">
            <KeyRound width="16" hanging="16" className="w-[3vw] h-[3vh]" />
            <h1 className="font-light">Ubah Password</h1>
          </div>
        </Link>

        <Link href="#">
          <div className="flex gap-x-2 text-red-600 items-center text-[1.8rem]">
            <DoorClosed width="16" hanging="16" className="w-[3vw] h-[3vh] " />
            <h1 className="font-light ">Log out</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
