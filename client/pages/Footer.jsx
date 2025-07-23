import { useState } from "react";
import { X, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
    // Handle subscription logic here
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Shop", href: "#shop" },
    { name: "Media", href: "#media" },
    { name: "Players", id: "players" },
    { name: "Contact Us", id: "contact" },
  ];

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: X, 
      href: "https://x.com/S8ulesports",
      color: "hover:text-white"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/s8ul/people/",
      color: "hover:text-blue-400"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://instagram.com/s8ul.gg",
      color: "hover:text-pink-400"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-s8ul-dark to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-s8ul-green/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-s8ul-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/Prahlad2002/S8UL/logo.webp?updatedAt=1753125937296"
                  alt="S8UL Logo"
                  className="w-18 h-18 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-white font-black text-lg hidden">S8UL</span>
              </div>
              <div>
                <h3 className="text-2xl font-black pt-0 text-white">S8UL</h3>
                <p className="text-s8ul-green font-semibold text-sm">GAMING</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              S8UL is a global name in esports and gaming content, headquartered in Mumbai, India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-s8ul-green" />
                <a 
                  href="mailto:connect@s8ul.gg" 
                  className="text-gray-300 hover:text-s8ul-green transition-colors duration-300"
                >
                  connect@s8ul.gg
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-s8ul-green" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-s8ul-dark-lighter rounded-xl text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-s8ul-green/10 border border-s8ul-gray/20 hover:border-s8ul-green/30`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About S8UL */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6">
              About S8UL
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <div key={link.name}>
                  {link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="block text-gray-300 hover:text-s8ul-green transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="block text-gray-300 hover:text-s8ul-green transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Subscribe */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6">
              Subscribe
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Don't miss to subscribe to our new feeds, kindly fill the form below.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-s8ul-gray/30 border-2 border-s8ul-gray/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-s8ul-green focus:bg-s8ul-gray/10 transition-all duration-300 pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-s8ul-green hover:bg-s8ul-green-light rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={16} className="text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-s8ul-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright © 2025, All Right Reserved
            </p>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-s8ul-green transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-s8ul-green transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-s8ul-green transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-s8ul-green to-transparent" />
    </footer>
  );
}
