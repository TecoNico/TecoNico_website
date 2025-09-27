import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Target, Users, Award } from 'lucide-react';

const Introduce = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      description: "Cutting-edge AI & ML solutions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Utmost accuracy in every project"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Work",
      description: "Passionate collaborative approach"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Excellence in products & services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e3332c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let us <span className="text-red-500 relative">
                Introduce
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 animate-scale-x"></div>
              </span> Ourselves
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-light">
                We at <span className="font-bold text-gray-900">TecoNico Pvt. Ltd.</span> try our best to solve modern-day problems 
                with smart solutions using advanced technology. Our main tools are 
                <span className="text-red-500 font-semibold"> AI and ML technology</span> that provides the 
                effortless result with utmost accuracy. We provide different technologies in both 
                <span className="font-semibold text-gray-900"> hardware and software solutions</span>. 
                Our main aim to provide best of best products and services to clients. 
                <span className="text-red-500 font-semibold"> Quality</span> is the only thing by which TecoNico is alive. 
                Our team follow passion in their work, support in the team work, professionalism with clients.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-200 transform hover:scale-105 transition-all duration-300 hover:shadow-lg ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="text-red-500 mb-3 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className={`grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                    {counters.projects}+
                  </div>
                  <div className="text-gray-600 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                    {counters.clients}+
                  </div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                    {counters.years}+
                  </div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
            <span className="font-semibold">Ready to Transform Your Ideas?</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
      `}</style>
    </section>
  );
};

export default Introduce;