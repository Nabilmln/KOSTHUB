"use client";
import { useState, useEffect } from "react";
import { userType, itemsType } from "../type";

import contex from "../component/hooks/Kontex";
import AOS from "aos";
import "aos/dist/aos.css";

export const ProvinderKost = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<userType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [items, setItems] = useState<itemsType | null>(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <contex.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        // items,
        // setItems,
      }}
    >
      {children}
    </contex.Provider>
  );
};
