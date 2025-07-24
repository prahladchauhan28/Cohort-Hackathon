import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import FloatingElement from "./FloatingElement";
import GradientText from "./ui-comp/GradientText";
import BlurText from "./ui-comp/BuildKeyFrames";
import CircularText from "./ui-comp/RotationTransition";

export function Hero() {
  const ParticleField = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-s8ul-green rounded-full opacity-20 animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-br from-s8ul-dark via-gray-900 to-black"
    >
      {/* Particle Field */}
      <ParticleField />

      {/* Floating Elements */}
      <FloatingElement />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Main Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-s8ul-green via-green-500 to-s8ul-green bg-clip-text text-transparent animate-pulse duration-.2">
                S8UL
              </span>
            </h1>
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide">
              <span className="text-gray-300">Gaming</span>
            </div>
          </div>

          {/* Subtitle with animation */}
          <div className="mb-8 space-y-4">
            <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={2}
                className="block"
              >
                Leading the Gaming Revolution
              </GradientText>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-s8ul-green to-transparent mx-auto" />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Championship-winning teams with world-class content creation,
            <span className="text-s8ul-green font-semibold">
              {" "}
              shaping the future
            </span>{" "}
            of gaming on national and international stages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 border-s8ul-green bg-gradient-to-r from-s8ul-dark-lighter to-green-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl "
            >
              <span className="relative z-10">Explore Our Journey</span>
              <div className="absolute inset-0 border-s8ul-green bg-gradient-to-r from-green-600 to-s8ul-dark-lighter opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("players")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2  text-white bg-gradient-to-r from-green-600  font-bold text-lg rounded-xl hover:bg-s8ul-green hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Champions
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 right-8 text-white hidden lg:block z-50">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xl  font-extrabold tracking-wide text-s8ul-green">
           S8UL
          </span>
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
