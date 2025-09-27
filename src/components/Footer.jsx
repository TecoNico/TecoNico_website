import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Heart,
  Sparkles,
  ExternalLink,
  MessageCircle
} from "lucide-react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/Teconicopvtltd",
      icon: "T",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    {
      name: "Facebook", 
      href: "https://www.facebook.com/Teconico-Pvt-Ltd-108404804298643",
      icon: "F",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/teconicopvtltd/",
      icon: "I",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCxwKmIoGtvGW6OLW07kiUGw",
      icon: "Y",
      color: "from-red-500 to-red-700",
      hoverColor: "hover:from-red-600 hover:to-red-800"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/teconicopvtltd",
      icon: "L",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:from-blue-800 hover:to-blue-950"
    }
  ];

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Home Automation", href: "/homeautomation" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Our Team", href: "/family" }
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-black-500 to-gray-500"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-red-500/10 to-black-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Sophisticated Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-12">
            
            {/* Company Info Section - Enhanced */}
            <div className="lg:col-span-5 md:col-span-2">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                
                {/* Company Header with Logo Placeholder */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    {/* Logo placeholder - you can replace this with your actual logo */}
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <h3 className="text-4xl font-bold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-pink-500">
                        TecoNico
                      </span>
                    </h3>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    <Sparkles className="w-5 h-5 text-red-400 animate-pulse" />
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Enhanced Description Card */}
                <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/30 shadow-2xl relative overflow-hidden">
                  {/* Card Decoration */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                  
                  <p className="text-slate-300 leading-relaxed text-lg font-light mb-6">
                    <span className="text-white font-semibold">TecoNico Pvt. Ltd.</span> try our best to solve modern-day problems 
                    with smart solutions using advanced technology. We transform businesses through 
                    <span className="text-red-400 font-semibold"> cutting-edge AI & ML solutions</span> that drive innovation and growth.
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {[
                      "AI Solutions", 
                      "Smart Technology", 
                      "Quality Focus", 
                      "Expert Team"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links Section - Enhanced */}
            <div className="lg:col-span-3">
              <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-4 animate-pulse"></div>
                    Useful Links
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-7"></div>
                </div>
                
                <div className="space-y-4">
                  {usefulLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      className="group flex items-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:translate-x-2 border border-slate-700/20 hover:border-slate-600/40"
                    >
                      <ArrowRight 
                        size={16} 
                        className="mr-4 text-red-400 group-hover:text-red-300 group-hover:translate-x-1 transition-all duration-300" 
                      />
                      <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-300">
                        {link.name}
                      </span>
                      <ExternalLink 
                        size={14} 
                        className="ml-auto opacity-0 group-hover:opacity-100 text-slate-500 transition-all duration-300" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section - Enhanced */}
            <div className="lg:col-span-4">
              <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-4 animate-pulse"></div>
                    Contact Us
                  </h4>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-7"></div>
                </div>
                
                {/* Contact Information Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white font-semibold">+91 8619131789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white font-semibold">teconicopvtltd@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Heart size={18} className="mr-3 text-red-400 animate-pulse" />
                    Follow Us
                  </h5>
                  
                  <div className="grid grid-cols-5 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-14 h-14 bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl`}
                        title={social.name}
                      >
                        <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </span>
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Enhanced Message Button */}
                <button 
                  onClick={() => window.location.href = 'mailto:teconicopvtltd@gmail.com'}
                  className="group w-full bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:from-red-600 hover:via-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-2xl text-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative flex items-center justify-center space-x-3">
                    <MessageCircle size={24} className="group-hover:animate-bounce" />
                    <span>Message Us</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div className="border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-8">
            <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Copyright Text */}
              <div className="mb-6">
                <p className="text-slate-400 text-lg">
                  &copy; {new Date().getFullYear()} Copyright{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 font-bold">
                    TecoNico Private Limited
                  </span>
                  . All Rights Reserved
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse delay-400"></div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
              </div>
              
              {/* Additional Info */}
              <p className="text-slate-500 text-sm">
                Made with <Heart size={14} className="inline text-red-500 animate-pulse" /> by TecoNico Team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom gradient animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        /* Hover effects */
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </footer>
  );
};