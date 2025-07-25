// import { useEffect, useState } from "react";

// export default function SiteLoader({ onComplete }) {
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         if (progress >= 100) {
//         const timer = setTimeout(onComplete, 500); // short delay before transition
//         return () => clearTimeout(timer);
//         }

//         const interval = setInterval(() => {
//         setProgress((prev) => Math.min(prev + 10, 100));
//         }, 100);

//         return () => clearInterval(interval);
//     }, [progress, onComplete]);

//     return (
//         <div className="h-screen w-screen bg-black flex flex-col justify-center items-center text-white text-2xl font-semibold">

//             <p>{progress}%</p>
//         </div>
//     );
// }
import { useEffect, useState } from "react";

export default function SiteLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 500); 
      }, 100); 
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev +1.4, 100)); 
    }, 50); 

    return () => clearInterval(interval);
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-100 pointer-events-none" : ""
      } bg-black`}
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/Prahlad2002/S8UL/maxresdefault.jpg?updatedAt=1753345754700')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
          opacity: `${fadeOut ? 2: Math.min(progress / 100, 5)}`,

      }}
    >
      <div className="backdrop-blur-sm w-full h-full absolute inset-0 bg-black/50 z-0" />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-s8ul-green-light text-6xl font-bold tracking-wider drop-shadow-[0_0_20px_#00ff88] animate-subtle-glow">
          {Math.round(progress)}%
        </h1>

        <div className="w-full max-w-md h-3 mt-6 bg-gray-800 rounded-full overflow-hidden border border-[#00ff8855] shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-[1200ms] ease-in-out animate-gradient-x"
            style={{
              width: `${progress}%`,
              backgroundImage:
                "linear-gradient(90deg, #00ff88, #00cc66, #006644)",
              boxShadow: "0 0 15px #00ff8855",
            }}
          />
        </div>
      </div>
    </div>
  );
}
