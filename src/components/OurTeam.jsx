import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Facebook, Instagram, Mail, MapPin, Award, Users } from 'lucide-react';
import CA from "../assets/Team-Image/CA SR Yadav.jpeg";
import harsh from "../assets/Team-Image/harsh.jpg"
import harshit from "../assets/Team-Image/harshit.jpeg"
import shubham from "../assets/Team-Image/shubham.jpg"
import vaibhav from "../assets/Team-Image/vaibhav.jpg"
import vishwajeet from "../assets/Team-Image/vishwajeet.jpg"

const OurTeam = () => {
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

  const team = [
    {
      name: "CA SR Yadav",
      role: "Professional Advisor",
      avatar: CA,
      bio: "Strategic financial advisor with extensive experience in business development and regulatory compliance.",
      fb: "https://www.facebook.com/aayush.yadav.58760",
      specialties: ["Financial Planning", "Business Strategy", "Compliance"]
    },
    {
      name: "Vishwajeet Dwivedy",
      role: "Data Science Consultant",
      avatar: vishwajeet,
      bio: "Expert in machine learning and data analytics with a passion for turning complex data into actionable insights.",
      ln: "https://www.linkedin.com/in/vishwajeet-dwivedy-85b58316a/",
      specialties: ["Machine Learning", "Data Analytics", "AI Solutions"]
    },
    {
      name: "Vaibhav Gupta",
      role: "Content Marketing Manager",
      avatar: vaibhav,
      bio: "Creative marketing strategist focused on building brand awareness through compelling content and digital campaigns.",
      ln: "https://www.linkedin.com/in/vaibhav-gupta-a509821b3",
      insta: "https://www.instagram.com/vaibhav_gupta0807/",
      specialties: ["Digital Marketing", "Content Strategy", "Brand Development"]
    },
    {
      name: "Shubham Patidar",
      role: "Web Developer",
      avatar: shubham,
      bio: "Full-stack developer specializing in modern web technologies and creating seamless user experiences.",
      specialties: ["React Development", "Full Stack", "UI/UX Implementation"]
    },
    {
      name: "Harsh Bunkar",
      role: "Content Head",
      avatar: harsh,
      bio: "Content strategist and creative writer dedicated to crafting engaging narratives that resonate with audiences.",
      specialties: ["Content Creation", "Editorial Strategy", "Brand Voice"]
    },
    {
      name: "Harshit Kumar",
      role: "Aesthetic Head",
      avatar: harshit,
      bio: "Creative designer with an eye for detail, specializing in visual aesthetics and brand identity design.",
      insta: "https://www.instagram.com/hksoriginal/",
      ln: "https://www.linkedin.com/in/harshit-k-3892a4112/",
      specialties: ["Visual Design", "Brand Identity", "Creative Direction"]
    },
  ];

  const MemberCard = ({ member, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={`group relative transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-red-200">
          
          {/* Image Section */}
          <div className="relative overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Social Links Overlay */}
              <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 transition-all duration-500 ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                {member.ln && (
                  <a 
                    href={member.ln} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-blue-600 hover:text-white text-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {member.fb && (
                  <a 
                    href={member.fb} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-blue-800 hover:text-white text-blue-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Facebook size={16} />
                  </a>
                )}
                {member.insta && (
                  <a 
                    href={member.insta} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-pink-600 hover:text-white text-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Instagram size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-red-500 font-semibold text-lg mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>

            {/* Specialties */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                <Award size={16} className="mr-2 text-red-500" />
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full border border-red-100"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M50 50m-25 0a25,25 0 1,1 50,0a25,25 0 1,1 -50,0'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl mb-8 shadow-2xl">
              <Users size={32} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Team</span>
            </h2>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Behind every great innovation is a team of passionate individuals dedicated to turning 
              ideas into reality. Meet the brilliant minds driving TecoNico forward.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <MemberCard 
              key={member.name} 
              member={member} 
              index={index} 
            />
          ))}
        </div>

        {/* Team Stats */}
        {/* <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  6+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Expert Team Members</div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-gray-700 font-semibold text-lg">Years Combined Experience</div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-gray-700 font-semibold text-lg">Passion & Dedication</div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Join Team CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-red-100 mb-6 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Mail size={20} className="inline mr-2" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OurTeam;