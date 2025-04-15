import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav-bar";

export const RouterLayout: React.FC<{}> = () => {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    ) 
}