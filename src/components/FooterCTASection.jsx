import React, { useEffect, useRef, useState } from 'react';
import fb from "../assets/icons/fb.png";
import insta from "../assets/icons/insta.png";
import linkdin from "../assets/icons/linkdin.png";
import tweet from "../assets/icons/tweeter.png";
import yt from "../assets/icons/yt.png";
import mobile from "../assets/icons/mobile.png";
import logo from "../assets/logo-black.png";

const FooterCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

//   const handleSubmit = (e) => {
//   e.preventDefault();
  
//   if (!email) {
//     alert('Please enter your email');
//     return;
//   }
  
//   const message = encodeURIComponent(
//     `Hi! I'm interested in Teconico's services.\n\nEmail: ${email}`
//   );
//   const phone = "918619131789";
//   window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  
//   setEmail('');
// };



const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!value) {
    setEmailError('Email is required');
  } else if (!emailRegex.test(value)) {
    setEmailError('Invalid email address');
  } else {
    setEmailError('');
  }
  
  setEmail(value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!email || emailError) {
    alert('Please enter a valid email');
    return;
  }
  
  const message = encodeURIComponent(
    `Hi! I'm interested in Teconico's services.\n\nEmail: ${email}`
  );
  const phone = "918619131789";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  
  setEmail('');
  setEmailError('');
};


  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-950/20"></div>
      
      <div 
        ref={sectionRef}
        className="relative z-10"
      >
        {/* CTA Section */}
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-20">
            {/* Left Side - CTA Text */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Let's Collaborate<br />
                with us
              </h2>
            </div>

            {/* Right Side - Red Circle Button */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <button 
                className="group relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-transparent border-2 border-white/20 hover:border-red-600 hover:bg-red-600 flex items-center justify-center transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg 
                  className="w-6 h-6 lg:w-8 lg:h-8 text-white transform rotate-45 group-hover:rotate-270 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-6 py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info - Updated Content */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                {/* Logo placeholder - replace with your actual logo */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-lg"></div>
                  <img src={logo} alt="TecoNico Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold">TecoNico</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                TecoNico Pvt. Ltd. try our best to solve modern-day problems with smart solutions using advanced technology.
              </p>
            </div>

            {/* Useful Links - Updated Content */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="text-red-600">›</span> Home
                  </a>
                </li>
                <li>
                  <a href="/home-automation" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="text-red-600">›</span> Home Automation
                  </a>
                </li>
                <li>
                  <a href="/health-care" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="text-red-600">›</span> Healthcare
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="text-red-600">›</span> Our Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info - Updated Content */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <strong className="text-white">Phone:</strong> +91 8619131789
                </li>
                <li>
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:teconicopvtltd@gmail.com" className="hover:text-white transition-colors duration-200">
                    teconicopvtltd@gmail.com
                  </a>
                </li>
              </ul>

              {/* Message Us Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Hi! I would like to know more about TecoNico."
                    );
                    const phone = "918619131789";
                    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                  }}
                  className="group px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2"
                >
                  Message Us
                </button>
              </div>
            </div>

            {/* Social Links - Updated Content */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              
              {/* Social Links with image placeholders */}
              <div className="flex items-center gap-3 mb-6">
                <a 
                  href="https://twitter.com/Teconicopvtltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                  <img src={tweet} alt="Twitter" className="w-10 h-10" />
                </a>
                <a 
                  href="https://www.facebook.com/Teconico-Pvt-Ltd-108404804298643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                 <img src={fb} alt="Facebook" className="w-10 h-10" />
                </a>
                <a 
                  href="https://www.instagram.com/teconicopvtltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                 <img src={insta} alt="Instagram" className="w-10 h-10" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCxwKmIoGtvGW6OLW07kiUGw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                 <img src={yt} alt="YouTube" className="w-10 h-10" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/teconicopvtltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                 <img src={linkdin} alt="LinkedIn" className="w-10 h-10" />
                </a>
              </div>

              {/* Email Newsletter */}
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => validateEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-full text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    emailError 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/10 focus:border-white/30'
                      }`}
                    />
                  {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}
                <button
                  onClick={handleSubmit}
                  className="w-full group px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Updated Content */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-500">
              <p className="text-center">
                &copy; Copyright <strong className="text-white">TecoNico Private Limited</strong>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTASection;