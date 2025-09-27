import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  MessageCircle, 
  Clock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  User,
  AtSign,
  FileText,
  Zap
} from "lucide-react";

const Contact = () => {
  // State Management
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Refs
  const contactRef = useRef(null);

  // Effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  // Event Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 2000);
  };

  // Data
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "452-address sm with client",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8619131789",
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-600",
      action: "tel:+918619131789"
    },
    {
      icon: Mail,
      title: "Email",
      content: "teconicopvtltd@gmail.com",
      color: "from-red-500 to-pink-500",
      textColor: "text-red-600",
      action: "mailto:teconicopvtltd@gmail.com"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
        
        {/* Background Effects */}
        <BackgroundEffects />

        <div className="relative z-10" ref={contactRef}>
          
          {/* Header Section */}
          <HeaderSection isVisible={isVisible} />

          {/* Main Content */}
          <MainContentSection 
            isVisible={isVisible}
            contactInfo={contactInfo}
            businessHours={businessHours}
            formData={formData}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />

        </div>
      </div>

      {/* Custom Styles */}
      <CustomStyles />
    </>
  );
};

// Background Effects Component
const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>
    <div className="absolute inset-0 opacity-5">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  </>
);

// Header Section Component
const HeaderSection = ({ isVisible }) => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="inline-flex items-center space-x-3 bg-red-50 border border-red-100 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-none">
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
                Contact
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full transform scale-x-0 animate-scale-x"></div>
            </span>
            <br />
            <span className="relative">
              Us
              <div className="absolute -top-4 -right-4">
                <div className="w-8 h-8 bg-red-500 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse delay-400"></div>
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your ideas into reality? 
            <span className="font-semibold text-gray-800"> Let's connect and discuss your project</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Main Content Section Component
const MainContentSection = ({ 
  isVisible, 
  contactInfo, 
  businessHours, 
  formData, 
  isSubmitting, 
  isSubmitted, 
  onInputChange, 
  onSubmit 
}) => (
  <section className="pb-20">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        
        {/* Contact Information */}
        <ContactInformation 
          isVisible={isVisible}
          contactInfo={contactInfo}
          businessHours={businessHours}
        />

        {/* Contact Form */}
        <ContactForm
          isVisible={isVisible}
          formData={formData}
          isSubmitting={isSubmitting}
          isSubmitted={isSubmitted}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />

      </div>
    </div>
  </section>
);

// Contact Information Component
const ContactInformation = ({ isVisible, contactInfo, businessHours }) => (
  <div className="lg:col-span-5">
    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      
      {/* Contact Cards */}
      <div className="space-y-6 mb-12">
        {contactInfo.map((info, index) => (
          <ContactInfoCard key={index} info={info} index={index} />
        ))}
      </div>

      {/* Business Hours Card */}
      <BusinessHoursCard businessHours={businessHours} />
      
    </div>
  </div>
);

// Contact Info Card Component
const ContactInfoCard = ({ info, index }) => {
  const IconComponent = info.icon;
  
  const handleClick = () => {
    if (info.action) {
      window.open(info.action);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${info.action ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${600 + index * 200}ms` }}
    >
      <div className="flex items-start space-x-6">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-bold ${info.textColor} mb-3 group-hover:text-gray-800 transition-colors`}>
            {info.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
            {info.content}
          </p>
          {info.action && (
            <div className="mt-4 flex items-center text-sm text-gray-500 group-hover:text-gray-600">
              <span>Click to {info.title.toLowerCase()}</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Business Hours Card Component
const BusinessHoursCard = ({ businessHours }) => (
  <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8">
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
        <Clock className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-purple-600">Business Hours</h3>
    </div>
    
    <div className="space-y-4">
      {businessHours.map((schedule, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
          <span className="text-gray-600 font-medium">{schedule.day}</span>
          <span className="text-gray-800 font-semibold">{schedule.time}</span>
        </div>
      ))}
    </div>
  </div>
);

// Contact Form Component
const ContactForm = ({ 
  isVisible, 
  formData, 
  isSubmitting, 
  isSubmitted, 
  onInputChange, 
  onSubmit 
}) => (
  <div className="lg:col-span-7">
    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden relative">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
        <div className="absolute top-6 right-6 w-4 h-4 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>

        <div className="p-8 md:p-12">
          
          {/* Form Header */}
          <FormHeader />

          {/* Success Message */}
          {isSubmitted && <SuccessMessage />}

          {/* Form Fields */}
          <div className="space-y-8">
            
            <FormInput
              icon={User}
              type="text"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              placeholder="Your Name"
              required
            />

            <FormInput
              icon={AtSign}
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="Your Email"
              required
            />

            <FormTextarea
              icon={FileText}
              name="message"
              value={formData.message}
              onChange={onInputChange}
              placeholder="Tell us about your project..."
              rows={6}
              required
            />

            <SubmitButton 
              isSubmitting={isSubmitting}
              onSubmit={onSubmit}
            />

          </div>

          {/* Additional Info */}
          <AdditionalInfo />

        </div>
      </div>
    </div>
  </div>
);

// Form Header Component
const FormHeader = () => (
  <div className="text-center mb-10">
    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
      <Send className="w-5 h-5" />
      <span className="font-semibold">Send Message</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Conversation</span>
    </h2>
    <p className="text-gray-600 text-lg">Tell us about your project and how we can help bring your ideas to life</p>
  </div>
);

// Success Message Component
const SuccessMessage = () => (
  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-4 animate-fade-in">
    <CheckCircle className="w-8 h-8 text-green-500" />
    <div>
      <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
      <p className="text-green-600">We'll get back to you within 24 hours.</p>
    </div>
  </div>
);

// Form Input Component
const FormInput = ({ icon: IconComponent, type, name, value, onChange, placeholder, required }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
      <IconComponent size={20} />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-lg placeholder-gray-400 hover:bg-gray-100"
    />
  </div>
);

// Form Textarea Component
const FormTextarea = ({ icon: IconComponent, name, value, onChange, placeholder, rows, required }) => (
  <div className="relative">
    <div className="absolute left-4 top-6 text-gray-400">
      <IconComponent size={20} />
    </div>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      required={required}
      className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-lg placeholder-gray-400 resize-none hover:bg-gray-100"
    />
  </div>
);

// Submit Button Component
const SubmitButton = ({ isSubmitting, onSubmit }) => (
  <button
    onClick={onSubmit}
    disabled={isSubmitting}
    className="group relative w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-5 px-8 rounded-2xl hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold text-lg overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <span className="relative flex items-center justify-center space-x-3">
      {isSubmitting ? (
        <>
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Sending...</span>
        </>
      ) : (
        <>
          <Zap className="w-6 h-6 group-hover:animate-bounce" />
          <span>Send Message</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </>
      )}
    </span>
  </button>
);

// Additional Info Component
const AdditionalInfo = () => (
  <div className="mt-10 pt-8 border-t border-gray-200 text-center">
    <p className="text-gray-600 mb-4">
      Prefer to email directly? Reach us at{' '}
      <a 
        href="mailto:teconicopvtltd@gmail.com" 
        className="text-red-500 hover:text-red-600 font-semibold transition-colors"
      >
        teconicopvtltd@gmail.com
      </a>
    </p>
    <div className="flex items-center justify-center space-x-2">
      <Sparkles className="w-4 h-4 text-red-400" />
      <span className="text-gray-500 text-sm">We typically respond within 24 hours</span>
    </div>
  </div>
);

// Custom Styles Component
const CustomStyles = () => (
  <style jsx>{`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
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
    
    .animate-fade-in {
      animation: fade-in 0.5s ease-out forwards;
    }
    
    .animate-scale-x {
      animation: scale-x 1s ease-out forwards;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    input:focus, textarea:focus {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(239, 68, 68, 0.15);
    }
    
    button:hover:not(:disabled) {
      box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
    }
  `}</style>
);

export default Contact;