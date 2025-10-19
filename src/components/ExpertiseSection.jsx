import React, { useEffect, useRef, useState } from 'react';
import pic1 from "../assets/images/healthcare/Picture1.png";
import pic2 from "../assets/images/healthcare/Picture2.jpg";
import pic3 from "../assets/images/healthcare/Picture3.jpg";
import pic4 from "../assets/images/healthcare/Picture4.jpg";

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const services = [
    {
      id: 1,
      number: '01',
      title: 'Healthcare Monitoring System',
      image: pic1,
    },
    {
      id: 2,
      number: '02',
      title: 'Gym Management Platform',
      image: pic2,
    },
    {
      id: 3,
      number: '03',
      title: 'Smart Home Automation',
      image: pic3,
    },
    {
      id: 4,
      number: '04',
      title: 'IoT Integration & Strategy',
      image: pic4,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background - Red on left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-black to-black"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-900/40 to-transparent"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-red-950/50 blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        {/* Title */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            We Offer<br />
            Expertise in
          </h2>
        </div>

        {/* Services List */}
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Service Item */}
              <div className="group relative border-b border-gray-800 py-8 lg:py-10 cursor-pointer">
                <div className="flex items-center justify-between">
                  {/* Left Side - Number and Title */}
                  <div className="flex items-center gap-8 lg:gap-16 flex-1">
                    <span className="text-sm lg:text-base text-gray-500 font-mono min-w-[3rem]">
                      {service.number}
                    </span>
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Side - Arrow */}
                  <div className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                    <svg 
                      className="w-10 h-10 lg:w-12 lg:h-12 text-white transform rotate-45" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Hover Image Overlay */}
                <div 
                  className={`fixed inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ zIndex: 5 }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                  
                  {/* Image Container */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative max-w-2xl w-full aspect-video overflow-hidden rounded-2xl">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transform transition-all duration-700 ${
                          hoveredIndex === index ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                        }`}
                      />
                      
                      {/* Image Border Glow */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>
                      
                      {/* Gradient Overlay on Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;