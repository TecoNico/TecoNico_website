import React, { useEffect, useRef, useState } from 'react';

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      quote: "Their words are a testament to our commitment to excellence, creativity, and customer-centric approach. We're honored to have been a part of their projects and look forward to the opportunity of working with you.",
      name: 'Jordan Esen',
      position: 'CEO XX Group',
      image: '/api/placeholder/400/500',
      // Replace with: import client1 from './images/client1.jpg'
    },
    {
      id: 2,
      quote: "Working with Kinetiq has been an absolute game-changer for our business. Their attention to detail and creative solutions exceeded our expectations.",
      name: 'Sarah Mitchell',
      position: 'Founder, TechStart',
      image: '/api/placeholder/400/500',
      // Replace with: import client2 from './images/client2.jpg'
    },
    {
      id: 3,
      quote: "The team's dedication and innovative approach transformed our brand identity. Highly recommend their services to anyone looking for top-tier design work.",
      name: 'Michael Chen',
      position: 'CMO, Digital Ventures',
      image: '/api/placeholder/400/500',
      // Replace with: import client3 from './images/client3.jpg'
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-950/20"></div>
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
      >
        {/* Title */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Worldwide Trust Built<br />
            on Excellence
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
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
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
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

export default TestimonialSection;