"use client";
import { useState } from "react";
import { useHook } from "@/app/layout/Provider";
const Biodata = () => {
  const [date, setDate] = useState<string>("");
  const [nama, setNama] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleIsiBiodata = () => {
    const isiBiodata = {};
  };

  const handleChange = (value: string) => {
    setGender((prev) => (prev === value ? "" : value));
  };

  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="grid grid-cols-1 grid-rows-2 gap-4" title="background">
          <div className="bg-white" title="white"></div>
          <div
            className="bg-sky-500 w-[100vw] h-[50vh] rounded-t-[6rem]"
            title="blue"
          ></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <div className="flex justify-center">
            <h1 className="font-bold text-[2rem]">Biodata</h1>
          </div>
          <div className="border-2 rounded-md p-[2rem]">
            <div className="flex flex-col">
              <form action="">
                <label htmlFor="Nama Lengkap">Nama Lengkap :</label>
                <br />
                <input
                  type="text"
                  className="p-[1rem] border-2 rounded-md bg-slate-300 w-[20vw]"
                />
              </form>
              <form action="">
                <label htmlFor="Tanggal Lahir">Tanggal Lahir :</label> <br />
                <input
                  type="date"
                  className="border-2 rounded-md bg-slate-300 w-[20vw] p-[1rem]"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </form>

              <form action="">
                <label htmlFor="NomorHp">Nomor Hp :</label> <br />
                <input
                  type="text"
                  className="border-2 rounded-md bg-slate-300 p-[1rem] w-[20vw]"
                  placeholder="+62"
                />
              </form>
              <fieldset>
                <label htmlFor="Role">Gender:</label> <br />
                <div className="flex gap-x-1 text-[1rem] items-center">
                  <input
                    type="radio"
                    className="w-[2vw] h-[2vh]"
                    name="gender"
                    onChange={() => handleChange("Laki")}
                  />
                  <label htmlFor="">Laki-Laki</label>
                  <input
                    type="radio"
                    className="w-[2vw] h-[2vh]"
                    name="gender"
                    onChange={() => handleChange("Perempuan")}
                  />
                  <label htmlFor="Perempuan">Perempuan</label>
                </div>
              </fieldset>
              <form action="">
                <div className="flex justify-center py-[1rem ]">
                  <button className="border-2 rounded-md p-1 w-[14vw] h-[4vh]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Biodata;
