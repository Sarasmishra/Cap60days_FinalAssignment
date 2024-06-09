import { Routes,Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { About } from "../Pages/About";
import { Login } from "../Pages/Login";
import { Tickets } from "../Pages/Tickets";
import { PrivateRoutes } from "./PrivateRoutes";
import { TicketCreate } from "../Pages/TicketCreate";
import { TicketView } from "../Pages/TicketView";
import { TicketEdit } from "../Pages/TicketEdit";


export function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={
                <PrivateRoutes>
                     <Home/>
                </PrivateRoutes>}></Route>
            <Route path="/contact" element={
                <PrivateRoutes>
                    <Contact/>
                </PrivateRoutes>
                }></Route>
            <Route path="/about" element={
                <PrivateRoutes>
                    <About/>
                </PrivateRoutes>
                }></Route>
         
            <Route path="/tickets" element={
                <PrivateRoutes>
                     <Tickets/>
                </PrivateRoutes>
               }></Route>

<Route path="/tickets/create" element={
                <PrivateRoutes>
                     <TicketCreate/>
                </PrivateRoutes>
               }></Route>
               
               <Route path="/tickets/edit/:id" element={
                <PrivateRoutes>
                     <TicketEdit/>
                </PrivateRoutes>
               }></Route>

                <Route path="/tickets/view/:id" element={
                <PrivateRoutes>
                     <TicketView/>
                </PrivateRoutes>
               }></Route>


        </Routes>
        </>
    )
}