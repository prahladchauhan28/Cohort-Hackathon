import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://ik.imagekit.io/Prahlad2002/S8UL/slider3.webp?updatedAt=1753125942777",
      title: "Championship Victory",
      description: "S8UL dominates the esports scene"
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/Prahlad2002/S8UL/slider9.webp?updatedAt=1753125944585",
      title: "Team Unity",
      description: "Together we conquer"
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/Prahlad2002/S8UL/slider8.png?updatedAt=1753125943713",
      title: "Tournament Champions",
      description: "Leading the gaming revolution"
    },
      {
      id: 4,
      image: "https://ik.imagekit.io/Prahlad2002/S8UL/slider2.jpg?updatedAt=1753125942151",
      title: "Tournament Champions",
      description: "Leading the gaming revolution"
    },
    {
      id: 5,
      image: "https://ik.imagekit.io/Prahlad2002/S8UL/slider10.png?updatedAt=1753125945041",
      title: "Tournament Champions",
      description: "Leading the gaming revolution"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const ParticleField = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-s8ul-green rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-s8ul-green/30 rotate-45 animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-s8ul-green/40 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-s8ul-green/50 rotate-12 animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-s8ul-green/10 to-transparent rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: "3s" }} />
    </div>
  );

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-gradient-to-br from-s8ul-dark via-gray-900 to-black">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Particle Field */}
      <ParticleField />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Main Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-s8ul-green via-green-400 to-s8ul-green bg-clip-text text-transparent animate-pulse duration-.1">
                  S8UL
                </span>
            </h1>
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide">
              <span className="text-gray-300">Gaming</span>
            </div>
          </div>

          {/* Subtitle with animation */}
          <div className="mb-8 space-y-4">
            <p className="text-xl sm:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-s8ul-green to-green-400 bg-clip-text font-semibold">
              Leading the Gaming Revolution
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-s8ul-green to-transparent mx-auto" />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Championship-winning teams with world-class content creation, 
            <span className="text-s8ul-green font-semibold"> shaping the future</span> of gaming 
            on national and international stages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-s8ul-green to-green-500 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-s8ul-green/25"
            >
              <span className="relative z-10">Explore Our Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-s8ul-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => document.getElementById('players')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-s8ul-green text-s8ul-green font-bold text-lg rounded-xl hover:bg-s8ul-green hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Champions
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 border-2",
              index === currentSlide 
                ? "bg-s8ul-green border-s8ul-green scale-125 shadow-lg shadow-s8ul-green/50" 
                : "bg-transparent border-white/50 hover:border-white/75 hover:scale-110"
            )}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white hidden lg:block">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm font-medium tracking-wide">S8UL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
          <div className="w-2 h-2 bg-s8ul-green rounded-full" />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-s8ul-green/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-s8ul-green/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-s8ul-green/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-s8ul-green/30" />
    </section>
  );
}
