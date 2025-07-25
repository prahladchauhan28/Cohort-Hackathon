import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Countup from "../components/ui-comp/Countup";

export function Players() {
  const [activeGame, setActiveGame] = useState("CODM");

  const games = [
    { id: "CODM", name: "CODM", color: "from-red-500 to-orange-500" },
    { id: "VALORANT", name: "VALORANT", color: "from-red-600 to-pink-500" },
    { id: "BGMI", name: "BGMI", color: "from-blue-500 to-green-500" },
    {
      id: "POKEMON_UNITE",
      name: "POKEMON UNITE",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const players = {
    CODM: [
      {
        name: "Samruddha Ghadge",
        gamertag: "Jokos",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/codm1.png?updatedAt=1753125936763",
      },
      {
        name: "Rishi Dubey",
        gamertag: "Bunnz",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/codm2.png?updatedAt=1753125936841",
      },
      {
        name: "Chiranthan Shetty",
        gamertag: "Itsumo",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/codm5.png?updatedAt=1753125936866",
      },
      {
        name: "Samartha Ghadge",
        gamertag: "Sams",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/codm4.png?updatedAt=1753125936821",
      },
      {
        name: "Zeel Patel",
        gamertag: "Neutron",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/codm3.png?updatedAt=1753125936784",
      },
      {
        name: "C.Glenn Varshan",
        gamertag: "Ghost",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/codm6.png?updatedAt=1753125936820",
      },
    ],
    VALORANT: [
      {
        name: "Sagnik Roy",
        gamertag: "Phoenix",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant1.png?updatedAt=1753125945466",
        role: "Duelist",
      },
      {
        name: "Sharvana Kumar Sahoo",
        gamertag: "Sage",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant2.png?updatedAt=1753125945899",
        role: "Sentinel",
      },
      {
        name: "Bryston Tan",
        gamertag: "Sova",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant3.png?updatedAt=1753125946003",
        role: "Initiator",
      },
      {
        name: "Muhummad Axel Syahbanna Dadan",
        gamertag: "Brimstone",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant4.png?updatedAt=1753125946404",
        role: "Controller",
      },
      {
        name: "Nathan Mascarenhas",
        gamertag: "Omen",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant5.png?updatedAt=1753125946026",

        role: "Controller",
      },
      {
        name: "Onkar Patil",
        gamertag: "Jett",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant6.png?updatedAt=1753125946100",
        role: "Duelist",
      },
      {
        name: "Haisikesh Awate",
        gamertag: "Killjoy",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant7.png?updatedAt=1753125946155",
        role: "Sentinel",
      },
      {
        name: "Bhavin Kotwani",
        gamertag: "Fade",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/valorant8.png?updatedAt=1753125946188",
        role: "Initiator",
      },
    ],
    BGMI: [
      {
        name: "Mohammad Raja",
        gamertag: "Scout",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi1.png?updatedAt=1753125932480",
        role: "IGL",
      },
      {
        name: "Manpreet Singh ",
        gamertag: "Hunter",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi2.png?updatedAt=1753125932551",
        role: "Fragger",
      },
      {
        name: "Nakul Sharma",
        gamertag: "Medic1",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi3.png?updatedAt=1753125932668",
        role: "Support",
      },
      {
        name: "Saumay Anand",
        gamertag: "Sniper1",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi4.png?updatedAt=1753125932049",
        role: "Long Range",
      },
      {
        name: "Shubham Chawla",
        gamertag: "Medic2",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi5.png?updatedAt=1753125932483",
        role: "Support",
      },
      {
        name: "Rahul",
        gamertag: "Sniper2",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi6.png?updatedAt=1753125932461",
        role: "Long Range",
      },
      {
        name: "Siddhant Joshi",
        gamertag: "Medic3",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi7.png?updatedAt=1753125932446",
        role: "Support",
      },
      {
        name: "Mahammed Kafi Khan",
        gamertag: "Sniper3",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/bgmi8.png?updatedAt=1753125932438",
        role: "Long Range",
      },
    ],

    POKEMON_UNITE: [
      {
        name: "Manmohan Singh",
        gamertag: "Pikachu",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/pokemon1.png?updatedAt=1753125941218",
        role: "Attacker",
      },
      {
        name: "Deep Patel",
        gamertag: "Lucario",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/pokemon2.png?updatedAt=1753125941525",
        role: "All-Rounder",
      },
      {
        name: "Rudra Narayan Nayak",
        gamertag: "Eldegoss1",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/pokemon3.png?updatedAt=1753125941703",
        role: "Supporter",
      },
      {
        name: "Rahul Lavhate",
        gamertag: "Eldegoss2",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/pokemon4.png?updatedAt=1753125941981",
        role: "Supporter",
      },
      {
        name: "Adnan Badshah",
        gamertag: "Eldegoss3",
        image:
          "https://ik.imagekit.io/Prahlad2002/S8UL/pokemon5.png?updatedAt=1753125942233",
        role: "Supporter",
      },
    ],
  };

  return (
    <section
      id="players"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-s8ul-dark text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-s8ul-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-s8ul-green via-green-400 to-s8ul-green bg-clip-text text-transparent">
              Champions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-s8ul-green to-transparent mx-auto mb-6" />
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Meet the championship-winning teams that dominate the esports scene
            across multiple games.
          </p>
        </div>

        {/* Enhanced Game Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={cn(
                "relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden border-2",
                activeGame === game.id
                  ? "bg-gradient-to-r from-s8ul-green to-green-500 text-white border-s8ul-green shadow-2xl shadow-s8ul-green/25"
                  : "bg-s8ul-dark-lighter text-gray-300 border-s8ul-gray/30 hover:border-s8ul-green/50 hover:text-white",
              )}
            >
              <span className="relative z-10">{game.name}</span>
              {activeGame === game.id && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${game.color} opacity-20`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {players[activeGame]?.map((player, index) => (
            <div
              key={player.gamertag}
              className="group relative bg-gradient-to-br from-s8ul-dark-lighter to-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-s8ul-gray/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Player Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-s8ul-green/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gamertag Display */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="transform -rotate-90 origin-bottom-left absolute -left-2 -bottom-2"></div>
                </div>
              </div>

              {/* Player Info */}
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-bold text-white group-hover:text-s8ul-green transition-colors duration-300">
                  {player.name}
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-s8ul-green font-semibold">
                    {activeGame} Player
                  </p>
                  <div className="w-2 h-2 bg-s8ul-green rounded-full animate-pulse" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-s8ul-green/0 group-hover:border-s8ul-green/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Enhanced Team Stats */}
        <Countup />
      </div>
    </section>
  );
}
