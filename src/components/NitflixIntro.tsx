"use client";

import { motion } from "framer-motion";

const bars = [
  "#E50914",
  "#F40612",
  "#B81D24",
  "#F5A623",
  "#FF5F6D",
  "#C13584",
  "#6A11CB",
  "#2575FC",
];

export default function NitflixIntro() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[99999] overflow-hidden flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Vertical Light Bars */}
      <div className="absolute inset-0 flex justify-center items-center">
        {bars.map((color, index) => (
          <motion.div
            key={index}
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            animate={{
              scaleY: [0, 1, 1.2, 1],
              opacity: [0, 1, 1, 0],
              x: [
                0,
                0,
                (index - 4) * 60,
                (index - 4) * 120,
              ],
            }}
            transition={{
              duration: 2.4,
              delay: index * 0.08,
              ease: "easeInOut",
            }}
            style={{
              background: color,
              width: "18px",
              height: "100vh",
              boxShadow: `0 0 40px ${color}`,
            }}
          />
        ))}
      </div>

      {/* Central N */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1, 1.1, 1.2],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative z-10"
      >
        <h1
          className="font-black text-red-600"
          style={{
            fontSize: "clamp(6rem, 18vw, 16rem)",
            textShadow:
              "0 0 20px #E50914, 0 0 50px #E50914",
          }}
        >
          N
        </h1>
      </motion.div>

      {/* Final Black Fade */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0, 0, 1],
        }}
        transition={{
          duration: 3,
        }}
      />
    </motion.div>
  );
}