import Footer from "../Components/FooterComponent/Footer";
import NavBar from "../Components/Navbar/NavBar";
import {Outlet} from "react-router-dom"
import React from 'react';



const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;
