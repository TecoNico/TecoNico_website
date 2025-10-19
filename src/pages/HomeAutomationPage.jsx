import React, { useEffect, useRef, useState } from 'react';
import logo from "../assets/logo-black.png";
import NavbarLinks from "../components/NavBarLinks";
import FooterCTASection from "../components/FooterCTASection";
import smartHouse from '../assets/smart_house.png'; 
import demoImage from "../assets/images/s1.png"; 
import product1 from "../assets/Product1.png";
import product2 from "../assets/product2.png";

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

const HomeAutomationPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionsRef.current).forEach((key) => {
      if (sectionsRef.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.2 }
        );
        observers[key].observe(sectionsRef.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md">
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

      <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>

        {/* Hero Section */}
        <div 
          ref={el => sectionsRef.current['hero'] = el}
          className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Title */}
            <div className={`transform transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Teconico</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Update your lifestyle<br />
                by<br />
                <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  Automating Your Home
                </span>
              </h1>
            </div>

            {/* Right Side - Image */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <img
                  src={smartHouse}
                  alt="Smart House"
                  className="relative w-full h-auto rounded-3xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What is Home Automation Section */}
        <div 
          ref={el => sectionsRef.current['what'] = el}
          className="relative z-10 container mx-auto px-6 py-20"
        >
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Question 1 */}
            <div className={`transform transition-all duration-1000 ${isVisible['what'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                  What is Home Automation?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Home automation is the automation of your switches and appliances, so that they can be controlled by your fingertip from Anywhere. These devices are connected to the Internet, which allows them to be controlled remotely. It can controlled by app, voice assistant and remote. It easy your life by scheduler and timer and automate your life.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['what'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                  Why it is needed?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  You can put your lights on schedules so that they turn off when you normally go to sleep, or you can have your thermostat turn the A/C up about an hour before you return to work so you don't have to return to a stuffy house. Home automation makes life more convenient and can even save you money on heating, cooling and electricity bills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Products Section */}
        <div 
          ref={el => sectionsRef.current['products'] = el}
          className="relative z-10 container mx-auto px-6 py-20"
        >
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['products'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Product
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>

          {/* Product 1 - TecoNico Home */}
          <div className={`grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto mb-20 transform transition-all duration-1000 delay-200 ${isVisible['products'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="lg:col-span-3 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                TecoNico Home
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                TecoHome has variety of devices by varying it's functionalities. It has single node which has light and heavy versions, four node with fan regulation and with fan regulation. You can control it from our App from Anywhere in the World. Also, it can be controlled by ALEXA and Google Home and IR Remote. It make your life easier by its scheduler and timer functions, so it can automatically turn on/off your devices.
              </p>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src={product1}
                alt="TecoNico Home Product"
                className="relative w-full max-w-xs mx-auto h-64 rounded-3xl border border-white/10"
              />
            </div>
          </div>

          {/* Product 2 - TecoNico App */}
          <div className={`grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible['products'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="lg:col-span-2 order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <img
                src={product2}
                alt="TecoNico App"
                className="relative w-full max-w-xs mx-auto h-64 rounded-3xl border border-white/10"
              />
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                TecoNico App
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Let's smart your life and your home by making it's smart with your fingertip. You can add TecoHome devices and control them from Anywhere in the world. Also you can control TecoHome devices if you does not have internet with our app.
              </p>
            </div>
          </div>
        </div>

        {/* Why Me / How it Works Section */}
        <div 
          ref={el => sectionsRef.current['why'] = el}
          className="relative z-10 container mx-auto px-6 py-20"
        >
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Why Me?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            {/* Left - Description */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['why'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                  How our product works?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  TecoHome is a small device which can fit inside your switch board and install it in less than 10 min and also it does not change your existing your board functionality instead it makes your switch board smart. You can control it from our App from Anywhere in the World. Also, it can be controlled by ALEXA and Google Home and IR Remote. It make your life easier by its scheduler and timer functions, so it can automatically turn on/off your devices.
                </p>
              </div>
            </div>

            {/* Right - Video */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible['why'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ciQ72w-TRBc"
                  title="TecoNico Home Automation Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div 
          ref={el => sectionsRef.current['demo'] = el}
          className="relative z-10 container mx-auto px-6 py-20"
        >
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['demo'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Demo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>

          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible['demo'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <a 
              href="/demo" 
              className="group block relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border-8 border-gray-300 shadow-2xl">
                <img
                  src={demoImage}
                  alt="Demo"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl text-gray-300 group-hover:text-white transition-colors">
                  Click to see interactive demo
                </p>
              </div>
            </a>
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

export default HomeAutomationPage;