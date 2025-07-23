import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";


const dummyProducts = [
  {
    id: 1,
    name: "S8UL Energy Drink",
    price: "$4.99",
    image: "https://via.placeholder.com/300x300?text=S8UL+Energy",
  },
  {
    id: 2,
    name: "Limited Edition Hoodie",
    price: "$39.99",
    image: "https://via.placeholder.com/300x300?text=Hoodie",
  },
  {
    id: 3,
    name: "Team Jersey",
    price: "$24.99",
    image: "https://via.placeholder.com/300x300?text=Jersey",
  },
  {
    id: 4,
    name: "Mousepad XL",
    price: "$14.99",
    image: "https://via.placeholder.com/300x300?text=Mousepad",
  },
];

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-s8ul-green mb-4"
      >
        Welcome to the S8UL Shop
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-gray-400 mb-10"
      >
        Grab your official S8UL gear & exclusive merch.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {dummyProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-s8ul-dark-lighter to-gray-800/60 rounded-xl p-4 hover:scale-105 transition-transform duration-300 border border-s8ul-gray/20 hover:border-s8ul-green/40 shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-s8ul-green">
              {product.name}
            </h3>
            <p className="text-gray-300 mb-3">{product.price}</p>
            <button className="w-full bg-s8ul-green hover:bg-green-500 text-black font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-all duration-300">
              <ShoppingBag size={16} /> Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-500 text-sm">
          ⭐ Every purchase supports S8UL's journey. Thanks for being part of the community!
        </p>
        <Star className="mx-auto mt-3 text-yellow-400 animate-pulse" />
      </motion.div>
    </section>
    </div>
  );
};

export default Shop;
