import { motion } from "framer-motion";
import imageData from "../assets/galleryImages.json";
import TrueFocus from "./ui-comp/TrueFocus";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};
const Gallery = () => {
  const visibleImages = imageData.slice(0, 6);
  const scrollableImages = imageData.slice(6);

  return (
    <div
      id="gallery"
      className="relative min-h-screen bg-black text-white px-4 py-12 md:px-16 overflow-hidden"
    >
      {/* 🔵 Animated Blobs Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          style={{ bottom: "10%", right: "5%" }}
        />
      </motion.div>

      {/* 🎯 Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10 z-10 relative"
      >
        <TrueFocus
          sentence="S8UL Gallery"
          manualMode={false}
          blurAmount={5}
          borderColor="#14FFEC"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />

        {/* <motion.h2
          whileHover={{ scale: 1.05, color: "#14FFEC" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl md:text-5xl font-extrabold text-s8ul-green transition-all duration-300 hover:drop-shadow-[0_4px_10px_rgba(20,255,236,0.4)]"
        >
          S8UL Gallery
        </motion.h2> */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-400 italic mt-2 transition duration-300 "
        >
          Where passion meets pixels — witness the legacy of S8UL unfold.
        </motion.p>
      </motion.div>

      {/* 🔳 Grid (First 6 Images) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {visibleImages.map((img, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="overflow-hidden rounded-xl relative group shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={img.image}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:brightness-75"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 📜 Scrollable Row */}
      {scrollableImages.length > 0 && (
        <div className="mt-12 z-10 relative">
          <h3 className="text-3xl font-bold mb-6 text-s8ul-green tracking-wide relative inline-block after:block after:h-[3px] after:w-full after:bg-s8ul-green after:mt-1">
            More Images
          </h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 pb-4">
            {scrollableImages.map((img, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-64 rounded-xl overflow-hidden relative group flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={img.image}
                  alt={`scroll-img-${index}`}
                  className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
