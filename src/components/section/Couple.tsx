"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import { weddingData } from "../../data/wedding";

export default function Couple() {
  return (
    <section id="Couple" className="py-24 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center mb-16"
        >

          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-black">
            Mempelai
          </h2>

          <p className="text-gray-400 mt-4">
            Dengan penuh rasa syukur dan bahagia
          </p>

        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center">

          {/* Groom */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
              rotate: -4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
            }}
            className="
              bg-[#141414]
              border
              border-red-900/30
              rounded-3xl
              p-8
              text-center
              hover:border-red-600
              transition-all
              duration-300
            "
          >

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative w-48 h-48 mx-auto mb-8"
            >

              <div className="absolute inset-0 rounded-full bg-red-600/30 blur-3xl" />

              <Image
                src="/images/groom7.jpg"
                alt="Groom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  rounded-full
                  border-4
                  border-red-600
                  relative
                  shadow-[0_0_35px_rgba(220,38,38,0.4)]
                "
              />

            </motion.div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs mb-3">
              Groom
            </p>

            <h3 className="text-2xl md:text-3xl font-bold">
              {weddingData.groom.name}
            </h3>

            <p className="text-gray-400 mt-4 whitespace-pre-line leading-relaxed">
              {weddingData.groom.parent}
            </p>

            <a
              href={weddingData.groom.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              <FaInstagram />
              Instagram
            </a>

          </motion.div>

          {/* Heart */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -180,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
            }}
            className="flex justify-center"
          >

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                text-5xl
                md:text-7xl
                text-red-600
                select-none
                drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]
              "
            >
              ❤️
            </motion.div>

          </motion.div>

          {/* Bride */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotate: 4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
            }}
            className="
              bg-[#141414]
              border
              border-red-900/30
              rounded-3xl
              p-8
              text-center
              hover:border-red-600
              transition-all
              duration-300
            "
          >

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative w-48 h-48 mx-auto mb-8"
            >

              <div className="absolute inset-0 rounded-full bg-red-600/30 blur-3xl" />

              <Image
                src="/images/bride6.jpg"
                alt="Bride"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  rounded-full
                  border-4
                  border-red-600
                  relative
                  shadow-[0_0_35px_rgba(220,38,38,0.4)]
                "
              />

            </motion.div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs mb-3">
              Bride
            </p>

            <h3 className="text-2xl md:text-3xl font-bold">
              {weddingData.bride.name}
            </h3>

            <p className="text-gray-400 mt-4 whitespace-pre-line leading-relaxed">
              {weddingData.bride.parent}
            </p>

            <a
              href={weddingData.bride.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              <FaInstagram />
              Instagram
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}