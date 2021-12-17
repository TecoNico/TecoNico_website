import React from 'react';
import Home from '../../components/Home/Home';
import Why from '../../components/Why we/Why';
import OurProduct2 from "../../components/OurProduct/OurProduct2";
import OurProduct from "../../components/OurProduct/OurProduct";
import Contact from "../../components/Contact/Contact";
import Nav from '../../components/Navbar/Nav';

export default function HealthCare() {
    return (
        <>
            <Nav />
            <Home />
            <Why />
            <OurProduct />
            <OurProduct2 />
            <Contact />
        </>
    )
}
