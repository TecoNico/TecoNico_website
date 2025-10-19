import React, { useEffect, useRef, useState } from 'react';
import health from "../assets/panda1.png";

const ImpactCreatedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects = [
    {
      id: 1,
      category: 'UI/UX DESIGN',
      title: 'Wayflyer Dashboard',
      image: {health},
      // Replace with: import project1 from './path-to-image.jpg'
    },
    {
      id: 2,
      category: 'Branding & Logo',
      title: 'Dynamotion',
      image: {health},
      // Replace with: import project2 from './path-to-image.jpg'
    },
    {
      id: 3,
      category: 'Hospital',
      title: 'hospitalSystem',
      image: "",
      // Replace with: import project2 from './path-to-image.jpg'
    },
    {
      id: 4,
      category: 'Logo',
      title: 'logoBrand',
      image: "health",
      // Replace with: import project2 from './path-to-image.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-950/30"></div>
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Title */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Impact We<br />Created
            </h2>
          </div>

          {/* Right - Description and Button */}
          <div className="flex flex-col justify-center space-y-8">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                At Kinetiq, we specialize in offering a full range of creative branding, 
                strategy, design and development services tailored to bring your ideas to life.
              </p>
            </div>

            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <button className="group relative px-8 py-3.5 bg-transparent text-white rounded-full font-medium text-base border-2 border-white overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                <span className="relative z-10 flex items-center gap-3">
                  Get Started
                  <svg 
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <svg 
                      className="w-6 h-6 text-white transform rotate-45" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider mb-2 font-medium">
                        {project.category}
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Static Arrow (visible on mobile, hidden on hover desktop) */}
                    <div className="md:group-hover:opacity-0 transition-opacity duration-300">
                      <svg 
                        className="w-8 h-8 text-white transform rotate-45" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
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

export default ImpactCreatedSection;