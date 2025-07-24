import React from 'react'

const AboutContent = () => {
  return (
  <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-s8ul-green font-bold text-lg mb-2 tracking-widest uppercase relative">
                  OUR STORY
                  <span className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-s8ul-green to-transparent" />
                </p>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                Leading the{" "}
                <span className="bg-gradient-to-r from-s8ul-green via-green-400 to-s8ul-green bg-clip-text text-transparent">
                  Gaming Revolution
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
                S8UL is a{" "}
                <span className="text-s8ul-green font-semibold">global powerhouse</span>{" "}
                in esports and gaming content, headquartered in Mumbai, India.
              </p>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-s8ul-green to-transparent" />
                <p className="text-gray-300 leading-relaxed pl-6 text-lg">
                  Combining championship-winning teams with world-class content creation, we are shaping the future of gaming 
                  on both national and international stages. Our <span className="text-s8ul-green font-semibold">BGMI and Pokémon Unite</span> rosters dominate the competition, while 
                  our recent expansion into <span className="text-s8ul-green font-semibold">Valorant</span> marks our growing presence in global esports.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-s8ul-green/50 to-transparent" />
                <p className="text-gray-300 leading-relaxed pl-6 text-lg">
                  Beyond esports, S8UL is a <span className="text-s8ul-green font-semibold">three-time winner</span> of the Esports Content Group of the Year at the Esports Awards, 
                  recognised for revolutionising gaming content. Our state-of-the-art <span className="text-s8ul-green font-semibold">S8UL Gaming House 2.0</span> is among the world's 
                  most advanced creator hubs, home to 25+ of India's top gaming creators.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-s8ul-green/30 to-transparent" />
                <p className="text-gray-300 leading-relaxed pl-6 text-lg">
                  We've collaborated with over <span className="text-s8ul-green font-semibold">250 global brands</span>, including IQOO, Monster Energy, Lenovo, Netflix, 
                  Krafton, Red Bull, and Gillette. As the first Indian esports org to win the <span className="text-s8ul-green font-semibold">MOBIES Global Impact Award</span>, we 
                  continue to lead the charge in gaming excellence.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button className="group relative px-8 py-4 border-2 border-s8ul-green  bg-gradient-to-br from-s8ul-green to-green-590 font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 group-hover:text-white  to-s8ul-green transition-colors duration-300">Explore More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
  )
}

export default AboutContent
