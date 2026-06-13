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

import { weddingData } from "../../data/wedding";

type Photo = {
  title: string;
  image: string;
  badge: string;
};

export default function PhotoCollection() {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const [selectedPhoto, setSelectedPhoto] =
    useState<Photo | null>(null);

  const nextPhoto = useCallback(() => {
    if (selectedIndex === null) return;

    const next =
      (selectedIndex + 1) %
      weddingData.favoriteMoments.length;

    setSelectedIndex(next);

    setSelectedPhoto(
      weddingData.favoriteMoments[next]
    );
  }, [selectedIndex]);

  const prevPhoto = useCallback(() => {
    if (selectedIndex === null) return;

    const prev =
      selectedIndex === 0
        ? weddingData.favoriteMoments.length - 1
        : selectedIndex - 1;

    setSelectedIndex(prev);

    setSelectedPhoto(
      weddingData.favoriteMoments[prev]
    );
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (!selectedPhoto) return;

      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }

      if (event.key === "ArrowLeft") {
        prevPhoto();
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
      selectedPhoto,
      selectedIndex,
      nextPhoto,
      prevPhoto,
    ]);

  return (
    <>
      <section id="PhotoCollection" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

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
            className="text-center mb-14"
          >
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

            <h2 className="text-4xl md:text-5xl font-black">
              Top 6 Moment Favorit
            </h2>

            <p className="text-gray-400 mt-4">
              Saksikan di hari bahagia kami!
            </p>
          </motion.div>

          {/* Gallery */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {weddingData.favoriteMoments.map(
              (photo, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay:
                      index * 0.1,
                  }}
                  onClick={() => {
                    setSelectedPhoto(photo);
                    setSelectedIndex(index);
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    cursor-pointer
                  "
                >
                  {/* Badge */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      z-20
                      bg-red-600
                      text-white
                      text-xs
                      font-bold
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    {photo.badge}
                  </div>

                  {/* Image */}

                  <div className="relative aspect-[2/3]">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/30
                      to-transparent
                    "
                  />

                  {/* Hover Border */}

                  <div
                    className="
                      absolute
                      inset-0
                      border-2
                      border-transparent
                      group-hover:border-red-600
                      rounded-3xl
                      transition
                      duration-300
                    "
                  />

                  {/* Title */}

                  <div className="absolute bottom-4 left-4 z-20">
                    <h3
                      className="
                        text-lg
                        md:text-xl
                        font-bold
                      "
                    >
                      {photo.title}
                    </h3>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selectedPhoto && (
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
              setSelectedPhoto(null)
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
            {/* Close */}

            <button
              onClick={() =>
                setSelectedPhoto(null)
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

            {/* Prev */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
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
                transition
              "
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
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
                transition
              "
            >
              <ChevronRight size={28} />
            </button>

            {/* Content */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                w-full
                max-w-6xl
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
                  src={
                    selectedPhoto.image
                  }
                  alt={
                    selectedPhoto.title
                  }
                  fill
                  priority
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
                  {selectedPhoto.badge}
                </span>

                <h3
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    mt-5
                  "
                >
                  {selectedPhoto.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}