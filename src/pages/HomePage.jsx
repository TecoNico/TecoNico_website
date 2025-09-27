// import React, { useState, useEffect, useRef } from 'react';
// import { Lightbulb, Target, Users, Award, Eye, Compass, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

// const Homepage = () => {
//   const [isIntroVisible, setIsIntroVisible] = useState(false);
//   const [isVisionVisible, setIsVisionVisible] = useState(false);
//   const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
//   const [activeVisionTab, setActiveVisionTab] = useState('vision');
//   const [openAccordion, setOpenAccordion] = useState('vision');
  
//   const introRef = useRef(null);
//   const visionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target === introRef.current && entry.isIntersecting) {
//             setIsIntroVisible(true);
//             animateCounters();
//           }
//           if (entry.target === visionRef.current && entry.isIntersecting) {
//             setIsVisionVisible(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (introRef.current) observer.observe(introRef.current);
//     if (visionRef.current) observer.observe(visionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   const animateCounters = () => {
//     const targets = { projects: 100, clients: 50, years: 5 };
//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       const progress = step / steps;
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);

//       setCounters({
//         projects: Math.round(targets.projects * easeOutQuart),
//         clients: Math.round(targets.clients * easeOutQuart),
//         years: Math.round(targets.years * easeOutQuart)
//       });

//       if (step >= steps) {
//         clearInterval(timer);
//       }
//     }, stepDuration);
//   };

//   const features = [
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Innovation",
//       description: "Cutting-edge AI & ML solutions"
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Precision",
//       description: "Utmost accuracy in every project"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Team Work",
//       description: "Passionate collaborative approach"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Quality",
//       description: "Excellence in products & services"
//     }
//   ];

//   const visionData = {
//     vision: {
//       icon: <Eye className="w-8 h-8" />,
//       title: "Vision",
//       content: "We are passionate in our work and never look at alternatives for hard work. We build a strong connection with our colleagues, emotionally and professionally, which enable us to create a good environment in our company. We always treat our clients with a positive attitude, we treat them with due respect and maintain professionalism with them. As we always look at our company as a team of intellectuals, so we have created a democratic platform, in which everyone's voice and outlook is being mattered."
//     },
//     mission: {
//       icon: <Target className="w-8 h-8" />,
//       title: "Mission",
//       content: "Our mission is to provide a platform to the people where they can find anything that they need. A place where a small idea would be welcomed by both hands and would be provided with the best results out of it. We want to develop an environment where every one of us can thrive and meet all the demands of the coming future. A place where each and every one's voice, not only talking about our employees but our customers and everyone who incubate their ideas in the company would be relished upon and would be cared."
//     },
//     plan: {
//       icon: <Calendar className="w-8 h-8" />,
//       title: "Plan",
//       content: "We plan to provide the best products and services to the people. We never compromise with the quality as in the future we have to create benchmarks for us only. We have to make long term goals and have to create a proper structure to achieve it. We are here to provide great values and to earn and to make respect."
//     }
//   };

//   const toggleAccordion = (section) => {
//     setOpenAccordion(openAccordion === section ? '' : section);
//   };

//   return (
//     <div className="pt-24"> {/* Added top padding to avoid navbar overlap */}
      
//       {/* Introduction Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e3332c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }} />
//         </div>

//         <div className="container mx-auto px-4 relative z-10" ref={introRef}>
//           <div className="text-center mb-16">
//             <div className={`transform transition-all duration-1000 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Let us <span className="text-red-500 relative">
//                   Introduce
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 animate-scale-x"></div>
//                 </span> Ourselves
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
//             </div>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className={`transform transition-all duration-1000 delay-300 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//                 <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-light">
//                   We at <span className="font-bold text-gray-900">TecoNico Pvt. Ltd.</span> try our best to solve modern-day problems 
//                   with smart solutions using advanced technology. Our main tools are 
//                   <span className="text-red-500 font-semibold"> AI and ML technology</span> that provides the 
//                   effortless result with utmost accuracy. We provide different technologies in both 
//                   <span className="font-semibold text-gray-900"> hardware and software solutions</span>. 
//                   Our main aim to provide best of best products and services to clients. 
//                   <span className="text-red-500 font-semibold"> Quality</span> is the only thing by which TecoNico is alive. 
//                   Our team follow passion in their work, support in the team work, professionalism with clients.
//                 </p>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//                   {features.map((feature, index) => (
//                     <div 
//                       key={index}
//                       className={`text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg ${
//                         isIntroVisible ? 'animate-fade-in-up' : 'opacity-0'
//                       }`}
//                       style={{ animationDelay: `${800 + index * 200}ms` }}
//                     >
//                       <div className="text-red-500 mb-3 flex justify-center">
//                         {feature.icon}
//                       </div>
//                       <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
//                       <p className="text-sm text-gray-600">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className={`grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 ${isIntroVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
//                   <div className="text-center">
//                     <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
//                       {counters.projects}+
//                     </div>
//                     <div className="text-gray-600 font-medium">Projects Delivered</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
//                       {counters.clients}+
//                     </div>
//                     <div className="text-gray-600 font-medium">Happy Clients</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
//                       {counters.years}+
//                     </div>
//                     <div className="text-gray-600 font-medium">Years Experience</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision, Mission, Plan Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
//           }} />
//         </div>

//         <div className="container mx-auto px-4 relative z-10" ref={visionRef}>
//           <div className="text-center mb-16">
//             <div className={`transform transition-all duration-1000 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Our <span className="text-red-500">Core Values</span>
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
//               <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
//                 Discover what drives us forward and shapes our commitment to excellence
//               </p>
//             </div>
//           </div>

//           {/* Desktop View - Tabs */}
//           <div className="hidden lg:block max-w-6xl mx-auto">
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
//               {/* Tab Navigation */}
//               <div className="flex justify-center mb-12">
//                 <div className="flex bg-gray-800/50 rounded-full p-2 backdrop-blur-sm border border-gray-700">
//                   {Object.entries(visionData).map(([key, data]) => (
//                     <button
//                       key={key}
//                       onClick={() => setActiveVisionTab(key)}
//                       className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
//                         activeVisionTab === key
//                           ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
//                           : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
//                       }`}
//                     >
//                       <div className="text-current">
//                         {data.icon}
//                       </div>
//                       <span>{data.title}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Tab Content */}
//               <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12">
//                 <div className="text-center mb-8">
//                   <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full text-white mb-6">
//                     {visionData[activeVisionTab].icon}
//                   </div>
//                   <h3 className="text-3xl font-bold text-white mb-4">
//                     {visionData[activeVisionTab].title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
//                   {visionData[activeVisionTab].content}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Mobile/Tablet View - Accordion */}
//           <div className="lg:hidden max-w-2xl mx-auto">
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               {Object.entries(visionData).map(([key, data]) => (
//                 <div key={key} className="mb-4">
//                   <button
//                     onClick={() => toggleAccordion(key)}
//                     className="w-full flex items-center justify-between p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className="text-red-500">
//                         {data.icon}
//                       </div>
//                       <h3 className="text-xl font-semibold text-white">
//                         {data.title}
//                       </h3>
//                     </div>
//                     <div className="text-gray-400">
//                       {openAccordion === key ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                     </div>
//                   </button>
                  
//                   {openAccordion === key && (
//                     <div className="mt-2 p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl animate-fade-in">
//                       <p className="text-gray-300 leading-relaxed">
//                         {data.content}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
//               <Compass size={20} />
//               <span className="font-semibold">Join Our Journey</span>
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes scale-x {
//           to {
//             transform: scaleX(1);
//           }
//         }
        
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .animate-scale-x {
//           animation: scale-x 1s ease-out 0.5s forwards;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Homepage;

























































import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Target, Users, Award, Eye, Compass, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import OurTeam from '../components/OurTeam';

const Homepage = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const [activeVisionTab, setActiveVisionTab] = useState('vision');
  const [openAccordion, setOpenAccordion] = useState('vision');
  
  const introRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === introRef.current && entry.isIntersecting) {
            setIsIntroVisible(true);
            animateCounters();
          }
          if (entry.target === visionRef.current && entry.isIntersecting) {
            setIsVisionVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 100, clients: 50, years: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        projects: Math.round(targets.projects * easeOutQuart),
        clients: Math.round(targets.clients * easeOutQuart),
        years: Math.round(targets.years * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge AI & ML solutions",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Utmost accuracy in every project",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Work",
      description: "Passionate collaborative approach",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Excellence in products & services",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const visionData = {
    vision: {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      content: "We are passionate in our work and never look at alternatives for hard work. We build a strong connection with our colleagues, emotionally and professionally, which enable us to create a good environment in our company. We always treat our clients with a positive attitude, we treat them with due respect and maintain professionalism with them. As we always look at our company as a team of intellectuals, so we have created a democratic platform, in which everyone's voice and outlook is being mattered."
    },
    mission: {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      content: "Our mission is to provide a platform to the people where they can find anything that they need. A place where a small idea would be welcomed by both hands and would be provided with the best results out of it. We want to develop an environment where every one of us can thrive and meet all the demands of the coming future. A place where each and every one's voice, not only talking about our employees but our customers and everyone who incubate their ideas in the company would be relished upon and would be cared."
    },
    plan: {
      icon: <Calendar className="w-8 h-8" />,
      title: "Plan",
      content: "We plan to provide the best products and services to the people. We never compromise with the quality as in the future we have to create benchmarks for us only. We have to make long term goals and have to create a proper structure to achieve it. We are here to provide great values and to earn and to make respect."
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <>
    <div className="pt-20"> {/* Reduced top padding */}
      
      {/* Introduction Section - Improved Design */}
      <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen" ref={introRef}>
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-20">
              <div className={`transform transition-all duration-1000 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Let us <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 relative">
                    Introduce
                    <div className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-red-500/20 to-red-600/20 transform scale-x-0 animate-scale-x rounded-full"></div>
                  </span>
                  <br />Ourselves
                </h1>
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Transforming ideas into reality with cutting-edge technology solutions
                </p>
              </div>
            </div>

            {/* Main Content Card - Full Width with Better Spacing */}
            <div className={`transform transition-all duration-1000 delay-300 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                
                {/* Content */}
                <div className="p-8 md:p-16">
                  <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                      We at <span className="font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">TecoNico Pvt. Ltd.</span> try our best to solve modern-day problems 
                      with smart solutions using advanced technology. Our main tools are 
                      <span className="text-red-500 font-semibold"> AI and ML technology</span> that provides 
                      effortless results with utmost accuracy.
                    </p>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        We provide different technologies in both <span className="font-semibold text-gray-900">hardware and software solutions</span>. 
                        Our main aim is to provide the best products and services to clients. 
                        <span className="text-red-500 font-semibold"> Quality</span> is what keeps TecoNico alive. 
                        Our team follows passion in work, supports team collaboration, and maintains professionalism with clients.
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-gray-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                          isIntroVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${800 + index * 200}ms` }}
                      >
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {feature.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stats Section */}
                  <div className={`grid md:grid-cols-3 gap-12 pt-12 border-t border-gray-200 ${isIntroVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
                    <div className="text-center group">
                      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {counters.projects}+
                      </div>
                      <div className="text-gray-600 font-semibold text-lg">Projects Delivered</div>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="text-center group">
                      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {counters.clients}+
                      </div>
                      <div className="text-gray-600 font-semibold text-lg">Happy Clients</div>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="text-center group">
                      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {counters.years}+
                      </div>
                      <div className="text-gray-600 font-semibold text-lg">Years Experience</div>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold text-lg">
                <span>Ready to Transform Your Ideas?</span>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse group-hover:animate-bounce"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Plan Section - Improved Colors */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10" ref={visionRef}>
          <div className="text-center mb-20">
            <div className={`transform transition-all duration-1000 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">Core Values</span>
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
              <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover what drives us forward and shapes our commitment to excellence in every project we undertake
              </p>
            </div>
          </div>

          {/* Desktop View - Enhanced Tabs */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Tab Navigation */}
              <div className="flex justify-center mb-16">
                <div className="flex bg-slate-600/30 backdrop-blur-lg rounded-2xl p-2 border border-slate-500/20">
                  {Object.entries(visionData).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveVisionTab(key)}
                      className={`flex items-center space-x-3 px-10 py-5 rounded-xl font-semibold transition-all duration-300 ${
                        activeVisionTab === key
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl transform scale-105'
                          : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                      }`}
                    >
                      <div className="text-current">
                        {data.icon}
                      </div>
                      <span className="text-lg">{data.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-slate-600/20 backdrop-blur-lg rounded-3xl border border-slate-500/20 p-12 md:p-16 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl text-white mb-8 shadow-2xl">
                    {visionData[activeVisionTab].icon}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Our {visionData[activeVisionTab].title}
                  </h3>
                </div>
                <p className="text-slate-300 text-xl leading-relaxed text-center max-w-5xl mx-auto">
                  {visionData[activeVisionTab].content}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View - Enhanced Accordion */}
          <div className="lg:hidden max-w-3xl mx-auto">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {Object.entries(visionData).map(([key, data]) => (
                <div key={key} className="mb-6">
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between p-8 bg-slate-600/20 backdrop-blur-lg border border-slate-500/20 rounded-2xl hover:bg-slate-600/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-red-400 bg-slate-700/50 p-3 rounded-xl">
                        {data.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {data.title}
                      </h3>
                    </div>
                    <div className="text-slate-400">
                      {openAccordion === key ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  
                  {openAccordion === key && (
                    <div className="mt-4 p-8 bg-slate-700/20 backdrop-blur-lg border border-slate-500/20 rounded-2xl animate-fade-in">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {data.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-500 ${isVisionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold text-lg">
              <Compass size={24} className="group-hover:animate-spin" />
              <span>Join Our Journey</span>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse group-hover:animate-bounce"></div>
            </button>
          </div>
        </div>
      </section>

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
        
        @keyframes scale-x {
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
    <OurTeam> </OurTeam>
    </>
  );
};

export default Homepage;