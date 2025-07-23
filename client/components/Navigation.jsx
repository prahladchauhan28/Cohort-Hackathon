
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Navigation = ({ className }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate= useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {

    if (sectionId === "shop") {
      // navigate("/shop");
      // setIsMenuOpen(false);
      // return; // Stop here, no scrolling needed
      window.open("/shop", "_blank", "noopener,noreferrer");
      setIsMenuOpen(false);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Players", id: "players" },
    { name: "Shop", id: "shop" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-s8ul-dark/95 backdrop-blur-lg border-b border-s8ul-green/20 shadow-2xl shadow-s8ul-green/5"
          : "bg-transparent",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:text-s8ul-green"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br  rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-s8ul-green/25 transition-all duration-300">
                <span className="text-white font-black text-sm lg:text-base">
                  <img
                    src="https://ik.imagekit.io/Prahlad2002/S8UL/logo.webp?updatedAt=1753125937296"
                    alt="S8UL Champion"
                    className="w-full object-cover"
                  />
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-xl hover:bg-s8ul-green/10"
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-s8ul-green to-green-400 transition-all duration-300 group-hover:w-8" />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-gray-300 hover:text-white rounded-xl hover:bg-s8ul-green/10 transition-all duration-300"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  size={24}
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                  )}
                />
                <X
                  size={24}
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isMenuOpen
                      ? "rotate-0 opacity-100"
                      : "-rotate-90 opacity-0",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen
            ? "max-h-80 bg-s8ul-dark/95 backdrop-blur-lg border-b border-s8ul-green/20 shadow-2xl"
            : "max-h-0",
        )}
      >
        <div className="px-4 py-6 space-y-3">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center space-x-4 w-full px-4 py-3 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-s8ul-green/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-lg">{item.name}</span>
              <div className="flex-1" />
              <div className="w-2 h-2 bg-s8ul-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation


