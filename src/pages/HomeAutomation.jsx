import React, { useState, useEffect, useRef } from 'react';
import { Home, Smartphone, Wifi, Zap, Clock, Shield, Settings, Play, ArrowRight, Lightbulb, Thermometer, Camera, Lock } from 'lucide-react';
import logo from "../assets/images/logo-black.png";
import smartHouse from "../assets/smart_house.png";

const HomeAutomation = () => {
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
      icon: <Smartphone className="w-8 h-8" />,
      title: "Remote Control",
      description: "Control your home from anywhere in the world with our mobile app",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT Connected",
      description: "Seamlessly connected devices through Internet of Things technology",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Automated timers and schedules for effortless home management",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Efficient",
      description: "Save money on electricity bills with intelligent automation",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "10min", label: "Installation Time", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Remote Access", icon: <Smartphone className="w-6 h-6" /> },
    { number: "100+", label: "Happy Homes", icon: <Home className="w-6 h-6" /> },
    { number: "30%", label: "Energy Savings", icon: <Zap className="w-6 h-6" /> }
  ];

  const automationDevices = [
    { icon: <Lightbulb className="w-6 h-6" />, name: "Smart Lighting", description: "Intelligent lighting control" },
    { icon: <Thermometer className="w-6 h-6" />, name: "Climate Control", description: "AC and heating automation" },
    { icon: <Camera className="w-6 h-6" />, name: "Security", description: "Smart monitoring systems" },
    { icon: <Lock className="w-6 h-6" />, name: "Access Control", description: "Smart locks and entry" }
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
        title="Home Automation Demo"
        className="rounded-2xl"
      />
    </div>
  );

  return (
    <div className="pt-20">
        {/* min-h-screen py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden */}
      
      {/* Hero Section */}
      <section className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indogo-50 relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M20 20h60v60H20V20zm10 10v40h40V30H30z'/%3E%3Cpath d='M30 40h10v10H30V40zm20 0h10v10H50V40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen" ref={heroRef}>
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
            
            {/* Content Side */}
            <div className={`transform transition-all duration-1000 ${isHeroVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              
              {/* Logo Section */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-white-50 to-white-100 rounded-2xl flex items-center justify-center shadow-2xl">
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
                </div>
              </div>

              {/* Your Exact Title Content */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Update</span> your
                <br />
                <span className="text-gray-700">lifestyle</span>
                <br />
                <span className="text-gray-700">by</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Automating</span> Your Home
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Transform your living space with intelligent automation that makes your daily life more convenient, 
                secure, and energy-efficient.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold">
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
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-2xl">
                  {/* Replace with your smart house image */}
                  <img 
                    src={smartHouse} 
                    alt="Smart House Automation" 
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                  
                  {/* Floating Stats */}
                  {/* <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">10min</div>
                        <div className="text-sm text-gray-600">Setup</div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                        <div className="text-sm text-gray-600">Control</div>
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

          {/* Smart Device Categories */}
          <div className={`transform transition-all duration-1000 delay-200 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Control Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Smart Devices</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {automationDevices.map((device, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
                  <div className="text-orange-600 mb-4 bg-white rounded-xl p-3 w-fit shadow-sm">
                    {device.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{device.name}</h3>
                  <p className="text-gray-600 text-sm">{device.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Section - Your Original Content */}
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Question 1 - Your Exact Content */}
            <div className={`transform transition-all duration-1000 delay-400 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      What is Home Automation?
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Home automation is the automation of your switches and appliances, so that they can be controlled by your fingertip from Anywhere. 
                      These devices are connected to the Internet, which allows them to be controlled remotely. It can be controlled by app, voice assistant and 
                      remote. It makes your life easier by scheduler and timer and automate your life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 - Your Exact Content */}
            <div className={`transform transition-all duration-1000 delay-600 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Why it is needed?
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      You can put your lights on schedules so that they turn off when you normally go to sleep, or you can have your thermostat turn the A/C 
                      up about an hour before you return to work so you don't have to return to a stuffy house. Home automation makes life more convenient 
                      and can even save you money on heating, cooling and electricity bills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`mt-20 transform transition-all duration-1000 delay-800 ${isInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Smart Home</span> Solution
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

      {/* Product Demo Section - "Why Me?" */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50" ref={productRef}>
        <div className="container mx-auto px-6">
          
          <div className={`transform transition-all duration-1000 ${isProductVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              {/* Your Original "Why Me?" Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Me?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Content - Your Exact "How our product works?" Content */}
            <div className={`transform transition-all duration-1000 delay-300 ${isProductVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Play className="w-8 h-8 text-red-500 mr-4" />
                  How Our Product Works?
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    TecoHome is a small device which can fit inside your switch board and install it in less than 10 min and also it does not change your 
                    existing board functionality instead it makes your switch board smart.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You can control it from our App from Anywhere in the World. Also, it can be controlled by ALEXA and Google Home and IR Remote. 
                    It makes your life easier by its scheduler and timer functions, so it can automatically turn on/off your devices.
                  </p>
                  
                  {/* Installation Steps */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                        <p className="text-sm font-medium text-gray-700">Install TecoHome</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                        <p className="text-sm font-medium text-gray-700">Connect to App</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                        <p className="text-sm font-medium text-gray-700">Control Anywhere</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video - Your Original YouTube Video */}
            <div className={`transform transition-all duration-1000 delay-500 ${isProductVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                {/* Your Original YouTube Video ID */}
                <YoutubeEmbed embedId="ciQ72w-TRBc" />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isProductVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your Home?
              </h3>
              <p className="text-orange-100 mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
                Join hundreds of smart homeowners who have already transformed their living spaces with TecoHome automation technology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get TecoHome
                </button>
                <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Schedule Demo
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
  );
};

export default HomeAutomation;