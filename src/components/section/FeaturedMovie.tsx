"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { weddingData } from "../../data/wedding";

export default function FeaturedMovie() {
  const isWeddingDay =
    new Date() >=
    new Date(
      weddingData.event.countdownDate
    );

  return (
    <section className="py-24 px-6 overflow-hidden">
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
          max-w-7xl
          mx-auto
        "
      >
        {/* Glow */}

        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/10 blur-3xl rounded-full" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-600/10 blur-3xl rounded-full" />

        <div
          className="
            relative
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* Poster */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                inset-0
                bg-red-600/20
                blur-3xl
                rounded-3xl
              "
            />

            <Image
              src={weddingData.movie.image}
              alt={weddingData.movie.title}
              width={800}
              height={1200}
              className="
                relative
                w-full
                rounded-3xl
                object-cover
                shadow-2xl
                border
                border-red-900/30
              "
            />
          </motion.div>

          {/* Content */}

          <div>

            <p
              className="
                text-red-500
                tracking-[5px]
                uppercase
                font-semibold
                mb-4
              "
            >
              Nitflix Original
            </p>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
                mb-6
              "
            >
              {weddingData.movie.title}
            </h2>

            {/* Stats */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                items-center
                mb-6
              "
            >
              <span className="text-green-400 font-bold">
                100% Match
              </span>

              <span
                className="
                  bg-white
                  text-black
                  px-3
                  py-1
                  rounded
                  text-sm
                  font-bold
                "
              >
                SU
              </span>

              <span className="text-gray-300">
                2026
              </span>

              <span className="text-gray-300">
                ∞ Lifetime
              </span>
            </div>

            {/* Release */}

            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                inline-block
                bg-red-600
                text-white
                px-6
                py-3
                rounded-full
                font-bold
                mb-8
                shadow-lg
              "
            >
              {isWeddingDay
                ? "🎬 Now Streaming"
                : weddingData.movie.releaseDate}
            </motion.div>

            {/* Description */}

            {/* <p
              className="
                text-gray-300
                text-lg
                leading-relaxed
                mb-10
              "
            >
              {weddingData.movie.description}
            </p> */}

            {/* Quote */}

            <div
              className="
                border-l-4
                border-red-600
                pl-6
              "
            >
              <p
                className="
                  italic
                  text-gray-400
                  text-lg
                  leading-relaxed
                "
              >
                {weddingData.movie.description}
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}