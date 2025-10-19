import React, { useEffect, useRef, useState } from 'react';
import logo from "../assets/logo-black.png";
import NavbarLinks from "../components/NavBarLinks";
import FooterCTASection from "../components/FooterCTASection";
import health from "../assets/Health.png"; 
import health1 from "../assets/images/healthcare/Picture1.png"; 
import health2 from "../assets/images/healthcare/Picture2.jpg";
import health3 from "../assets/images/healthcare/Picture3.jpg";
import health4 from "../assets/images/healthcare/Picture4.jpg";

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

const HealthcarePage = () => {
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

  const products = [
    {
      id: 1,
      image: health1,
    },
    {
      id: 2,
      image: health2,
    },
    {
      id: 3,
      image: health3,
    },
    {
      id: 4,
      image: health4,
    },
  ];

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
          className="relative z-10 container mx-auto px-6 py-20 lg:py-28"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Title */}
            <div className={`transform transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Teconico</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Healthcare<br />
                Using<br />
                <span className="bg-gradient-to-r from-red-500 to-purple-300 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
            </div>

            {/* Right Side - Image */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible['hero'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <img
                  src={health}
                  alt="Healthcare AI"
                  className="relative w-full h-auto rounded-3xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What is AI in Healthcare Section */}
        <div 
          ref={el => sectionsRef.current['what'] = el}
          className="relative z-10 container mx-auto px-6 py-20"
        >
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Question 1 */}
            <div className={`transform transition-all duration-1000 ${isVisible['what'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                  What is the AI in Healthcare?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  AI in healthcare is an application of machine learning (ML) algorithms and other cognitive technologies in medical settings. In the simplest sense, AI is when computers and other machines mimic human cognition, and are capable of learning, thinking, and making decisions or taking actions. AI in healthcare, then, is the use of machines to analyze and act on medical data, usually with the goal of predicting a particular outcome.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['what'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                  What is its use?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Rather than robotics, AI in healthcare focuses on large amount of data that can save lives by analyzing them. This includes treatment methods and their outcomes, survival rates and speed of care gathered across millions of patients, geographical locations and innumerable and sometimes interconnected health conditions. These computing power can easily analyze the trends in data and can make predictions which a normal human brain can't.
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

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`transform transition-all duration-1000 ${
                  isVisible['products'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={`Healthcare Product ${product.id}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works Section */}
        <div 
          ref={el => sectionsRef.current['works'] = el}
          className="relative z-10 container mx-auto px-6 py-20"
        >
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What we do?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            {/* Left - Description */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['works'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-red-400">
                  How our product works?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Log in through your name and password, go through the links, upload your information and get the required results. Furthermore, this helps you to keep a check on your daily intake. Just open this application, upload your reports and CT Scans and they will generate your report. It will also give you a percentage of your medical seriousness. This app covers almost all the health-related issues.
                </p>
                <a
                  href="https://medium.com/@TecoNico/do-you-know-how-artificial-intelligence-is-helping-in-healthcare-52bf0bd3fd6e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Read more
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Video */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible['works'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/sHqUxH5aqYM"
                  title="Healthcare AI Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
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

export default HealthcarePage;