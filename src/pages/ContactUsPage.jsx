import React, { useEffect, useRef, useState } from 'react';
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

const ContactUsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  
  const message = encodeURIComponent(
    `Hi! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}\n\nPhone: ${formData.phone}\nEmail: ${formData.email}`
  );
  const phone = "918619131789";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  
  setFormData({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
};

  const contactInfo = [
    {
      id: 1,
      icon: 'phone',
      title: 'Phone',
      value: '+91 8619131789',
      link: 'tel:+918619131789'
    },
    {
      id: 2,
      icon: 'email',
      title: 'Email',
      value: 'teconicopvtltd@gmail.com',
      link: 'mailto:teconicopvtltd@gmail.com'
    },
    {
      id: 3,
      icon: 'location',
      title: 'Location',
      value: 'Jaipur, Rajasthan, India',
      link: '#'
    },
    {
      id: 4,
      icon: 'clock',
      title: 'Timezone',
      value: 'IST (UTC +5:30)',
      link: '#'
    }
  ];

  return (
    <>
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
              <a href="/contact" className="block text-white hover:text-red-600">Contact</a>
              <a href="#about" className="block text-white hover:text-red-600">About</a>
            </div>
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-950/20 blur-3xl"></div>

        {/* Header Section */}
        <div 
          ref={el => sectionsRef.current['header'] = el}
          className="relative z-10 container mx-auto px-6 py-16 lg:py-24"
        >
          <div className={`text-center transform transition-all duration-1000 ${isVisible['header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
              Have a question or ready to transform your business? We'd love to hear from you. Reach out to us and let's create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-8"></div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div 
          ref={el => sectionsRef.current['info'] = el}
          className="relative z-10 container mx-auto px-6 py-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.id}
                className={`transform transition-all duration-1000 ${
                  isVisible['info'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <a 
                  href={info.link}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-500 block"
                >
                  <div className="flex flex-col items-center text-center">
                    {info.icon === 'phone' && (
                      <svg className="w-8 h-8 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l2.498 6.244a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l6.244 2.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {info.icon === 'email' && (
                      <svg className="w-8 h-8 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {info.icon === 'location' && (
                      <svg className="w-8 h-8 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {info.icon === 'clock' && (
                      <svg className="w-8 h-8 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div 
          ref={el => sectionsRef.current['form'] = el}
          className="relative z-10 container mx-auto px-6 py-12"
        >
          <div className="max-w-3xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible['form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project inquiry"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows="6"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                    onClick={handleSubmit}
                    className="group px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3"
                    >
                      Message Us on WhatsApp
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.574-2.305 1.485-3.116 2.654-1.537 2.236-1.985 5.177-.493 7.955 1.493 2.778 4.572 4.41 7.514 4.41.822 0 1.628-.119 2.423-.353 1.294-.385 2.462-1.079 3.415-2.02l-.163-.256c-.47-.739-.779-1.211-.779-1.715 0-.503.31-.974.779-1.715l.163-.256c.952-.94 2.121-1.635 3.415-2.02.795-.234 1.601-.353 2.423-.353 2.942 0 6.021-1.632 7.514-4.41 1.492-2.778 1.044-5.719-.493-7.955-.811-1.169-1.878-2.08-3.116-2.654-1.355-.627-2.808-.947-4.255-.949z"/>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
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
    </>
  );
};

export default ContactUsPage;