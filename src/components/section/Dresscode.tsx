"use client";

import { motion } from "framer-motion";

export default function Dresscode() {
  const colors = [
    {
      name: "Olive",
      hex: "#6F8F3D",
    },
    {
      name: "Sage",
      hex: "#A8C686",
    },
    {
      name: "Taupe",
      hex: "#8B6B4F",
    },
    {
      name: "Brown",
      hex: "#6E3321",
    },
    {
      name: "Beige",
      hex: "#E8C29D",
    },
  ];

  return (
    <section
      id="dresscode"
      className="py-24 px-6"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          overflow-hidden
          max-w-6xl
          mx-auto
          rounded-3xl
          p-8
          md:p-12
          border
          border-red-900/30
          bg-gradient-to-br
          from-[#141414]
          via-[#1a1a1a]
          to-[#111111]
        "
      >
        {/* Glow Background */}

        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/10 blur-3xl rounded-full" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-600/10 blur-3xl rounded-full" />

        <div className="relative z-10">

          <p className="tracking-[6px] text-gray-400 uppercase mb-6">
            Dresscode
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Earth Tone
          </h2>

          <p className="text-gray-400 max-w-3xl mb-10 leading-relaxed">
            Kami mengundang
            Bapak/Ibu/Saudara/i untuk
            mengenakan pakaian bernuansa
            Earth Tone agar suasana
            acara semakin hangat,
            harmonis, dan selaras
            dalam dokumentasi.
          </p>

          {/* Allowed Colors */}

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">

            {colors.map((color, index) => (
              <motion.div
                key={color.hex}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration:
                      2 +
                      index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.12,
                  }}
                  className="
                    w-16
                    h-16
                    md:w-20
                    md:h-20
                    rounded-full
                    border-2
                    border-white/10
                    shadow-xl
                  "
                  style={{
                    backgroundColor:
                      color.hex,
                    boxShadow: `0 0 25px ${color.hex}55`,
                  }}
                />

                <p className="mt-3 text-sm text-gray-300 font-medium">
                  {color.name}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </motion.div>
    </section>
  );
}