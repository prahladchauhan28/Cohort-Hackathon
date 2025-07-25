import AboutContent from "../components/AboutContent";
import AboutImagesection from "../components/AboutImagesection";
import SpotlightCard from "../components/SpotlightCard";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-s8ul-dark to-gray-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-s8ul-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-s8ul-green/3 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <AboutContent />
          {/* Enhanced Image Section */}
          <AboutImagesection />
        </div>
        {/* Enhanced S8UL Spotlight Section */}
        <SpotlightCard />
      </div>
    </section>
  );
}
