"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

  const stories = [
    {
      title: "EPS 1: Awal Bertemu",
      year: "Episode 1",
      image: "/images/story1.JPEG",
      description:
        "Kisah kami dimulai dari sebuah pertemuan yang sederhana namun berkesan.",
    },
    {
      title: "EPS 2: Mulai Dekat",
      year: "Episode 2",
      image: "/images/story2.jpeg",
      description:
        "Seiring berjalannya waktu, kami semakin mengenal dan memahami satu sama lain.",
    },
    {
      title: "EPS 3: Lamaran",
      year: "Episode 3",
      image: "/images/story3.JPG",
      description:
        "Dengan penuh keyakinan dan cinta, kami memutuskan melangkah ke jenjang yang lebih serius.",
    },
    {
      title: "EPS 4: Menikah",
      year: "Episode 4",
      image: "/images/story4.JPG",
      description:
        "Perjalanan kami bermuara pada hari bahagia yang akan kami rayakan bersama keluarga tercinta.❤️",
    },
  ];

export default function LoveStory() {

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const [selectedStory, setSelectedStory] =
    useState<(typeof stories)[0] | null>(
      null
    );

  const nextStory = useCallback(() => {
    if (selectedIndex === null) return;

    const next =
      (selectedIndex + 1) %
      stories.length;

    setSelectedIndex(next);
    setSelectedStory(stories[next]);
  }, [selectedIndex]);

  const prevStory = useCallback(() => {
    if (selectedIndex === null) return;

    const prev =
      selectedIndex === 0
        ? stories.length - 1
        : selectedIndex - 1;

    setSelectedIndex(prev);
    setSelectedStory(stories[prev]);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (!selectedStory) return;

      if (event.key === "Escape") {
        setSelectedStory(null);
      }

      if (event.key === "ArrowRight") {
        nextStory();
      }

      if (event.key === "ArrowLeft") {
        prevStory();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedStory,
    selectedIndex,
    nextStory,
    prevStory,
  ]);

  return (
    <>
      <section
        id="love-story"
        className="py-24 px-6 overflow-hidden"
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-black">
            Love Story
          </h2>

          <p className="text-gray-400 mt-4">
            Perjalanan singkat menuju hari bahagia ❤️
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative max-w-6xl mx-auto">

          <div
            className="
              hidden md:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-red-600/30
              -translate-x-1/2
            "
          />

          <div className="space-y-16">

            {stories.map((story, index) => {
              const isLeft =
                index % 2 === 0;

              return (
                <motion.div
                  key={story.title}
                  initial={{
                    opacity: 0,
                    x: isLeft
                      ? -40
                      : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className={`
                    relative
                    flex
                    items-center
                    ${
                      isLeft
                        ? "md:justify-start"
                        : "md:justify-end"
                    }
                  `}
                >

                  <div
                    className="
                      hidden md:block
                      absolute
                      left-1/2
                      w-5
                      h-5
                      bg-red-600
                      rounded-full
                      -translate-x-1/2
                      shadow-[0_0_20px_rgba(220,38,38,0.8)]
                    "
                  />

                  <div
                    onClick={() => {
                      setSelectedStory(story);
                      setSelectedIndex(index);
                    }}
                    className="
                      w-full
                      md:w-[45%]
                      bg-[#141414]
                      border
                      border-red-900/30
                      rounded-3xl
                      overflow-hidden
                      hover:border-red-600
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >

                    <div className="relative h-72 overflow-hidden">

                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-110
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      <div className="absolute bottom-4 left-4">

                        <span
                          className="
                            bg-red-600
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-bold
                          "
                        >
                          {story.year}
                        </span>

                      </div>

                    </div>

                    <div className="p-8">

                      <h3 className="text-2xl font-bold mb-4">
                        {story.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {story.description}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Modal */}

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedStory(null)
            }
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
          >

            <button
              onClick={() =>
                setSelectedStory(null)
              }
              className="
                absolute
                top-5
                right-5
                z-50
                bg-white/10
                hover:bg-white/20
                rounded-full
                p-3
                transition
              "
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevStory();
              }}
              className="
                absolute
                left-3
                md:left-8
                top-1/2
                -translate-y-1/2
                z-50
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white/10
                backdrop-blur-xl
                hover:bg-white/20
              "
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStory();
              }}
              className="
                absolute
                right-3
                md:right-8
                top-1/2
                -translate-y-1/2
                z-50
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white/10
                backdrop-blur-xl
                hover:bg-white/20
              "
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                w-full
                max-w-5xl
              "
            >

              <div
                className="
                  relative
                  w-full
                  h-[65vh]
                  md:h-[75vh]
                  rounded-3xl
                  overflow-hidden
                "
              >

                <Image
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  fill
                  priority
                  sizes="100vw"
                  className="
                    object-contain
                    bg-black
                  "
                />

              </div>

              <div className="text-center mt-6">

                <span
                  className="
                    bg-red-600
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                  "
                >
                  {selectedStory.year}
                </span>

                <h3
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    mt-5
                  "
                >
                  {selectedStory.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    mt-4
                    max-w-2xl
                    mx-auto
                  "
                >
                  {selectedStory.description}
                </p>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}