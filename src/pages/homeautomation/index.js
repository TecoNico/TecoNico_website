import React from 'react';
import Why from '../../components/HomeAutomation/Why we/Why';
import OurProduct from '../../components/HomeAutomation/OurProduct/OurProduct';
import OurProduct2 from '../../components/HomeAutomation/OurProduct/OurProduct2';
import Contact from '../../components/HomeAutomation/Contact/Contact';
import Home from '../../components/HomeAutomation/Home/Home';
import Nav from '../../components/Navbar/Nav';

export default function HomeAutomation() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <Why />
            <OurProduct />
            <OurProduct2 />
            <Contact />
        </div>
    )
}
