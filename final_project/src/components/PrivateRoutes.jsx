import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";


export function PrivateRoutes({children}){
    const {authdetails} = useContext(AuthContext)
   if(!authdetails?.isLoggedIn){
    return <Navigate to='/login'/>
   }
   
    return children;
   
}