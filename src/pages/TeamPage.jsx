// import React, { useEffect, useRef, useState } from 'react';
// import CA from "../assets/Team-Image/CA SR Yadav.jpeg";
// import Vishwajeet from "../assets/Team-Image/vishwajeet.jpg";
// import Vaibhav from "../assets/Team-Image/vaibhav.jpg";
// import shubham from "../assets/Team-Image/shubham.jpg";
// import harsh from "../assets/Team-Image/harsh.jpg";
// import Harshit from "../assets/Team-Image/harshit.jpeg";

// const TeamPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const team = [
//     {
//       id: 1,
//       name: "CA SR Yadav",
//       role: "Professional Advisor",
//       avatar: CA,
//       // Replace with: import CA from './Assets/Team-Image/CA SR Yadav.jpeg'
//       social: {
//         facebook: "https://www.facebook.com/aayush.yadav.58760",
//       }
//     },
//     {
//       id: 2,
//       name: "Vishwajeet Dwivedy",
//       role: "Data Science Consultant",
//       avatar: Vishwajeet,
//       // Replace with: import Vishwajeet from './Assets/Team-Image/vishwajeet.jpg'
//       social: {
//         linkedin: "https://www.linkedin.com/in/vishwajeet-dwivedy-85b58316a/",
//       }
//     },
//     {
//       id: 3,
//       name: "Vaibhav Gupta",
//       role: "Content Marketing",
//       avatar: Vaibhav,
//       // Replace with: import Vaibhav from './Assets/Team-Image/vaibhav.jpg'
//       social: {
//         linkedin: "https://www.linkedin.com/in/vaibhav-gupta-a509821b3",
//         instagram: "https://www.instagram.com/vaibhav_gupta0807/",
//       }
//     },
//     {
//       id: 4,
//       name: "Shubham Patidar",
//       role: "Web Developer",
//       avatar: shubham,
//       // Replace with: import shubham from './Assets/Team-Image/shubham.jpg'
//       social: {}
//     },
//     {
//       id: 5,
//       name: "Harsh Bunkar",
//       role: "Content Head",
//       avatar: harsh,
//       // Replace with: import harsh from './Assets/Team-Image/harsh.jpg'
//       social: {}
//     },
//     {
//       id: 6,
//       name: "Harshit Kumar",
//       role: "Aesthetic Head",
//       avatar: Harshit,
//       // Replace with: import Harshit from './Assets/Team-Image/harshit.jpeg'
//       social: {
//         instagram: "https://www.instagram.com/hksoriginal/",
//         linkedin: "https://www.linkedin.com/in/harshit-k-3892a4112/",
//       }
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
//       <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
//       <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>
      
//       <div 
//         ref={sectionRef}
//         className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
//       >
//         {/* Header Section */}
//         <div className="text-center mb-16 lg:mb-24">
//           <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
//               Meet Our Team
//             </h1>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
//           </div>
//           <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <p className="text-gray-400 text-lg lg:text-xl mt-8 max-w-2xl mx-auto">
//               The passionate individuals behind Teconico's success, dedicated to delivering excellence
//             </p>
//           </div>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
//           {team.map((member, index) => (
//             <div
//               key={member.id}
//               className={`transform transition-all duration-1000 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}
//               style={{ transitionDelay: `${300 + index * 100}ms` }}
//               onMouseEnter={() => setHoveredMember(member.id)}
//               onMouseLeave={() => setHoveredMember(null)}
//             >
//               {/* Member Card */}
//               <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition-all duration-500">
//                 {/* Glow Effect on Hover */}
//                 <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>
                
//                 {/* Image Container */}
//                 <div className="relative mb-6">
//                   <div className="relative w-48 h-48 mx-auto">
//                     {/* Image */}
//                     <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-red-500/50 transition-all duration-500">
//                       <img
//                         src={member.avatar}
//                         alt={member.name}
//                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                       />
//                     </div>
                    
//                     {/* Decorative Ring */}
//                     <div className="absolute inset-0 rounded-full border-2 border-red-500/0 group-hover:border-red-500/30 scale-110 transition-all duration-500"></div>
//                   </div>
//                 </div>

//                 {/* Member Info */}
//                 <div className="text-center">
//                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
//                     {member.role}
//                   </p>

//                   {/* Social Links */}
//                   {Object.keys(member.social).length > 0 && (
//                     <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
//                       {member.social.linkedin && (
//                         <a
//                           href={member.social.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group/icon"
//                         >
//                           <svg className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                           </svg>
//                         </a>
//                       )}
//                       {member.social.facebook && (
//                         <a
//                           href={member.social.facebook}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group/icon"
//                         >
//                           <svg className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                           </svg>
//                         </a>
//                       )}
//                       {member.social.instagram && (
//                         <a
//                           href={member.social.instagram}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group/icon"
//                         >
//                           <svg className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                           </svg>
//                         </a>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;





































import React, { useEffect, useRef, useState } from 'react';
import logo from "../assets/logo-black.png";
import NavbarLinks from "../components/NavBarLinks";
import FooterCTASection from "../components/FooterCTASection";
import CA from "../assets/Team-Image/CA SR Yadav.jpeg";
import Vishwajeet from "../assets/Team-Image/vishwajeet.jpg";
import Vaibhav from "../assets/Team-Image/vaibhav.jpg";
import shubham from "../assets/Team-Image/shubham.jpg";
import harsh from "../assets/Team-Image/harsh.jpg";
import Harshit from "../assets/Team-Image/harshit.jpeg";

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

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      id: 1,
      name: "CA SR Yadav",
      role: "Professional Advisor",
      avatar: CA,
      social: {
        facebook: "https://www.facebook.com/aayush.yadav.58760",
      }
    },
    {
      id: 2,
      name: "Vishwajeet Dwivedy",
      role: "Data Science Consultant",
      avatar: Vishwajeet,
      social: {
        linkedin: "https://www.linkedin.com/in/vishwajeet-dwivedy-85b58316a/",
      }
    },
    {
      id: 3,
      name: "Vaibhav Gupta",
      role: "Content Marketing",
      avatar: Vaibhav,
      social: {
        linkedin: "https://www.linkedin.com/in/vaibhav-gupta-a509821b3",
        instagram: "https://www.instagram.com/vaibhav_gupta0807/",
      }
    },
    {
      id: 4,
      name: "Shubham Patidar",
      role: "Web Developer",
      avatar: shubham,
      social: {}
    },
    {
      id: 5,
      name: "Harsh Bunkar",
      role: "Content Head",
      avatar: harsh,
      social: {}
    },
    {
      id: 6,
      name: "Harshit Kumar",
      role: "Aesthetic Head",
      avatar: Harshit,
      social: {
        instagram: "https://www.instagram.com/hksoriginal/",
        linkedin: "https://www.linkedin.com/in/harshit-k-3892a4112/",
      }
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
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>
        
        <div 
          ref={sectionRef}
          className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
        >
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-24">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                Meet Our Team
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
            </div>
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-gray-400 text-lg lg:text-xl mt-8 max-w-2xl mx-auto">
                The passionate individuals behind Teconico's success, dedicated to delivering excellence
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Member Card */}
                <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition-all duration-500">
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Image Container */}
                  <div className="relative mb-6">
                    <div className="relative w-48 h-48 mx-auto">
                      {/* Image */}
                      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-red-500/50 transition-all duration-500">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Decorative Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-red-500/0 group-hover:border-red-500/30 scale-110 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                      {member.role}
                    </p>

                    {/* Social Links */}
                    {Object.keys(member.social).length > 0 && (
                      <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group/icon"
                          >
                            <svg className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.facebook && (
                          <a
                            href={member.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group/icon"
                          >
                            <svg className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group/icon"
                          >
                            <svg className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

export default TeamPage;