// import React, { useEffect, useRef, useState } from 'react';

// const BlogPage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const sectionsRef = useRef({});

//   useEffect(() => {
//     const observers = {};
    
//     Object.keys(sectionsRef.current).forEach((key) => {
//       if (sectionsRef.current[key]) {
//         observers[key] = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting) {
//               setIsVisible(prev => ({ ...prev, [key]: true }));
//             }
//           },
//           { threshold: 0.2 }
//         );
//         observers[key].observe(sectionsRef.current[key]);
//       }
//     });

//     return () => {
//       Object.values(observers).forEach(observer => observer.disconnect());
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
//       <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>

//       {/* Header Section */}
//       <div 
//         ref={el => sectionsRef.current['header'] = el}
//         className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
//       >
//         <div className={`text-center transform transition-all duration-1000 ${isVisible['header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h1 className="text-6xl lg:text-7xl font-bold mb-6">
//             Welcome to Teconico
//           </h1>
//           <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
//             Explore our latest insights, tutorials, and updates about smart home automation and IoT solutions
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//         </div>
//       </div>

//       {/* Featured Posts Section */}
//       <div 
//         ref={el => sectionsRef.current['featured'] = el}
//         className="relative z-10 container mx-auto px-6 py-12"
//       >
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['featured'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             Featured Posts
//           </h2>
//           <p className="text-gray-400">Latest stories from our blog</p>
//         </div>

//         <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//           <div className={`transform transition-all duration-1000 delay-200 ${isVisible['featured'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//             {/* Elfsight Widget for Featured Posts - Replace with actual widget ID */}
//             <div className="w-full min-h-96 flex items-center justify-center bg-black/40 rounded-xl border border-white/10">
//               <div className="text-center">
//                 <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2v-7a2 2 0 00-2-2h-2.793a2 2 0 00-1.447.603l-2.605 2.604a1 1 0 00-.302.816v3.168a2 2 0 002 2h3.5" />
//                 </svg>
//                 <p className="text-gray-400">Featured Posts Widget</p>
//                 <p className="text-xs text-gray-500 mt-2">Widget ID: 67455506-f879-4668-932c-7de7286b6ad7</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Medium Posts Section */}
//       <div 
//         ref={el => sectionsRef.current['medium'] = el}
//         className="relative z-10 container mx-auto px-6 py-16"
//       >
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['medium'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             Medium Posts
//           </h2>
//           <p className="text-gray-400">Read our in-depth articles on Medium</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//         </div>

//         <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//           <div className={`transform transition-all duration-1000 delay-200 ${isVisible['medium'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//             {/* Elfsight Widget for Medium Posts - Replace with actual widget ID */}
//             <div className="w-full min-h-96 flex items-center justify-center bg-black/40 rounded-xl border border-white/10">
//               <div className="text-center">
//                 <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 <p className="text-gray-400">Medium Posts Widget</p>
//                 <p className="text-xs text-gray-500 mt-2">Widget ID: 54b346a7-31b8-43d6-b764-4189f52e339a</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* YouTube Posts Section */}
//       <div 
//         ref={el => sectionsRef.current['youtube'] = el}
//         className="relative z-10 container mx-auto px-6 py-16"
//       >
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['youtube'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             YouTube Videos
//           </h2>
//           <p className="text-gray-400">Watch our video tutorials and demos</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//         </div>

//         <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//           <div className={`transform transition-all duration-1000 delay-200 ${isVisible['youtube'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//             {/* Elfsight Widget for YouTube Posts - Replace with actual widget ID */}
//             <div className="w-full min-h-96 flex items-center justify-center bg-black/40 rounded-xl border border-white/10">
//               <div className="text-center">
//                 <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                 </svg>
//                 <p className="text-gray-400">YouTube Videos Widget</p>
//                 <p className="text-xs text-gray-500 mt-2">Widget ID: 6215b853-db9d-402f-adc0-5711bcb6d1e6</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Twitter Posts Section */}
//       <div 
//         ref={el => sectionsRef.current['twitter'] = el}
//         className="relative z-10 container mx-auto px-6 py-16"
//       >
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['twitter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             Latest Updates
//           </h2>
//           <p className="text-gray-400">Follow us on Twitter for real-time updates</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//         </div>

//         <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//           <div className={`transform transition-all duration-1000 delay-200 ${isVisible['twitter'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//             {/* Elfsight Widget for Twitter Posts - Replace with actual widget ID */}
//             <div className="w-full min-h-96 flex items-center justify-center bg-black/40 rounded-xl border border-white/10">
//               <div className="text-center">
//                 <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
//                 </svg>
//                 <p className="text-gray-400">Twitter Updates Widget</p>
//                 <p className="text-xs text-gray-500 mt-2">Widget ID: 5e3340c0-bbf5-46b0-8b37-d02a55405810</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div 
//         ref={el => sectionsRef.current['cta'] = el}
//         className="relative z-10 container mx-auto px-6 py-20"
//       >
//         <div className={`max-w-4xl mx-auto bg-gradient-to-br from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 text-center transform transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
//           <p className="text-gray-300 mb-8">
//             Subscribe to our newsletter to get the latest news, updates, and exclusive content delivered to your inbox.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors flex-1"
//             />
//             <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


























// import React, { useEffect, useRef, useState } from 'react';
// import { ElfsightWidget } from "react-elfsight-widget";

// const BlogPage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const sectionsRef = useRef({});

//   useEffect(() => {
//     const observers = {};
    
//     Object.keys(sectionsRef.current).forEach((key) => {
//       if (sectionsRef.current[key]) {
//         observers[key] = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting) {
//               setIsVisible(prev => ({ ...prev, [key]: true }));
//             }
//           },
//           { threshold: 0.2 }
//         );
//         observers[key].observe(sectionsRef.current[key]);
//       }
//     });

//     return () => {
//       Object.values(observers).forEach(observer => observer.disconnect());
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
//       <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>

//       {/* Navbar */}
//       <nav className="relative z-20 bg-black/40 backdrop-blur-md border-b border-white/10">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
//             <span className="text-2xl font-bold">Teconico</span>
//           </div>
//           <div className="hidden md:flex items-center gap-8">
//             <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
//             <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
//             <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
//             <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
//           </div>
//           <button className="md:hidden text-white">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-10 flex-1">
//         {/* Header Section */}
//         <div 
//           ref={el => sectionsRef.current['header'] = el}
//           className="container mx-auto px-6 py-20 lg:py-32"
//         >
//           <div className={`text-center transform transition-all duration-1000 ${isVisible['header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h1 className="text-6xl lg:text-7xl font-bold mb-6">
//               Welcome to Teconico Blog
//             </h1>
//             <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
//               Explore our latest insights, tutorials, and updates about smart home automation and IoT solutions
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//           </div>
//         </div>

//         {/* Featured Posts Section */}
//         <div 
//           ref={el => sectionsRef.current['featured'] = el}
//           className="container mx-auto px-6 py-16"
//         >
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['featured'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               Featured Posts
//             </h2>
//             <p className="text-gray-400">Latest stories from our blog</p>
//           </div>

//           <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//             <div className={`transform transition-all duration-1000 delay-200 ${isVisible['featured'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//               <ElfsightWidget widgetID="67455506-f879-4668-932c-7de7286b6ad7" />
//             </div>
//           </div>
//         </div>

//         {/* Medium Posts Section */}
//         <div 
//           ref={el => sectionsRef.current['medium'] = el}
//           className="container mx-auto px-6 py-16"
//         >
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['medium'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               Medium Posts
//             </h2>
//             <p className="text-gray-400">Read our in-depth articles on Medium</p>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//           </div>

//           <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//             <div className={`transform transition-all duration-1000 delay-200 ${isVisible['medium'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//               <ElfsightWidget widgetID="54b346a7-31b8-43d6-b764-4189f52e339a" />
//             </div>
//           </div>
//         </div>

//         {/* YouTube Posts Section */}
//         <div 
//           ref={el => sectionsRef.current['youtube'] = el}
//           className="container mx-auto px-6 py-16"
//         >
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['youtube'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               YouTube Videos
//             </h2>
//             <p className="text-gray-400">Watch our video tutorials and demos</p>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//           </div>

//           <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//             <div className={`transform transition-all duration-1000 delay-200 ${isVisible['youtube'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//               <ElfsightWidget widgetID="6215b853-db9d-402f-adc0-5711bcb6d1e6" />
//             </div>
//           </div>
//         </div>

//         {/* Twitter Posts Section */}
//         <div 
//           ref={el => sectionsRef.current['twitter'] = el}
//           className="container mx-auto px-6 py-16"
//         >
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['twitter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               Latest Updates
//             </h2>
//             <p className="text-gray-400">Follow us on Twitter for real-time updates</p>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
//           </div>

//           <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
//             <div className={`transform transition-all duration-1000 delay-200 ${isVisible['twitter'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//               <ElfsightWidget widgetID="5e3340c0-bbf5-46b0-8b37-d02a55405810" />
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div 
//           ref={el => sectionsRef.current['cta'] = el}
//           className="container mx-auto px-6 py-20"
//         >
//           <div className={`max-w-4xl mx-auto bg-gradient-to-br from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 text-center transform transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
//             <p className="text-gray-300 mb-8">
//               Subscribe to our newsletter to get the latest news, updates, and exclusive content delivered to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors flex-1"
//               />
//               <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
//         <div className="container mx-auto px-6 py-16">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             {/* Company Info */}
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
//                 <h3 className="text-xl font-bold">Teconico</h3>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 Building the future of smart home automation with innovative IoT solutions.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
//                 <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
//                 <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Contact</h4>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>Jodhpur, Rajasthan</li>
//                 <li>India</li>
//                 <li>IST (UTC +5:30)</li>
//                 <li><a href="mailto:info@teconico.com" className="hover:text-white transition-colors">info@teconico.com</a></li>
//               </ul>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//               <div className="flex items-center gap-4">
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                   </svg>
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
//                   </svg>
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="pt-8 border-t border-white/10">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//               <p>© 2025 Teconico, Inc. All rights reserved.</p>
//               <div className="flex gap-6">
//                 <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
//                 <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BlogPage;

























import React, { useEffect, useRef, useState } from 'react';
import { ElfsightWidget } from "react-elfsight-widget";
import logo from "../assets/logo-black.png";
import NavbarLinks from "../components/NavBarLinks";
import FooterCTASection from "../components/FooterCTASection";

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

const BlogPage = () => {
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md">
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
              <a href="/" className="block text-white hover:text-red-600">Home</a>
              <a href="/blog" className="block text-white hover:text-red-600">Blog</a>
              <a href="#about" className="block text-white hover:text-red-600">About</a>
              <a href="#contact" className="block text-white hover:text-red-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 pt-20">
        {/* Header Section */}
        <div 
          ref={el => sectionsRef.current['header'] = el}
          className="container mx-auto px-6 py-20 lg:py-32"
        >
          <div className={`text-center transform transition-all duration-1000 ${isVisible['header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              Welcome to Teconico Blog
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
              Explore our latest insights, tutorials, and updates about smart home automation and IoT solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
          </div>
        </div>

        {/* Featured Posts Section */}
        <div 
          ref={el => sectionsRef.current['featured'] = el}
          className="container mx-auto px-6 py-12"
        >
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['featured'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured Posts
            </h2>
            <p className="text-gray-400">Latest stories from our blog</p>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['featured'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <ElfsightWidget widgetID="67455506-f879-4668-932c-7de7286b6ad7" />
            </div>
          </div>
        </div>

        {/* Medium Posts Section */}
        <div 
          ref={el => sectionsRef.current['medium'] = el}
          className="container mx-auto px-6 py-16"
        >
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['medium'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Medium Posts
            </h2>
            <p className="text-gray-400">Read our in-depth articles on Medium</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['medium'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <ElfsightWidget widgetID="54b346a7-31b8-43d6-b764-4189f52e339a" />
            </div>
          </div>
        </div>

        {/* YouTube Posts Section */}
        <div 
          ref={el => sectionsRef.current['youtube'] = el}
          className="container mx-auto px-6 py-16"
        >
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['youtube'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              YouTube Videos
            </h2>
            <p className="text-gray-400">Watch our video tutorials and demos</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['youtube'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <ElfsightWidget widgetID="6215b853-db9d-402f-adc0-5711bcb6d1e6" />
            </div>
          </div>
        </div>

        {/* Twitter Posts Section */}
        <div 
          ref={el => sectionsRef.current['twitter'] = el}
          className="container mx-auto px-6 py-16"
        >
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible['twitter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Latest Updates
            </h2>
            <p className="text-gray-400">Follow us on Twitter for real-time updates</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible['twitter'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <ElfsightWidget widgetID="5e3340c0-bbf5-46b0-8b37-d02a55405810" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={el => sectionsRef.current['cta'] = el}
          className="container mx-auto px-6 py-20"
        >
          <div className={`max-w-4xl mx-auto bg-gradient-to-br from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 text-center transform transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to get the latest news, updates, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors flex-1"
              />
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
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
    </div>
  );
};

export default BlogPage;