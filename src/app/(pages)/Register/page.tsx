"use client";

import Link from "next/link";
import Icon from "../../../../public/asset/icon.png";
import GogleIcon from "../../../../public/asset/GogleIcon.png";
import FacebookIcon from "../../../../public/asset/Facebook.png";
import LinkIn from "../../../../public/asset/Linkin.png";
import Github from "../../../../public/asset/GitHub.png";
import { useState } from "react";
import { useHook } from "@/app/layout/Provider";
import Image from "next/image";
import Modal from "@/app/component/modal/Modal";
import { useRouter } from "next/navigation";
import { ModalProps } from "@/app/type";
import { userType } from "@/app/type";

const Register = () => {
  const { setUser } = useHook();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps | null>(null);
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setModalData({
        title: "Register Gagal",
        icon: "warning",
        deskripsi: "Field Tidak Boleh Kosong!",
        confirmButtonColor: "#3572EF",
        confirmButtonText: "try again!",
        onClose: () => {
          setModalData(null);
        },
      });
      return;
    }
    const newUser: userType = {
      username: username,
      password: password,
      email: email,
      nama: "",
      date: "",
      gender: "",
      contact: ",",
    };
    setUser((prev) => [...prev, newUser]);
    setModalData({
      title: "Berhasil Register",
      icon: "success",
      deskripsi: "Selamat Akun Kamu Sudah Dibuat",
      confirmButtonColor: "#3572EF",
      confirmButtonText: "Isi Data",
      onClose: () => {
        setModalData(null);
        router.push("/Biodata");
      },
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center rounded-tl-lg">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div
          className="bg-sky-400 w-[50vw] h-[100vh] flex justify-center items-center rounded-s-lg"
          id="kanan"
        >
          <div className="" id="sidebar kiri">
            <div className="flex justify-center" id="icon">
              <img className="h-[15vh] w-[8vw]" src={Icon.src} alt="Logo" />
            </div>

            <div className="flex justify-center pt-[2rem]" id="text">
              <h1 className="text-[3rem] font-bold text-white">
                Welcome Back!
              </h1>
            </div>

            <div className="flex justify-center py-[2rem]" id="Paragraf">
              <p className="text-[2rem] font-light text-white">
                Enter your personal details to use all of site features
              </p>
            </div>

            <div className="flex justify-center" id="sign Up">
              <Link href="/Login">
                <button className="border-2 rounded-full text-[1rem] text-white hover:bg-sky-800 duration-[1s] w-[8vw] h-[4vh] shadow-lg">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center" id="kiri">
          <div id="side-kanan">
            <div className="flex justify-center py-3">
              <h1 className="text-[4rem] font-bold">Create Account</h1>
            </div>

            <div
              className="grid grid-cols-4 grid-rows-1 gap-4 py-3"
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
                <Image src={Github} alt="" width={40} height={40} />
              </div>
            </div>

            <div id="text">
              <p className="flex justify-center font-light">
                or use your email for registration
              </p>
            </div>

            <form onSubmit={handleRegister} className="text-center">
              <label htmlFor="username">Username: (4 to 8 characters)</label>
              <br />
              <input
                className="border-2 w-[27vh] rounded-sm p-2"
                type="text"
                minLength={4}
                maxLength={8}
                onChange={(e) => setUsername(e.target.value)}
              ></input>

              <div className="text-center">
                <label htmlFor="password">Password : (4 to 8 characters)</label>{" "}
                <br />
                <input
                  type="password"
                  className="border-2 w-[27vh] rounded-sm p-2"
                  minLength={4}
                  maxLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center">
                <label htmlFor="email">Email :</label> <br />
                <input
                  type="email"
                  className="border-2 w-[27vh] rounded-sm p-2"
                  placeholder="KostHub@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div id="forgot Password" className="flex justify-center">
                <h1 className="font-bold">Forgor Password?</h1>
              </div>

              <div id="button SignIn" className="flex justify-center py-3">
                <button
                  className="border-2 rounded-full text-[1rem]  hover:bg-sky-800 duration-[1s] w-[8vw] h-[4vh] shadow-lg"
                  onClick={handleRegister}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          {modalData && <Modal {...modalData} />}
        </div>
      </div>
    </div>
  );
};

export default Register;
