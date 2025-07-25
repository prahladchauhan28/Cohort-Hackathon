import React from "react";

const SpotlightCard = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h3 className="text-4xl lg:text-5xl font-black mb-4">
          <span className="bg-gradient-to-r from-s8ul-green via-green-400 to-s8ul-green bg-clip-text text-transparent">
            S8UL SPOTLIGHT
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-s8ul-green to-transparent mx-auto mb-6" />
        <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
          Stay up to date with the most exciting esports events and tournaments
          happening around the world.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Championship Tournament",
            description: "Latest tournament victories and upcoming matches",
            image:
              "https://ik.imagekit.io/Prahlad2002/S8UL/media1.png?updatedAt=1753125937589",
            gradient: "from-s8ul-green/1 to-green-600/20",
          },
          {
            title: "Team Announcements",
            description: "New team members and roster updates",
            image:
              "https://ik.imagekit.io/Prahlad2002/S8UL/media3.png?updatedAt=1753125940610",
            gradient: "from-purple-500/20 to-s8ul-green/20",
          },
          {
            title: "Content Highlights",
            description: "Behind the scenes and content creation",
            image:
              "https://ik.imagekit.io/Prahlad2002/S8UL/slider3.webp?updatedAt=1753125942777",
            gradient: "from-blue-500/20 to-s8ul-green/20",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-s8ul-dark-lighter to-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-s8ul-gray/20"
          >
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-s8ul-green transition-colors duration-300">
                {card.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Card Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-s8ul-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotlightCard;
