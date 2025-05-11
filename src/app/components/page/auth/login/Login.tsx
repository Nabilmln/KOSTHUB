"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "../../../../../../public/asset/icon.png";
import GogleIcon from "../../../../../../public/asset/GogleIcon.png";
import FacebookIcon from "../../../../../../public/asset/Facebook.png";
import LinkIn from "../../../../../../public/asset/Linkin.png";
import Github from "../../../../../../public/asset/GitHub.png";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/app/components/component/modal/Modal";
import { ModalProps, userType } from "@/app/components/type";
import API from "@/app/components/util/API";
import { useHook } from "@/app/components/component/hooks/Kontex";

const LoginComponent: React.FC = () => {
  const { setCurrentUser } = useHook();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps | null>(null);
  const router = useRouter();
  const [showpassword, setShowpassword] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setModalData({
        title: "Mohon Isi Semua Field",
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

    API.post("/api/auth/login", {
      username,
      password,
    })
      .then((res) => {
        const data: userType = {
          token: res.data.token,
          user: {
            _id: res.data.user._id,
            username: res.data.user.username,
            email: res.data.user.email,
            fullname: res.data.user.fullname,
            fotoProfile: res.data.user.fotoProfile,
            tanggal_lahir: res.data.user.tanggal_lahir,
            nomor: res.data.user.nomor,
            gender: res.data.user.gender,
            alamat: res.data.user.alamat,
          },
        };
        setCurrentUser(data);
        setUsername("");
        setPassword("");
        setModalData({
          title: "Berhasil Login",
          icon: "success",
          deskripsi: "Selamat Datang Di KostHub",
          confirmButtonText: "lanjut",
          confirmButtonColor: "#3572EF",
          onClose: () => {
            setModalData(null);
            router.push("/home");
          },
        });
      })
      .catch((err) => {
        setModalData({
          title: "Login Gagal",
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

  return (
    <div className="w-screen h-screen flex justify-center items-center rounded-tl-lg">
      <div className="grid grid-cols-[2fr_1fr] grid-rows-1 gap-4">
        <div className="flex justify-center items-center" id="kiri">
          <div id="side-kiri">
            <div className="flex justify-center py-3">
              <h1 className="text-[4rem] font-bold">Sign In </h1>
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

            <form onSubmit={handleLogin} className="text-center">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                className="border-2 w-[50vh] rounded-sm p-2 outline-none"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              ></input>

              <div className="pb-3">
                <label htmlFor="password">Password :</label> <br />
                <div className="border-2 w-[50vh] rounded-sm p-2 flex">
                  <input
                    type={showpassword ? "text" : "password"}
                    className="w-[48vh] outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <span
                    onClick={() => setShowpassword((prev) => !prev)}
                    className=""
                  >
                    {showpassword ? "A" : "B"}
                  </span>
                </div>
              </div>

              <div id="forgot Password" className="flex justify-center">
                <h1 className="font-bold">Forgot Password?</h1>
              </div>

              <div id="button SignIn" className="flex justify-center py-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="border-2 rounded-full text-[1rem]  hover:bg-sky-800 duration-[1s] w-[8vw] h-[4vh] shadow-lg"
                >
                  {loading ? (
                    <div className="border-4 border-white border-t-transparent w-4 h-4 rounded-full animate-spin"></div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="bg-[#3572EF] flex justify-center items-center rounded-l-full h-[100vh]"
          id="kanan"
        >
          <div className="" id="sidebar Container">
            <div className="flex justify-center" id="icon">
              <Image
                className="h-[15vh] w-[8vw]"
                src={Icon}
                alt="Logo"
                height="10"
                width="100"
              />
            </div>

            <div className="flex justify-center pt-[2rem]" id="text">
              <h1 className="text-[3rem] font-bold text-white">Hai, Friend</h1>
            </div>

            <div className="flex justify-center py-[2rem]" id="Paragraf">
              <p className="text-[2rem] font-light text-white text-center">
                Register your personal detail to use all of site feature
              </p>
            </div>

            <div className="flex justify-center" id="sign Up">
              <Link href="/auth/register">
                <button className="border-2 rounded-full text-[1rem] text-white hover:bg-sky-800 duration-[1s] w-[8vw] h-[4vh] shadow-lg">
                  Sign Up
                </button>
              </Link>
            </div>
            {modalData && <Modal {...modalData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
