"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "../../../../public/asset/icon.png";
import GogleIcon from "../../../../public/asset/GogleIcon.png";
import FacebookIcon from "../../../../public/asset/Facebook.png";
import LinkIn from "../../../../public/asset/Linkin.png";
import Github from "../../../../public/asset/GitHub.png";
import { useState } from "react";
import { useHook } from "@/app/layout/Provider";
import Image from "next/image";

const Login = () => {
  const { user, setUser } = useHook();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = () => {
    const login = user.find(
      (u: any) => u.username === username && u.password === password
    );

    if (login) {
      localStorage.setItem("current", JSON.stringify(login));
      router.push("/Home");
    } else {
      alert("username dan password salah");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center rounded-tl-lg">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="flex justify-center items-center" id="kiri">
          <div id="side-kiri">
            <div className="flex justify-center py-3">
              <h1 className="text-[4rem] font-bold">Sing In</h1>
            </div>

            <div
              className="grid grid-cols-4 grid-rows-1 gap-6 py-3"
              id="icon-Login"
            >
              <div className="">
                <Image src={GogleIcon} alt="Goggle" width={40} height={40} />
              </div>
              <div className="">
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </div>
              <div className="">
                <Image src={LinkIn} alt="LinkIn" width={40} height={40} />
              </div>
              <div className="">
                <Image src={Github} alt="Github" width={40} height={40} />
              </div>
            </div>

            <div id="text">
              <p className="flex justify-center font-light">
                use your email and password
              </p>
            </div>

            <form action="" className="py-3">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                className="border-2 w-[27vh] rounded-sm"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </form>

            <form action="" className="pb-3">
              <label htmlFor="password">Password :</label> <br />
              <input
                type="password"
                className="border-2 w-[27vh] rounded-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>

            <div id="forgot Password" className="flex justify-center">
              <h1 className="font-bold">Forgor Password?</h1>
            </div>

            <div id="button SignIn" className="flex justify-center py-3">
              <button
                className="border-2 rounded-full text-[1rem]  hover:bg-sky-800 duration-[1s] w-[8vw] h-[4vh] shadow-lg"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div
          className="bg-sky-400 w-[50vw] h-[100vh] flex justify-center items-center rounded-s-lg"
          id="kanan"
        >
          <div className="" id="sidebar Container">
            <div className="flex justify-center" id="icon">
              <img className="h-[15vh] w-[8vw]" src={Icon.src} alt="Logo" />
            </div>

            <div className="flex justify-center pt-[2rem]" id="text">
              <h1 className="text-[3rem] font-bold text-white">Hai, Friend</h1>
            </div>

            <div className="flex justify-center py-[2rem]" id="Paragraf">
              <p className="text-[2rem] font-light text-white">
                Register your personal detail to use all of site feature
              </p>
            </div>

            <div className="flex justify-center" id="sign Up">
              <Link href="/Register">
                <button className="border-2 rounded-full text-[1rem] text-white hover:bg-sky-800 duration-[1s] w-[8vw] h-[4vh] shadow-lg">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
