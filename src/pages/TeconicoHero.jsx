import React from "react";
import { useState } from "react";
import heroVideo from "../assets/video3.mp4";
import logo from "../assets/logo-black.png"; 
import NavbarLinks from "../components/NavBarLinks"
import ImpactSection from "../components/ImpactSection"
import ImpactCreatedSection from "../components/ImpactCreatedSection";
import ExpertiseSection from "../components/ExpertiseSection";
import TestinomialSection from "../components/TestinomialSection";
import FooterCTASection from "../components/FooterCTASection";
import UnifiedBusinessImpactSection from "../components/UnifiedBusinessImpactSection";
import ExpertiseTestimonialSection from "../components/ExpertiseTestinomialSection";

const TeconicoBrand = () => (
  <div className="flex items-center space-x-3 font-poppins">
    {/* Logo image instead of initials */}
    <div className="w-15 h-15 flex items-center justify-center">
      <img
        src={logo} // replace with your logo path
        alt="Teconico Logo"
        className="w-full h-full object-contain"
      />
    </div>
    {/* Brand text */}
    <span className="text-gray-900 text-2xl sm:text-3xl font-bold tracking-wide">
      Teconico
    </span>
  </div>
);

const TeconicoHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        {/* Background Video Container */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.8) contrast(1.1)",
            }}
            onLoadedData={(e) => {
              e.target.playbackRate = 0.8; // slower, elegant speed
            }}
          >
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-purple-200 to-blue-300"></div>
          </video>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Animated floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-1 h-1 bg-blue-400/80 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-60 right-40 w-1 h-1 bg-white/50 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-4">
          <div className="animate-slide-in-left">
            <TeconicoBrand />
          </div>
          <div className="hidden md:flex items-center space-x-10 animate-slide-in-right font-poppins">
            <NavbarLinks />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-black transition-colors"
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
            <div className="absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md shadow-lg md:hidden">
              <div className="px-6 py-4 space-y-3">
                <a href="#" className="block text-white hover:text-black">
                  Services
                </a>
                <a href="#" className="block text-white hover:text-black">
                  About Us
                </a>
                <a href="#" className="block text-white hover:text-black">
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-between h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Left side - space for background video */}
          <div className="flex-1"></div>

          {/* Right side text content */}
          <div className="flex-1 text-right animate-fade-in-up max-w-2xl ml-auto ">
            <div className="space-y-1 sm:space-y-2 lg:space-y-3">
              <h1
                className="text-3xl sm:text-1xl md:text-2xl font-bold text-gray-800 leading-snug tracking-tight animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                INNOVATE.
              </h1>
              <h1
                className="text-3xl sm:text-1xl md:text-2xl font-bold text-gray-800 leading-snug tracking-tight animate-slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                CREATE.
              </h1>
              <h1
                className="text-3xl sm:text-1xl md:text-2xl font-bold text-red-600 leading-snug tracking-tight animate-slide-in-right"
                style={{ animationDelay: "0.6s" }}
              >
                TECONICO.
              </h1>
            </div>

            <div
              className="mt-4 sm:mt-6 lg:mt-8 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 text-base tracking-wide transition-colors duration-200 rounded-md shadow-sm hover:shadow-md">
                EXPLORE SOLUTIONS
              </button>
            </div>

            {/* Small tagline */}
            <div
              className="mt-3 sm:mt-4 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium opacity-90">
                Technology Innovation at its Best
              </p>
            </div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-10 w-20 h-20 border border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-10 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500/10 backdrop-blur-sm rotate-12 animate-float"></div>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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

          @keyframes spin-slow {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(405deg);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(12deg);
            }
            50% {
              transform: translateY(-20px) rotate(12deg);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
            opacity: 0;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
      {/* <ImpactSection />
      <ImpactCreatedSection /> */}
      <UnifiedBusinessImpactSection />
      {/* <ExpertiseSection />
      <TestinomialSection /> */}
      <ExpertiseTestimonialSection />
      <FooterCTASection />
    </>
  );
};

export default TeconicoHero;
