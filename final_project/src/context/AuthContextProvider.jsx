import { createContext,useState } from "react";


export const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [authdetails,setAuthDetails]= useState({
        isLoggedIn:false,
        token:null
    })


const login =(token)=>{
    setAuthDetails({
        isLoggedIn:true,
        token:token,
    })
}

const logout =(token)=>{
    setAuthDetails({
        isLoggedIn:false,
        token:false,
    })
}


 return <AuthContext.Provider value={{authdetails,login , logout}} >{children}</AuthContext.Provider>   
}