import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Youtube, MessageSquare, Edit3, ExternalLink } from 'lucide-react';
import { ElfsightWidget } from "react-elfsight-widget";  // Uncomment when implementing

const BlogPage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isMediumVisible, setIsMediumVisible] = useState(false);
  const [isYoutubeVisible, setIsYoutubeVisible] = useState(false);
  const [isTwitterVisible, setIsTwitterVisible] = useState(false);
  
  const heroRef = useRef(null);
  const mediumRef = useRef(null);
  const youtubeRef = useRef(null);
  const twitterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setIsHeroVisible(true);
          }
          if (entry.target === mediumRef.current && entry.isIntersecting) {
            setIsMediumVisible(true);
          }
          if (entry.target === youtubeRef.current && entry.isIntersecting) {
            setIsYoutubeVisible(true);
          }
          if (entry.target === twitterRef.current && entry.isIntersecting) {
            setIsTwitterVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (mediumRef.current) observer.observe(mediumRef.current);
    if (youtubeRef.current) observer.observe(youtubeRef.current);
    if (twitterRef.current) observer.observe(twitterRef.current);

    return () => observer.disconnect();
  }, []);

  // Placeholder for ElfsightWidget - replace with actual implementation
  const ElfsightWidgetPlaceholder = ({ widgetID, platform, description }) => (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200 text-center">
      <div className="text-gray-400 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          {platform === 'medium' && <Edit3 size={32} />}
          {platform === 'youtube' && <Youtube size={32} />}
          {platform === 'twitter' && <MessageSquare size={32} />}
          {platform === 'blog' && <BookOpen size={32} />}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        {platform.charAt(0).toUpperCase() + platform.slice(1)} Widget
      </h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="text-sm text-gray-400 font-mono bg-gray-200 px-4 py-2 rounded-lg inline-block">
        Widget ID: {widgetID}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        {/* Uncomment below and remove this placeholder when implementing */}
        <ElfsightWidget widgetID="{widgetID}" />
        {/* Replace this placeholder with: ElfsightWidget widgetID="{widgetID}" */}
      </div>
    </div>
  );

  return (
    <div className="pt-20"> {/* Adjusted for navbar */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M50 0v50h50M0 50h50v50'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10" ref={heroRef}>
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-3xl mb-8 shadow-2xl">
                <BookOpen size={40} />
              </div>
              
              {/* Main Title - Your Exact Content */}
              <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">TecoNico</span>
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Stay updated with the latest insights, innovations, and breakthroughs in AI, ML, and healthcare technology. 
                Explore our content across multiple platforms.
              </p>

              {/* Platform Navigation */}
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#blog-feeds" className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 font-semibold shadow-lg">
                  <BookOpen size={20} />
                  <span>Blog Posts</span>
                </a>
                <a href="#medium-posts" className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 font-semibold shadow-lg">
                  <Edit3 size={20} />
                  <span>Medium</span>
                </a>
                <a href="#youtube-posts" className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 font-semibold shadow-lg">
                  <Youtube size={20} />
                  <span>YouTube</span>
                </a>
                <a href="#twitter-posts" className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 font-semibold shadow-lg">
                  <MessageSquare size={20} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feeds Section */}
      <section id="blog-feeds" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Your Original Blog Feeds Widget */}
            <div className="feeds mb-16">
              {/* Replace this placeholder with your actual ElfsightWidget */}
              <ElfsightWidgetPlaceholder 
                widgetID="67455506-f879-4668-932c-7de7286b6ad7"
                platform="blog"
                description="Latest blog posts and updates from TecoNico"
              />
              {/* Uncomment when implementing: */}
              <ElfsightWidget widgetID="67455506-f879-4668-932c-7de7286b6ad7" />
              <div className="remover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Medium Posts Section */}
      <section id="medium-posts" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50" ref={mediumRef}>
        <div className="container mx-auto px-6">
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="px-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Edit3 size={24} className="text-white" />
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>

          <div className={`transform transition-all duration-1000 ${isMediumVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Your Original Medium Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Medium</span> Posts
            </h1>

            {/* Your Original Medium Widget */}
            <div className="Medium">
              {/* Replace this placeholder with your actual ElfsightWidget */}
              <ElfsightWidgetPlaceholder 
                widgetID="54b346a7-31b8-43d6-b764-4189f52e339a"
                platform="medium"
                description="Our latest articles and insights published on Medium"
              />
              {/* Uncomment when implementing: */}
              <ElfsightWidget widgetID="54b346a7-31b8-43d6-b764-4189f52e339a" />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Posts Section */}
      <section id="youtube-posts" className="py-20 bg-white" ref={youtubeRef}>
        <div className="container mx-auto px-6">
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="px-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Youtube size={24} className="text-white" />
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>

          <div className={`transform transition-all duration-1000 ${isYoutubeVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Your Original YouTube Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">YouTube</span> Posts
            </h1>

            {/* Your Original YouTube Widget */}
            <div className="Youtube">
              {/* Replace this placeholder with your actual ElfsightWidget */}
              <ElfsightWidgetPlaceholder 
                widgetID="6215b853-db9d-402f-adc0-5711bcb6d1e6"
                platform="youtube"
                description="Video content, tutorials, and tech discussions"
              />
              {/* Uncomment when implementing: */}
              <ElfsightWidget widgetID="6215b853-db9d-402f-adc0-5711bcb6d1e6" />
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Posts Section */}
      <section id="twitter-posts" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50" ref={twitterRef}>
        <div className="container mx-auto px-6">
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="px-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <MessageSquare size={24} className="text-white" />
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>

          <div className={`transform transition-all duration-1000 ${isTwitterVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Your Original Twitter Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Twitter</span> Posts
            </h1>

            {/* Your Original Twitter Widget */}
            <div className="Tweeter">
              {/* Replace this placeholder with your actual ElfsightWidget */}
              <ElfsightWidgetPlaceholder 
                widgetID="5e3340c0-bbf5-46b0-8b37-d02a55405810"
                platform="twitter"
                description="Real-time updates, thoughts, and industry insights"
              />
              {/* Uncomment when implementing: */}
              <ElfsightWidget widgetID="5e3340c0-bbf5-46b0-8b37-d02a55405810" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isTwitterVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Connected with TecoNico
            </h2>
            <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Follow us across all platforms to never miss an update on the latest in AI, healthcare technology, and innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://medium.com/@TecoNico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
              >
                <Edit3 size={20} />
                <span>Follow on Medium</span>
                <ExternalLink size={16} />
              </a>
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
                Subscribe to Newsletter
              </button>
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

export default BlogPage;