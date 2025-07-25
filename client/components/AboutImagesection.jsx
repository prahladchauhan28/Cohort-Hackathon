const AboutImagesection = () => {
  return (
    <div className="relative">
      <div className="relative z-10 group">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
          <img
            src="https://ik.imagekit.io/Prahlad2002/Moody-playlist/about.jpg?updatedAt=1753125832756"
            alt="S8UL Champion"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-s8ul-dark/40 via-transparent to-transparent" />

          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-s8ul-green/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Floating Achievement Card */}
      <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-s8ul-green to-green-590 p-6 rounded-2xl shadow-2xl max-w-xs z-20 border border-s8ul-green/20">
        <div className="flex items-center space-x-3 mb-3"></div>
        <p className="text-white text-sm font-medium leading-relaxed hover:animate-pulse transition-all duration-300">
          "Onto the global map, known for their esports dominance, visionary
          leadership & innovative content creation."
        </p>
      </div>

      {/* Background Decorations */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-s8ul-green/10 to-transparent rounded-full blur-xl" />
      <div className="absolute -bottom-16 -left-16 w-24 h-24 bg-gradient-to-tl from-s8ul-green/5 to-transparent rounded-full blur-lg" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </div>
  );
};

export default AboutImagesection;
