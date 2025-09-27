import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Zap, Shield, Sparkles } from 'lucide-react';
import Health1 from "../assets/images/healthcare/Picture1.png";
import Health2 from "../assets/images/healthcare/Picture2.jpg";
import Health3 from "../assets/images/healthcare/Picture3.jpg";
import Health4 from "../assets/images/healthcare/Picture4.jpg";

const OurProduct = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Your product images - replace these placeholder URLs with your actual images
  const productImages = [
    {
      src: {Health1},
      alt: "Healthcare AI Dashboard",
      title: "AI-Powered Dashboard",
      description: "Comprehensive health monitoring interface with real-time analytics",
      
    },
    {
      src: {Health2}, 
      alt: "Medical Scan Analysis",
      title: "Scan Analysis System",
      description: "Advanced CT scan and medical report analysis with AI precision",
      
    },
    {
      src: {Health3},
      alt: "Patient Monitoring",
      title: "Patient Monitoring",
      description: "24/7 patient health tracking with predictive alert systems",
      
    },
    {
      src: {Health4},
      alt: "Medical Reports",
      title: "Report Generation",
      description: "Automated medical report generation with accuracy percentages",
      
    }
  ];

  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Monitoring",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered",
      color: "from-red-500 to-red-600"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Main Product Section */}
      <section className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M40 40m-30 0a30,30 0 1,1 60,0a30,30 0 1,1 -60,0'/%3E%3Cpath d='M40 20v40M20 40h40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Product</span>
              </h2>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive healthcare AI solution designed to revolutionize medical diagnosis and patient care
              </p>
            </div>
          </div>

          {/* Features Bar */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 mb-16 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center text-white">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-2xl mb-4 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {productImages.map((image, index) => (
              <div 
                key={index}
                className={`group relative transform transition-all duration-700 cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
                onClick={() => openModal(image)}
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-red-200">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* View Details Button */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <button className="bg-white/90 hover:bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {image.description}
                    </p>
                    
                    {/* Progress indicator for visual appeal */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">AI Accuracy</span>
                        <span className="text-sm font-semibold text-red-500">
                          {95 - index * 2}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000 delay-500"
                          style={{ width: `${95 - index * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Experience the Future of Healthcare
              </h3>
              <p className="text-red-100 mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
                Our AI-powered healthcare solutions are already transforming patient care across the globe. 
                Join us in revolutionizing healthcare technology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Try Demo
                </button>
                <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div className="relative max-w-4xl mx-auto p-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <span className="text-gray-600 text-2xl leading-none">×</span>
            </button>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default OurProduct;