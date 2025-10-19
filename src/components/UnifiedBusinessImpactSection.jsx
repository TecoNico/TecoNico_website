import React, { useEffect, useRef, useState } from 'react';
import health from "../assets/panda1.png";
import pic1 from "../assets/images/healthcare/Picture1.png";
// import pic2 from "../assets/images/healthcare/Picture2.jpg";
import pic2 from "../assets/analytics.png";
import pic3 from "../assets/images/healthcare/Picture3.jpg";
import pic4 from "../assets/images/healthcare/Picture4.jpg";

const UnifiedBusinessImpactSection = ({ healthImage, projectImages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImpactVisible, setIsImpactVisible] = useState(false);
  const businessRef = useRef(null);
  const impactRef = useRef(null);
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    hours: 0,
    years: 0
  });

  useEffect(() => {
    const businessObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const impactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImpactVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (businessRef.current) {
      businessObserver.observe(businessRef.current);
    }

    if (impactRef.current) {
      impactObserver.observe(impactRef.current);
    }

    return () => {
      businessObserver.disconnect();
      impactObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      projects: 5,
      satisfaction: 99,
      hours: 50,
      years: 2
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        hours: Math.floor(targets.hours * progress),
        years: Math.floor(targets.years * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const projects = [
    {
      id: 1,
      category: 'Healthcare Tech',
      title: 'Healthcare Monitoring System',
      image: pic4,
    },
    {
      id: 2,
      category: 'Fitness Management',
      title: 'Gym Management Platform',
      image: pic2,
    },
    {
      id: 3,
      category: 'Smart Home',
      title: 'Home Automation Suite',
      image: pic3,
    },
    {
      id: 4,
      category: 'IoT Integration',
      title: ' Multi-Device Ecosystem',
      image: pic1,
    }
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Unified Gradient Background - flows from top to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-red-950/30 blur-3xl"></div>
      
      {/* Business Section */}
      <div 
        ref={businessRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and 3D Image */}
          <div className="space-y-12">
            {/* Title */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                We make your<br />
                business stand out
              </h1>
            </div>

            {/* 3D Image Container */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                {/* Holographic Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-3xl animate-pulse"></div>
                
                {/* Image with Animation */}
                <div className="relative aspect-square animate-float">
                  <img 
                    src={health} 
                    alt="3D Holographic Design"
                    className="w-full h-full object-contain relative z-10"
                  />
                  
                  {/* Chromatic Aberration Overlay */}
                  <div className="absolute inset-0 mix-blend-screen pointer-events-none">
                    <div className="absolute inset-0 bg-red-500/20 translate-x-1 blur-sm"></div>
                    <div className="absolute inset-0 bg-cyan-500/20 -translate-x-1 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description and Stats */}
          <div className="space-y-12">
            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-gray-300 text-base lg:text-base leading-relaxed max-w-md">
               At Teconico, we transform businesses through innovative AI solutions and smart automation. Our expertise in creating distinctive digital experiences helps companies stand out in competitive markets. We combine cutting-edge technology with creative strategy to deliver solutions that not only meet expectations but exceed industry standards.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {/* Project Completed */}
              <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  {counts.projects}+
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  Project Completed
                </div>
              </div>

              {/* Satisfied Clients */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {counts.satisfaction}%
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  Satisfied clients
                </div>
              </div>

              {/* Hours of work */}
              <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  {counts.hours}+
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  Hours of work
                </div>
              </div>

              {/* Years Experience */}
              <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  0{counts.years}+
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Created Section */}
      <div 
        ref={impactRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-15"
      >
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Title */}
          <div className={`transform transition-all duration-1000 ${isImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Impact We<br />Created
            </h2>
          </div>

          {/* Right - Description and Button */}
          <div className="flex flex-col justify-center space-y-8">
            <div className={`transform transition-all duration-1000 delay-200 ${isImpactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                Teconico specializes in delivering comprehensive AI, smart home automation, and healthcare technology solutions. From conceptualization to deployment, we provide full-spectrum services including UI/UX design, branding, strategy, and development—tailored to bring your vision to life and create measurable business impact.
              </p>
            </div>

            <div className={`transform transition-all duration-1000 delay-400 ${isImpactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <button onClick={() => {
                const message = encodeURIComponent(
                  "Hi! I would like to know more about TecoNico."
                );
                const phone = "918619131789";
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                }}
                className="group relative px-8 py-3.5 bg-transparent text-white rounded-full font-medium text-base border-2 border-white overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
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
        {/* <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transform transition-all duration-1000 ${
                isImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            > */}
              {/* Project Card */}
              {/* <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"> */}
                {/* Image Container */}
                {/* <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  /> */}
                  
                  {/* Overlay on Hover */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                  
                  {/* Arrow Icon */}
                  {/* <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <svg 
                      className="w-6 h-6 text-white transform rotate-45" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div> */}

                {/* Project Info */}
                {/* <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider mb-2 font-medium">
                        {project.category}
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                    </div> */}

                    {/* Static Arrow (visible on mobile, hidden on hover desktop) */}
                    {/* <div className="md:group-hover:opacity-0 transition-opacity duration-300">
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
        </div> */}


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transform transition-all duration-1000 ${
                isImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <svg 
                      className="w-5 h-5 text-white transform rotate-45" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 lg:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-medium">
                        {project.category}
                      </p>
                      <h3 className="text-sm lg:text-base font-bold text-white group-hover:text-gray-100 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>

                    {/* Static Arrow (visible on mobile, hidden on hover desktop) */}
                    <div className="md:group-hover:opacity-0 transition-opacity duration-300 flex-shrink-0">
                      <svg 
                        className="w-5 h-5 lg:w-6 lg:h-6 text-white transform rotate-45" 
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

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default UnifiedBusinessImpactSection;