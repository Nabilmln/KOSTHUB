"use client"

import { useState, useEffect, createContext ,useContext } from "react"
import { userType } from "../type";
import { UserData } from "../data";

const contex = createContext<{
    user : userType[];
    setUser : React.Dispatch<React.SetStateAction<userType[]>>
} | null>(null);

export const ProvinderKost = ({children} : {children : React.ReactNode}) =>{
    const [user, setUser] = useState<userType[]>(UserData)

    useEffect(() =>{
        const users = localStorage.getItem("users");
        console.log("Data dari users :", users);

        if(users){
            try{
                setUser(JSON.parse(users))
            } catch (err){
                console.log("Parsing data users gagal :", err);
                setUser([]);
            }
        }
    }, [])

    // Clear Data
    // useEffect(() =>{
    //     const relod = localStorage.removeItem("users");
    //     console.log("Data Berhasil Di Hapus :", relod);
    // }, [])

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
    return KostHub;
}