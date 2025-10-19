import React, { useState } from 'react';
import logo from "../assets/logo-black.png";
import NavbarLinks from "../components/NavBarLinks";
import FooterCTASection from "../components/FooterCTASection";
import s1 from "../assets/images/s1.png";

const TeconicoBrand = () => (
  <div className="flex items-center space-x-3 font-poppins">
    <div className="w-15 h-15 flex items-center justify-center">
      <img
        src={logo}
        alt="Teconico Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-white text-2xl sm:text-3xl font-bold tracking-wide">
      Teconico
    </span>
  </div>
);

const SmartLightDemo = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md">
        <div className="animate-slide-in-left">
          <TeconicoBrand />
        </div>
        <div className="hidden md:flex items-center space-x-10 animate-slide-in-right font-poppins">
          <NavbarLinks />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-red-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-3">
              <a href="#" className="block text-white hover:text-red-600">
                Services
              </a>
              <a href="#" className="block text-white hover:text-red-600">
                About Us
              </a>
              <a href="#" className="block text-white hover:text-red-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-20 min-h-screen flex items-center justify-center bg-black ">
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Base Image - Always stays the same */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <div className="absolute inset-0 ">
            <img
              src={s1}
              alt="Room base"
              className="w-full h-full object-contain"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Light Overlay Layer for Wall Lamp (S1) */}
          <div 
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none"
            style={{ opacity: switch1 ? 1 : 0 }}
          >
            {/* Radial gradient to simulate wall lamp glow */}
            <div 
              className="absolute"
              style={{
                top: '28%',
                left: '19%',
                width: '12%',
                height: '20%',
                background: 'radial-gradient(ellipse, rgba(255,245,200,0.9) 0%, rgba(255,245,200,0.3) 30%, transparent 70%)',
                filter: 'blur(15px)',
              }}
            />
            {/* Light source glow */}
            <div 
              className="absolute"
              style={{
                top: '30%',
                left: '20.5%',
                width: '4%',
                height: '8%',
                background: 'rgba(255,250,220,0.9)',
                filter: 'blur(5px)',
                boxShadow: '0 0 30px rgba(255,245,200,0.8)',
              }}
            />
          </div>

          {/* Light Overlay Layer for Ceiling Light (S2) */}
          <div 
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none"
            style={{ opacity: switch2 ? 1 : 0 }}
          >
            {/* Ceiling light glow - wider spread */}
            <div 
              className="absolute"
              style={{
                top: '0%',
                left: '35%',
                // transform: 'translateX(-50%)',
                width: '30%',
                height: '35%',
                background: 'radial-gradient(ellipse, rgba(255,250,230,0.5) 0%, rgba(255,250,230,0.3) 40%, transparent 70%)',
                filter: 'blur(25px)',
              }}
            />
            {/* Direct ceiling fixture glow */}
            <div 
              className="absolute"
              style={{
                top: '2%',
                left: '45%',
                // transform: 'translateX(-50%)',
                width: '20%',
                height: '7%',
                background: 'rgba(255,252,240,0.95)',
                filter: 'blur(8px)',
                boxShadow: '0 0 40px rgba(255,250,230,0.9)',
              }}
            />
          </div>

          {/* Overall room brightening when lights are on */}
          <div 
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none"
            style={{ 
              opacity: (switch1 || switch2) ? 0.15 : 0,
              background: 'rgba(255,250,235,1)'
            }}
          />

          {/* Control Buttons */}
          <button
            onClick={() => setSwitch1(!switch1)}
            className="absolute bg-red-500/30 hover:bg-red-500/50 transition-all duration-200 rounded-lg cursor-pointer border-2 border-red-500 z-10"
            style={{
              top: '62.1%',
              right: '12.7%',
              width: '80px',
              height: '80px',
            }}
            aria-label="Toggle S1 Light"
          >
            {/* <span className="text-white font-bold">S1</span> */}
          </button>

          <button
            onClick={() => setSwitch2(!switch2)}
            className="absolute bg-blue-500/30 hover:bg-blue-500/50 transition-all duration-200 rounded-lg cursor-pointer border-2 border-blue-500 z-10"
            style={{
              top: '62.5%',
              right: '4.5%',
              width: '80px',
              height: '80px',
            }}
            aria-label="Toggle S2 Light"
          >
            {/* <span className="text-white font-bold">S2</span> */}
          </button>

          <button
            onClick={() => {
              setSwitch1(!switch1);
              setSwitch2(!switch2);
            }}
            className="absolute bg-green-500/30 hover:bg-green-500/50 transition-all duration-200 rounded-lg cursor-pointer border-2 border-green-500 z-10"
            style={{
              top: '76.7%',
              right: '12.7%',
              width: '80px',
              height: '80px',
            }}
            aria-label="Toggle S3 Light"
          >
            {/* <span className="text-white font-bold">S3</span> */}
          </button>

          <button
            onClick={() => {
              if (switch1 || switch2) {
                setSwitch1(false);
                setSwitch2(false);
              } else {
                setSwitch1(true);
                setSwitch2(true);
              }
            }}
            className="absolute bg-yellow-500/30 hover:bg-yellow-500/50 transition-all duration-200 rounded-lg cursor-pointer border-2 border-yellow-500 z-10"
            style={{
              top: '76.7%',
              right: '4.5%',
              width: '80px',
              height: '80px',
            }}
            aria-label="Toggle S4 Light"
          >
            {/* <span className="text-white font-bold">S4</span> */}
          </button>

          {/* Status Indicator */}
          <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 z-10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  switch1 ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-600'
                }`}></div>
                <span className="text-white text-sm font-medium">S1 - Wall Lamp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  switch2 ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-600'
                }`}></div>
                <span className="text-white text-sm font-medium">S2 - Ceiling Light</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 z-10">
            <p className="text-white text-sm">
              Click the control panel buttons on the right to control lights
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterCTASection />

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default SmartLightDemo;