"use client";

import Link from "next/link";
import Icon from "../../../../../public/asset/icon.png";
import GogleIcon from "../../../../../public/asset/GogleIcon.png";
import FacebookIcon from "../../../../../public/asset/Facebook.png";
import LinkIn from "../../../../../public/asset/Linkin.png";
import Github from "../../../../../public/asset/GitHub.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "@/app/component/modal/Modal";
import { useRouter } from "next/navigation";
import { ModalProps } from "@/app/type";
import API from "@/app/util/API";
import { useHook } from "@/app/component/hooks/Kontex";

const Register = () => {
  const { setCurrentUser } = useHook();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tanggal_lahir, setTanggal_lahir] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [nomor, setNomor] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps | null>(null);
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setModalData({
        title: "Edit Profile Gagal",
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
    API.post("/api/auth/register", {
      username,
      password,
      email,
      tanggal_lahir,
      fullname,
      gender,
      nomor,
      alamat,
    })
      .then((res) => {
        console.log(res.data.user);
        setCurrentUser(res.data.user);
        localStorage.setItem("current", JSON.stringify(res.data.user));
        setModalData({
          title: "Berhasil Daftar",
          icon: "success",
          deskripsi: "Selamat Datang Di KostHub",
          confirmButtonText: "lanjut",
          confirmButtonColor: "#3572EF",
          onClose: () => {
            setModalData(null);
            router.push("/auth/login");
          },
        });
      })
      .catch((err) => {
        setModalData({
          title: "Gagal Daftar",
          icon: "error",
          deskripsi: "Username dan kata sandi salah",
          confirmButtonColor: "#3572EF",
          confirmButtonText: "try again!",
          onClose: () => {
            setModalData(null);
          },
        });
      });
  };

  const handleChange = (value: any) => {
    setGender((prev) => (prev === value ? "" : value));
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center rounded-tl-lg">
      <div className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-4">
        <div
          className="bg-sky-400 flex justify-center items-center rounded-r-full h-[100vh]"
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
              <p className="text-[2rem] font-light text-center text-white">
                Enter your personal details to use all of site features
              </p>
            </div>

            <div className="flex justify-center" id="sign Up">
              <Link href="/auth/login">
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
              <label htmlFor="username">Nama Lengkap:</label>
              <br />
              <input
                className="border-2 w-[70vh] rounded-sm p-2"
                type="text"
                onChange={(e) => setFullname(e.target.value)}
              ></input>

              <div className="text-center">
                <label htmlFor="email">Email :</label> <br />
                <input
                  type="text"
                  className="border-2 w-[70vh] rounded-sm p-2"
                  placeholder="KostHub@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 grid-rows-1">
                <div className="text-center">
                  <label htmlFor="email">Username :</label> <br />
                  <input
                    type="email"
                    className="border-2 w-[12vw] rounded-sm p-2"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <label htmlFor="Tanggal Lahir">Tanggal Lahir :</label> <br />
                  <input
                    type="date"
                    className="border-2 w-[12vw] rounded-sm p-2"
                    value={tanggal_lahir}
                    onChange={(e) => setTanggal_lahir(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <label htmlFor="Nama Lengkap">Password :</label>
                  <br />
                  <input
                    type="password"
                    className="border-2 w-[12vw] rounded-sm p-2"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="NomorHp">Nomor Hp :</label> <br />
                  <input
                    type="text"
                    className="border-2 w-[12vw] rounded-sm p-2"
                    placeholder="+62"
                    onChange={(e) => setNomor(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <label htmlFor="Alamat">Alamat :</label> <br />
                  <input
                    type="text"
                    className="border-2 w-[12vw] rounded-sm p-2"
                    placeholder="ACEH"
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
                <fieldset>
                  <label htmlFor="Role">Gender:</label> <br />
                  <div className="flex gap-x-1 text-[1rem] items-center justify-center">
                    <input
                      type="radio"
                      className="w-[2vw] h-[2vh]"
                      name="gender"
                      onChange={() => handleChange("Laki")}
                      checked={gender === "laki"}
                    />
                    <label htmlFor="">Laki-Laki</label>
                    <input
                      type="radio"
                      className="w-[2vw] h-[2vh]"
                      name="gender"
                      checked={gender === "Perempuan"}
                      onChange={() => handleChange("Perempuan")}
                    />
                    <label htmlFor="Perempuan">Perempuan</label>
                  </div>
                </fieldset>
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
              {modalData && <Modal {...modalData} />}
            </form>

            <div id="forgot Password" className="flex justify-center">
              <h1 className="font-bold">Forgor Password?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
