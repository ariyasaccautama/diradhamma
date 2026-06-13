"use client";

import { useEffect, useState } from "react";

import {
  House,
  HeartIcon,
  Image,
  CalendarDays,
  Gift,
} from "lucide-react";

const sections = [
  {
    id: "hero",
    icon: House,
  },
  {
    id: "Couple",
    icon: HeartIcon,
  },
  {
    id: "event",
    icon: CalendarDays,
  },
  {
    id: "PhotoCollection",
    icon: Image,
  },
  {
    id: "gift",
    icon: Gift,
  },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] =
    useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter =
        window.innerHeight / 2;

      let currentSection = "hero";
      let closestDistance =
        Number.MAX_VALUE;

      sections.forEach((section) => {
        const element =
          document.getElementById(
            section.id
          );

        if (!element) return;

        const rect =
          element.getBoundingClientRect();

        const sectionCenter =
          rect.top +
          rect.height / 2;

        const distance =
          Math.abs(
            viewportCenter -
              sectionCenter
          );

        if (
          distance <
          closestDistance
        ) {
          closestDistance =
            distance;

          currentSection =
            section.id;
        }
      });

      setActiveSection(
        currentSection
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const scrollTo = (
    id: string
  ) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        z-[9998]

        flex
        items-center
        gap-5

        px-6
        py-3

        rounded-full

        bg-white/10
        backdrop-blur-xl

        border
        border-white/10

        shadow-xl
      "
    >
      {sections.map(
        ({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() =>
              scrollTo(id)
            }
            className={`
              transition-all
              duration-300

              ${
                activeSection ===
                id
                  ? `
                    text-red-600
                    scale-125
                    drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]
                  `
                  : `
                    text-white/70
                    hover:text-white
                    hover:scale-110
                  `
              }
            `}
          >
            <Icon size={22} />
          </button>
        )
      )}
    </div>
  );
}