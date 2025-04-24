"use client";
import { createContext, useContext } from "react";
import { itemsType, userType } from "../../type";

const contex = createContext<{
  currentUser: userType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<userType | null>>;
  // items: itemsType | null;
  // setItems: React.Dispatch<React.SetStateAction<itemsType | null>>;
  isLoading: boolean;
} | null>(null);

export const useHook = () => {
  const KostHub = useContext(contex);
  if (!KostHub) {
    throw new Error("");
  }
  return KostHub;
};

export default contex;
