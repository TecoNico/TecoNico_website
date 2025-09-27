import React, { useState, useEffect, useRef } from 'react';
import { Brain, Heart, Activity, Shield, Play, ExternalLink, CheckCircle, ArrowRight, Stethoscope, TrendingUp, Users, Clock } from 'lucide-react';
import logo from "../assets/images/logo-black.png";
import health from "../assets/Health.png";
import OurProduct from '../components/OurProduct';


const Healthcare = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(false);
  
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setIsHeroVisible(true);
          }
          if (entry.target === infoRef.current && entry.isIntersecting) {
            setIsInfoVisible(true);
          }
          if (entry.target === productRef.current && entry.isIntersecting) {
            setIsProductVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (productRef.current) observer.observe(productRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical data for accurate predictions",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "Continuous health tracking and instant alerts for critical conditions",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "Enterprise-grade security ensuring your medical data remains private",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast health trends and prevent potential medical issues",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "95%", label: "Diagnostic Accuracy", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "Health Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "1000+", label: "Patients Helped", icon: <Users className="w-6 h-6" /> },
    { number: "50ms", label: "Response Time", icon: <Activity className="w-6 h-6" /> }
  ];

  const YoutubeEmbed = ({ embedId }) => (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Healthcare AI Demo"
        className="rounded-2xl"
      />
    </div>
  );

  return (
    <>
    <div className="pt-20">
      
      {/* Hero Section */}
      <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0'/%3E%3Cpath d='M50 30v40M30 50h40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen" ref={heroRef}>
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
            
            {/* Content Side */}
            <div className={`transform transition-all duration-1000 ${isHeroVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              
              {/* Logo Section */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-white-500 to-white-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  {/* Replace with your logo */}
                  <img 
                    src={logo}
                    alt="TecoNico Logo" 
                    className="w-12 h-12 rounded-xl"
                  />
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-gray-900">Teco</span>
                  <span className="text-red-500">Nico</span>
                  <div className="text-sm text-gray-500">Innovating Healthcare with AI</div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Healthcare</span>
                <br />
                <span className="text-gray-700">Using</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Artificial Intelligence</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Revolutionizing healthcare with cutting-edge AI technology for better diagnosis, 
                treatment, and patient outcomes.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold">
                  Get Started
                  <ArrowRight size={20} className="inline ml-2" />
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 font-semibold shadow-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className={`transform transition-all duration-1000 delay-300 ${isHeroVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
                  {/* Replace with your healthcare image */}
                  <img 
                    src={health}
                    alt="Healthcare AI Technology" 
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                  
                  {/* Floating Stats */}
                  {/* <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">95%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                        <div className="text-sm text-gray-600">Monitoring</div>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white relative" ref={infoRef}>
        <div className="container mx-auto px-6">
          
          {/* Stats Bar */}
          <div className={`transform transition-all duration-1000 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 mb-20 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-red-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Question 1 */}
            <div className={`transform transition-all duration-1000 delay-200 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      What is AI in Healthcare?
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      AI in healthcare is an application of machine learning (ML) algorithms and other cognitive technologies in medical settings. 
                      In the simplest sense, AI is when computers and other machines mimic human cognition, and are capable of learning, 
                      thinking, and making decisions or taking actions. AI in healthcare, then, is the use of machines to analyze and act on 
                      medical data, usually with the goal of predicting a particular outcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className={`transform transition-all duration-1000 delay-400 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      What is its use?
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Rather than robotics, AI in healthcare focuses on large amounts of data that can save lives by analyzing them. 
                      This includes treatment methods and their outcomes, survival rates and speed of care gathered across millions of patients, 
                      geographical locations and innumerable and sometimes interconnected health conditions. This computing power can easily 
                      analyze trends in data and make predictions which a normal human brain can't.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`mt-15 transform transition-all duration-1000 delay-600 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">AI Healthcare</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50" ref={productRef}>
        <div className="container mx-auto px-6">
          
          <div className={`transform transition-all duration-1000 ${isProductVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Do</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Content */}
            <div className={`transform transition-all duration-1000 delay-300 ${isProductVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Play className="w-8 h-8 text-red-500 mr-4" />
                  How Our Product Works
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Log in through your name and password, go through the links, upload your information and get the required results. 
                    Furthermore, this helps you to keep a check on your daily intake.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Just open this application, upload your reports and CT Scans and they will generate your report. 
                    It will also give you a percentage of your medical seriousness. This app covers almost all health-related issues.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                    <a
                      href="https://medium.com/@TecoNico/do-you-know-how-artificial-intelligence-is-helping-in-healthcare-52bf0bd3fd6e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg group transition-colors duration-300"
                    >
                      Read More on Medium
                      <ExternalLink size={20} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className={`transform transition-all duration-1000 delay-500 ${isProductVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <YoutubeEmbed embedId="sHqUxH5aqYM" />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isProductVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Healthcare?
              </h3>
              <p className="text-blue-100 mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
                Join thousands of healthcare professionals who are already using our AI-powered solutions to improve patient outcomes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
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
      `}</style>
    </div>
    <OurProduct />
    </>
  );
};

export default Healthcare;