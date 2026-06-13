"use client";

import { motion } from "framer-motion";

import { weddingData } from "../../data/wedding";
import FadeIn from "../FadeIn";
import CinematicReveal from "../CinematicReveal";

// const downloadCalendar = (
//   title: string,
//   location: string,
//   startDate: string,
//   endDate: string,
//   description: string
// ) => {
//   const icsContent = `BEGIN:VCALENDAR
// VERSION:2.0
// BEGIN:VEVENT
// SUMMARY:${title}
// DESCRIPTION:${description}
// LOCATION:${location}
// DTSTART:${startDate}
// DTEND:${endDate}
// END:VEVENT
// END:VCALENDAR`;

//   const blob = new Blob(
//     [icsContent],
//     {
//       type: "text/calendar",
//     }
//   );

//   const url =
//     URL.createObjectURL(blob);

//   const link =
//     document.createElement("a");

//   link.href = url;
//   link.download =
//     "Wedding-Dhamma-Dira.ics";

//   document.body.appendChild(link);

//   link.click();

//   document.body.removeChild(link);

//   URL.revokeObjectURL(url);
// };

export default function Event() {
  return (
    <FadeIn>
      <CinematicReveal>
        <section
          id="event"
          className="py-24 px-6 overflow-hidden"
        >
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-4xl font-bold text-center mb-12"
          >
            Lokasi & Jadwal Acara
          </motion.h2>

          <div className="grid md:grid-cols-1 gap-8 w-full max-w-5xl mx-auto">

            {/* RESEPSI */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
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
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.015,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                min-h-[560px]
                border
                border-red-900/30
                hover:border-red-600
                transition
                duration-300
              "
            >
              <img
                src="/images/resepsi.png"
                alt="Resepsi"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/70
                  to-black/20
                "
              />

              <div className="relative z-10 p-8 h-full flex flex-col justify-end">

                <p className="text-red-500 font-semibold mb-2 tracking-widest">
                  RESEPSI
                </p>

                <h3 className="text-3xl font-black mb-6">
                  {weddingData.event.reception.location.venue}
                </h3>

                <div className="flex items-center gap-4 mb-5">

                  <div
                    className="
                      bg-red-600
                      rounded-2xl
                      overflow-hidden
                      text-center
                      w-24
                      shadow-xl
                    "
                  >
                    <div className="bg-red-700 py-2 text-sm font-bold">
                      AUG
                    </div>

                    <div className="py-4">
                      <div className="text-4xl font-black">
                        08
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold">
                      Sabtu
                    </p>

                    <p className="text-gray-300">
                      8 Agustus 2026
                    </p>

                    <div
                      className="
                        inline-block
                        mt-2
                        bg-white/10
                        backdrop-blur
                        px-4
                        py-2
                        rounded-lg
                        font-semibold
                      "
                    >
                      🕐 {weddingData.event.reception.time}
                    </div>
                  </div>

                </div>

                <p className="text-gray-400 mb-6">
                  {weddingData.event.reception.location.address}
                </p>

                <div className="flex gap-3 mt-4">

                <a
                  href={weddingData.event.reception.location.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-white/25
                    backdrop-blur
                    border
                    border-white/10
                    hover:bg-white/20
                    hover:border-red-500/40
                    py-4
                    rounded-xl
                    font-bold
                    transition-all
                    duration-300
                  "
                >
                  📍 Maps
                </a>

                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                    "Resepsi Dhamma & Dira"
                  )}&dates=20260808T120000Z/20260808T140000Z&details=${encodeURIComponent(
                    "Resepsi Pernikahan Dhamma & Dira"
                  )}&location=${encodeURIComponent(
                    "Omah Kebon Bekasi"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-white/25
                    backdrop-blur
                    border
                    border-white/10
                    hover:bg-white/20
                    hover:border-red-500/40
                    py-4
                    rounded-xl
                    font-bold
                    transition-all
                    duration-300
                  "
                >
                  📅 Kalender
                </a>

              </div>

              </div>

            </motion.div>

          </div>
        </section>
      </CinematicReveal>
    </FadeIn>
  );
}