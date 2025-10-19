// import React, { useEffect, useRef, useState } from 'react';

// const ImpactSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const [counts, setCounts] = useState({
//     projects: 0,
//     satisfaction: 0,
//     hours: 0,
//     years: 0
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     const targets = {
//       projects: 329,
//       satisfaction: 99,
//       hours: 6240,
//       years: 5
//     };

//     let currentStep = 0;

//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;

//       setCounts({
//         projects: Math.floor(targets.projects * progress),
//         satisfaction: Math.floor(targets.satisfaction * progress),
//         hours: Math.floor(targets.hours * progress),
//         years: Math.floor(targets.years * progress)
//       });

//       if (currentStep >= steps) {
//         setCounts(targets);
//         clearInterval(timer);
//       }
//     }, stepDuration);

//     return () => clearInterval(timer);
//   }, [isVisible]);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
      
//       <div 
//         ref={sectionRef}
//         className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
//       >
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//           {/* Left Side - 3D Glass Element */}
//           <div className="relative flex items-center justify-center">
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'}`}>
//               <div className="relative w-full max-w-md aspect-square">
//                 {/* Holographic Glass Effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-3xl animate-pulse"></div>
                
//                 {/* Glass Rings */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative w-full h-full animate-spin-slow">
//                     {[...Array(5)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute inset-0 rounded-full border-2 border-white/10"
//                         style={{
//                           transform: `scale(${1 - i * 0.15}) rotateX(${i * 15}deg)`,
//                           background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
//                           backdropFilter: 'blur(10px)',
//                           animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
//                           animationDelay: `${i * 0.2}s`
//                         }}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Chromatic Aberration Effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-transparent to-cyan-500/20 mix-blend-screen animate-pulse"></div>
//               </div>
//             </div>

//             {/* Floating Stats Cards on Left Side */}
//             <div className={`absolute top-0 left-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//               <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   {counts.projects}+
//                 </div>
//                 <div className="text-sm text-gray-300 mt-2">Project Completed</div>
//               </div>
//             </div>

//             <div className={`absolute top-20 right-0 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//               <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   {counts.satisfaction}%
//                 </div>
//                 <div className="text-sm text-gray-300 mt-2">Satisfied Clients</div>
//               </div>
//             </div>

//             <div className={`absolute bottom-20 left-10 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   {counts.hours}+
//                 </div>
//                 <div className="text-sm text-gray-300 mt-2">Hours of work</div>
//               </div>
//             </div>

//             <div className={`absolute bottom-0 right-10 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   0{counts.years}+
//                 </div>
//                 <div className="text-sm text-gray-300 mt-2">Years Experience</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="space-y-8">
//             <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
//                 Impact We<br />Created
//               </h2>
//             </div>

//             <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 At Kinetiq, we specialize in offering a full range of creative branding, 
//                 strategy, design and development services tailored to bring your ideas to life.
//               </p>
//             </div>

//             <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
//                 <span className="relative z-10 flex items-center gap-3">
//                   Get Started
//                   <svg 
//                     className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) rotateX(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotateX(10deg);
//           }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImpactSection;










































// import React, { useEffect, useRef, useState } from 'react';

// const ImpactSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const [counts, setCounts] = useState({
//     projects: 0,
//     satisfaction: 0,
//     hours: 0,
//     years: 0
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     const targets = {
//       projects: 329,
//       satisfaction: 99,
//       hours: 6240,
//       years: 5
//     };

//     let currentStep = 0;

//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;

//       setCounts({
//         projects: Math.floor(targets.projects * progress),
//         satisfaction: Math.floor(targets.satisfaction * progress),
//         hours: Math.floor(targets.hours * progress),
//         years: Math.floor(targets.years * progress)
//       });

//       if (currentStep >= steps) {
//         setCounts(targets);
//         clearInterval(timer);
//       }
//     }, stepDuration);

//     return () => clearInterval(timer);
//   }, [isVisible]);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
      
//       <div 
//         ref={sectionRef}
//         className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
//       >
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Title and 3D Glass Element */}
//           <div className="space-y-12">
//             {/* Title */}
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
//                 We make your<br />
//                 business stand out
//               </h1>
//             </div>

//             {/* 3D Glass Element */}
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
//               <div className="relative w-full max-w-sm mx-auto lg:mx-0">
//                 {/* Holographic Glow */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 via-purple-400/40 to-pink-400/40 blur-3xl animate-pulse"></div>
                
//                 {/* Glass Sphere with Rings */}
//                 <div className="relative aspect-square">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative w-full h-full animate-spin-slow">
//                       {/* Multiple Glass Rings */}
//                       {[...Array(7)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="absolute inset-0"
//                           style={{
//                             transform: `rotateX(${i * 25}deg) scale(${1 - i * 0.08})`,
//                             animation: `float ${4 + i * 0.3}s ease-in-out infinite`,
//                             animationDelay: `${i * 0.15}s`
//                           }}
//                         >
//                           <div className="w-full h-full rounded-full border-4 border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"></div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Chromatic Aberration Overlay */}
//                   <div className="absolute inset-0 rounded-full">
//                     <div className="absolute inset-0 bg-red-500/20 rounded-full translate-x-1 blur-sm"></div>
//                     <div className="absolute inset-0 bg-cyan-500/20 rounded-full -translate-x-1 blur-sm"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Description and Stats */}
//           <div className="space-y-12">
//             {/* Description */}
//             <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-md">
//                 At Kinetiq, we are the architects of distinctive and memorable creative experiences. That align with but surpass the continually evolving standards of the creative landscape.
//               </p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-8 lg:gap-12">
//               {/* Project Completed */}
//               <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <div className="text-5xl lg:text-6xl font-bold mb-2">
//                   {counts.projects}+
//                 </div>
//                 <div className="text-gray-400 text-sm lg:text-base">
//                   Project Completed
//                 </div>
//               </div>

//               {/* Satisfied Clients */}
//               <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <div className="text-5xl lg:text-6xl font-bold mb-2">
//                   {counts.satisfaction}%
//                 </div>
//                 <div className="text-gray-400 text-sm lg:text-base">
//                   Satisfied clients
//                 </div>
//               </div>

//               {/* Hours of work */}
//               <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <div className="text-5xl lg:text-6xl font-bold mb-2">
//                   {counts.hours}+
//                 </div>
//                 <div className="text-gray-400 text-sm lg:text-base">
//                   Hours of work
//                 </div>
//               </div>

//               {/* Years Experience */}
//               <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <div className="text-5xl lg:text-6xl font-bold mb-2">
//                   0{counts.years}+
//                 </div>
//                 <div className="text-gray-400 text-sm lg:text-base">
//                   Years Experience
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) rotateZ(0deg);
//           }
//           50% {
//             transform: translateY(-15px) rotateZ(5deg);
//           }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImpactSection;













































import React, { useEffect, useRef, useState } from 'react';
import health from "../assets/Health.png"; 

const BusinessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    hours: 0,
    years: 0
  });

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      projects: 329,
      satisfaction: 99,
      hours: 6240,
      years: 5
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background - More prominent red on right side */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-red-950/40"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-red-950/40 blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and 3D Image */}
          <div className="space-y-12">
            {/* Title */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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
                  {/* Replace 'your-image-path.png' with your actual image import */}
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
          <div className="space-y-70">
            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-gray-300 text-base sm:text-sm leading-relaxed max-w-md">
                At Kinetiq, we are the architects of distinctive and memorable creative experiences. That align with but surpass the continually evolving standards of the creative landscape.
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
                <div className="text-5xl lg:text-6xl font-bold mb-2">
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

export default BusinessSection;













