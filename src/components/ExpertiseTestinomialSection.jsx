import React, { useEffect, useRef, useState } from 'react';
import pic1 from "../assets/images/healthcare/Picture1.png";
// import pic2 from "../assets/images/healthcare/Picture2.jpg";
import pic2 from "../assets/analytics.png";
import pic3 from "../assets/images/healthcare/Picture3.jpg";
import pic4 from "../assets/images/healthcare/Picture4.jpg";
import dummy1 from "../assets/dummy1.png";
import dummy2 from "../assets/dummy2.png";
import dummy3 from "../assets/dummy3.png";

const ExpertiseTestimonialSection = () => {
  const [isExpertiseVisible, setIsExpertiseVisible] = useState(false);
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const expertiseRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const expertiseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpertiseVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (expertiseRef.current) {
      expertiseObserver.observe(expertiseRef.current);
    }

    if (testimonialRef.current) {
      testimonialObserver.observe(testimonialRef.current);
    }

    return () => {
      expertiseObserver.disconnect();
      testimonialObserver.disconnect();
    };
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

  const testimonials = [
    {
      id: 1,
      quote: "Their words are a testament to our commitment to excellence, creativity, and customer-centric approach. We're honored to have been a part of their projects and look forward to the opportunity of working with you.",
      name: 'Jordan Esen',
      position: 'CEO XX Group',
      image: dummy1,
    },
    {
      id: 2,
      quote: "Working with Teconico has been an absolute game-changer for our business. Their attention to detail and creative solutions exceeded our expectations.",
      name: 'Sarah Mitchell',
      position: 'Founder, TechStart',
      image: dummy2,
    },
    {
      id: 3,
      quote: "The team's dedication and innovative approach transformed our brand identity. Highly recommend their services to anyone looking for top-tier design work.",
      name: 'Michael Chen',
      position: 'CMO, Digital Ventures',
      image: dummy3,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Unified Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/30 to-black"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-900/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-red-950/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-red-950/30 blur-3xl"></div>

      {/* Expertise Section */}
      <div 
        ref={expertiseRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        {/* Title */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${isExpertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                isExpertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

      {/* Testimonial Section */}
      <div 
        ref={testimonialRef}
        className="relative z-10 container mx-auto px-6 py-15 lg:py-20"
      >
        {/* Title */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${isTestimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Worldwide Trust Built<br />
            on Excellence
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className={`transform transition-all duration-1000 delay-200 ${isTestimonialVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-xs mx-auto lg:mx-0">
                  {testimonials.map((testimonial, index) => (
                    <img
                      key={testimonial.id}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Image Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-900/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Right Side - Quote and Navigation */}
            <div className={`transform transition-all duration-1000 delay-400 ${isTestimonialVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-8">
                {/* Quote */}
                <div className="relative">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    >
                      <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm lg:text-base text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={prevTestimonial}
                    className="group w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <svg 
                      className="w-5 h-5 text-white transform rotate-180 group-hover:-translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextTestimonial}
                    className="group w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <svg 
                      className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2 ml-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTestimonialSection;