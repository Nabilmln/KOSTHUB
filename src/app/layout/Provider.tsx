"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { userType } from "../type";
import { UserData } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

const contex = createContext<{
  user: userType[];
  setUser: React.Dispatch<React.SetStateAction<userType[]>>;
  currentUser: userType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<userType | null>>;
} | null>(null);

export const ProvinderKost = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userType[]>(UserData);
  const [currentUser, setCurrentUser] = useState<userType | null>(null);

  useEffect(() => {
    const users = localStorage.getItem("users");
    console.log("Data dari users :", users);
    const currents = localStorage.getItem("current");
    // console.log("data dari current");

    if (users) {
      try {
        setUser(JSON.parse(users));
      } catch (err) {
        console.log("Parsing data users gagal :", err);
        setUser([]);
      }
    }

    if (currents) {
      try {
        setCurrentUser(JSON.parse(currents));
      } catch (err) {
        console.log("Parsing data curents gagal :", err);
        setCurrentUser(null);
      }
    }
  }, []);

  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  // Clear Data
  // useEffect(() => {
  //   const relod = localStorage.removeItem("users");
  //   console.log("Data Berhasil Di Hapus :", relod);
  // }, []);

  // useEffect(() => {
  //   const relod = localStorage.removeItem("current");
  //   console.log("Data Berhasil Di Hapus :", relod);
  // }, []);

  return (
    <contex.Provider value={{ user, setUser, currentUser, setCurrentUser }}>
      {children}
    </contex.Provider>
  );
};

export const useHook = () => {
  const KostHub = useContext(contex);
  if (!KostHub) {
    throw new Error("");
  }
  return KostHub;
};
