"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { userType } from "../type";

import AOS from "aos";
import "aos/dist/aos.css";

const contex = createContext<{
  currentUser: userType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<userType | null>>;
  isLoading: boolean;
} | null>(null);

export const ProvinderKost = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<userType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const currents = localStorage.getItem("current");
    console.log("data dari current", currents);

    if (currents) {
      try {
        setCurrentUser(JSON.parse(currents));
      } catch (err) {
        console.log("Parsing data curents gagal :", err);
        setCurrentUser(null);
      }
    }
    setIsLoading(false);
  }, []);

  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    localStorage.setItem("current", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <contex.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
      }}
    >
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
