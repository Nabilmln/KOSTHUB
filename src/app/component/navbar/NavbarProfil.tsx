import iconHItam from "../../../../public/asset/IconHitam.png";
import Image from "next/image";
import profil from "../../../../public/asset/porfil.png";
import Link from "next/link";
import { useHook } from "../hooks/UserAuth";

const NavbarProfil: React.FC = () => {
  const { currentUser, isLoading } = useHook();

  return (
    <div className="flex justify-around pt-[1rem] pb-[1rem] border-b-1">
      <Link href="/home">
        <div className="flex">
          <Image
            src={iconHItam}
            alt="iconHitam"
            className="w-[3vw] h-[5vh]"
          ></Image>
          <h1 className="font-bold text-black text-[2rem]">Kosthub</h1>
        </div>
      </Link>
      <Link href="/home">
        <div className="flex gap-2 items-center">
          <div className="border-2 rounded-full p-1 hover:bg-sky-500 duration-[0.5s] hover:text-white">
            <h1 className="font-bold">Beranda</h1>
          </div>
          <Image
            src={profil}
            alt="profil"
            className="w-[2vw] h-[3.8vh]"
          ></Image>
          <h1 className="font-bold">
            {isLoading ? "Loading..." : currentUser?.username ?? "Guest"}
          </h1>
        </div>
      </Link>
    </div>
  );
};
export default NavbarProfil;
