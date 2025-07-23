import { useState } from "react";
import CountUp from "react-countup";

const Countup = () => {
  const stats = [
    { value: 25, sign: "+", label: "Pro Players", icon: "👤" },
    { value: 250, sign: "+", label: "Brand Partners", icon: "🤝" },
    { value: 3, sign: "x", label: "Esports Awards", icon: "🏆" },
    { value: 1, sign: "", label: "MOBIES Global Impact", icon: "🌟" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [resetCount, setResetCount] = useState(0); // to trigger fresh count

  return (
    <div className="bg-gradient-to-r from-s8ul-dark-lighter/50 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-s8ul-gray/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer"
            onMouseEnter={() => {
              setActiveIndex(index);
              setResetCount((prev) => prev + 1); // force re-render
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-s8ul-green to-green-400 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
              {activeIndex === index ? (
                <CountUp
                  key={`counter-${index}-${resetCount}`} // force fresh animation
                  start={0}
                  end={stat.value}
                  Postfix={stat.sign}
                  duration={1}
                  separator=","
                />
              ) : (
                <>
                  {stat.value}
                  {stat.sign}
                </>
              )}
            </div>
            <div className="text-gray-300 font-medium text-lg">
              {stat.label}
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-s8ul-green to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countup;
