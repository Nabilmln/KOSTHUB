"use client"

import { useState, useEffect, createContext ,useContext } from "react"
import { userType } from "../type";
import { UserData } from "../data";

const contex = createContext<{
    user : userType[];
    setUser : React.Dispatch<React.SetStateAction<userType[]>>
} | null>(null);

export const Provinder = ({children} : {children : React.ReactNode}) =>{
    const [user, setUser] = useState<userType[]>(UserData)

    return(
       <contex.Provider value={{user, setUser}}>
        {children}
       </contex.Provider>
    );
}


export const useHook = () =>{
    const KostHub = useContext(contex);
    if(!KostHub){
        throw new Error("");
    } 
    return contex;
}