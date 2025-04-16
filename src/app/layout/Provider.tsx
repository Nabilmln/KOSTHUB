"use client";
import { useState, useEffect } from "react";
import { userType } from "../type";
import contex from "../component/hooks/UserAuth";

import AOS from "aos";
import "aos/dist/aos.css";

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
