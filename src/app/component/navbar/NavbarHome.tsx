import iconHItam from "../../../../public/asset/IconHitam.png";
import Image from "next/image";
import profil from "../../../../public/asset/porfil.png";
import { Search } from "lucide-react";
import Link from "next/link";
import { useHook } from "../hooks/Kontex";

const NavbarHome: React.FC = () => {
  const { currentUser } = useHook();

  return (
    <div className="flex justify-around pt-[1rem] pb-[1rem] border-b-1">
      <Link href="#">
        <div className="flex">
          <Image
            src={iconHItam}
            alt="iconHitam"
            className="w-[3vw] h-[5vh]"
          ></Image>
          <h1 className="font-bold text-black text-[2rem]">Kosthub</h1>
        </div>
      </Link>
      <div className="flex border-2 rounded-sm items-center w-[20vw] justify-around">
        <form action="">
          <input type="text" placeholder="Search" className="outline-none" />
        </form>
        <Search />
      </div>
      <Link href="/profile">
        <div className="flex gap-2 items-center">
          <Image
            src={profil}
            alt="profil"
            className="w-[2vw] h-[3.8vh]"
          ></Image>
          <h1 className="font-bold">{currentUser?.user.username}</h1>
        </div>
      </Link>
    </div>
  );
};
export default NavbarHome;
