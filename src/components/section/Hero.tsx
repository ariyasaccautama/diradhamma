"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { weddingData } from "../../data/wedding";

export default function Hero() {
  const [currentBg, setCurrentBg] =
    useState(1);
    
useEffect(() => {
  for (let i = 1; i <= 8; i++) {
    const img = new Image();
    img.src = `/images/bgHero/Hero${i}.jpg`;
  }
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) =>
        prev >= 8 ? 1 : prev + 1
      );
    }, 3500);

    return () =>
      clearInterval(interval);
  }, []);

  const scrollToLoveStory = () => {
    document
      .getElementById("love-story")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToEvent = () => {
    document
      .getElementById("event")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const weddingDate = new Date(
    weddingData.event.countdownDate
  );

  const isWeddingDay =
    new Date() >= weddingDate;

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
      "
    >
      {/* Animated Background */}

      <AnimatePresence mode="wait">

        <motion.div
          key={currentBg}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/bgHero/Hero${currentBg}.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

      </AnimatePresence>

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/60
          to-black/40
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          min-h-[100svh]
          flex
          items-center
        "
      >
        <div
          className="
            w-full
            max-w-6xl
            px-8
            md:px-20
          "
        >

          <p
            className="
              text-red-600
              font-bold
              tracking-[5px]
              mb-4
              text-sm
            "
          >
            NITFLIX ORIGINAL
          </p>

          <p className="uppercase text-gray-300 mb-2">
            The Wedding Of
          </p>

          <div className="leading-none">

            <div className="text-3xl md:text-5xl font-bold">
              Prasetya
            </div>

            <div
              className="
                text-6xl
                md:text-8xl
                font-black
                text-white
                tracking-tight
                drop-shadow-2xl
              "
            >
              DHAMMA
            </div>

            <div className="text-3xl md:text-5xl font-bold">
              Permana Putra
            </div>

          </div>

          <div
            className="
              text-3xl
              md:text-5xl
              font-black
              text-red-600
              my-4
            "
          >
            &
          </div>

          <div className="leading-none mt-4">

            <div className="text-3xl md:text-5xl font-bold">
              Prisilia
            </div>

            <div
              className="
                text-6xl
                md:text-8xl
                font-black
                text-white
                tracking-tight
                drop-shadow-2xl
              "
            >
              INDIRA
            </div>

            <div className="text-3xl md:text-5xl font-bold">
              Octavia
            </div>

          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              mt-6
            "
          >

            <span
              className={`
                px-6
                py-2
                rounded-full
                font-bold
                text-white
                ${
                  isWeddingDay
                    ? "bg-green-600"
                    : "bg-red-600"
                }
              `}
            >
              {isWeddingDay
                ? "Today!"
                : "Coming Soon"}
            </span>

            <span className="text-gray-300 text-base md:text-lg">
              • {weddingData.event.akad.date}
            </span>

          </div>

          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
          >

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #DIRAyakanDHAMMA
            </span>

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #TheBestforTheLast
            </span>

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #GetMarried
            </span>

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #DhammaDira
            </span>

          </div>

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
          >

            <button
              onClick={scrollToLoveStory}
              className="
                bg-white
                text-black
                px-6
                py-3
                rounded-md
                font-bold
                hover:scale-105
                transition
              "
            >
              ▶︎ Kisah Kami
            </button>

            <button
              onClick={scrollToEvent}
              className="
                bg-zinc-700/80
                backdrop-blur
                px-6
                py-3
                rounded-md
                font-bold
                hover:bg-zinc-600
                transition
              "
            >
              ⓘ Detail Acara
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}