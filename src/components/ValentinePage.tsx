import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Sparkles } from "lucide-react";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  // Move the No button randomly so it can't be clicked
  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-red-400 to-rose-600 flex items-center justify-center overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white opacity-70"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              scale: Math.random() * 1.5 + 0.5,
            }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Heart fill="white" />
          </motion.div>
        ))}
      </div>

      {/* Main card */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center max-w-lg w-full relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-4"
        >
          <Heart className="text-white" size={60} fill="white" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Will You Marry Me My Runchiii (💖)?
        </h1>

        <p className="text-white/90 mb-8 text-lg">
          You are my today, my tomorrow, and my forever. I promise to love you,
          support you, and stand by your side always. Will you be mine forever?
          💍❤️
        </p>

        <div className="flex gap-6 justify-center">
          {/* Yes Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setAccepted(true)}
            className="bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition"
          >
            Yes 💖
          </motion.button>

          {/* No Button (moves away) */}
          <motion.button
            animate={{ x: noPosition.x, y: noPosition.y }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="bg-gray-200 text-gray-600 font-bold px-8 py-3 rounded-full shadow-lg cursor-not-allowed"
          >
            No 😢
          </motion.button>
        </div>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {accepted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl p-10 text-center max-w-md"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex justify-center gap-4 mb-4"
              >
                <Gift className="text-pink-500" size={40} />
                <Heart className="text-red-500" size={40} fill="currentColor" />
                <Sparkles className="text-yellow-500" size={40} />
              </motion.div>

              <h2 className="text-3xl font-bold text-pink-600 mb-4">
                Yay!!! 💖
              </h2>

              <p className="text-gray-700 mb-6">
                You just made me the happiest human alive! Here’s what’s in
                store for us:
                <br />
                💝 Unlimited cuddles and love
                <br />
                🌹 Spontaneous romantic adventures
                <br />
                🍫 Chocolate, treats, and sweet surprises
                <br />
                💍 Forever partner-in-crime
                <br />
                🎉 Endless laughter (and silly dance-offs)
              </p>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-pink-500 font-bold text-xl"
              >
                I Love You Xuchu  ❤️
              </motion.div>

              <button
                onClick={() => setAccepted(false)}
                className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
