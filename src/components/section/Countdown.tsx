"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import { weddingData } from "../../data/wedding";

const WEDDING_DATE = new Date(
  weddingData.event.countdownDate
);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownCardProps = {
  value: number;
  label: string;
  animate?: boolean;
};

function CountdownCard({
  value,
  label,
  animate = false,
}: CountdownCardProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-red-900/30
        bg-gradient-to-b
        from-zinc-900
        via-black
        to-black
        p-8
        shadow-[0_0_40px_rgba(229,9,20,0.15)]
        transition-all
        duration-300
        hover:border-red-600
        hover:-translate-y-1
      "
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-red-600" />

      <div
        className={`
          text-5xl
          md:text-7xl
          font-black
          text-white
          ${animate ? "animate-pulse" : ""}
        `}
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        className="
          mt-4
          uppercase
          tracking-[0.3em]
          text-red-500
          text-xs
          md:text-sm
        "
      >
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const [isWeddingDay, setIsWeddingDay] =
    useState(false);

  const [windowSize, setWindowSize] =
    useState({
      width: 0,
      height: 0,
    });

  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();

      const distance =
        WEDDING_DATE.getTime() - now;

      if (distance <= 0) {
        setIsWeddingDay(true);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <>
      {isWeddingDay && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={300}
        />
      )}

      <section className="relative overflow-hidden py-28 px-6 text-center">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[160px]" />

          <div className="absolute right-0 top-40 h-[300px] w-[300px] bg-red-700/10 blur-[120px]" />

          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-red-700/10 blur-[120px]" />

        </div>

        <div className="relative z-10">

          {!isWeddingDay && (
            <div className="mb-14">
              
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                tracking-[0.15em]
                text-white
              "
            >
              COUNT ON
            </h2>

            <h3
              className="
                mt-3
                text-5xl
                md:text-7xl
                font-black
                tracking-wide
                text-red-600
              "
            >
              SPECIAL DAYS
            </h3>

            <div
              className="
                inline-block
                mt-6
                bg-red-600
                px-6
                py-3
                rounded-full
                font-bold
              "
            >
              Sabtu, 8 Agustus 2026
            </div>

          </div>
          )}

          {isWeddingDay ? (
            <div className="space-y-6">

              <div className="mx-auto h-1 w-40 rounded-full bg-red-600" />

              <>
              <div
                className="
                  inline-block
                  bg-red-600
                  px-6
                  py-3
                  rounded-full
                  font-bold
                  mb-6
                "
              >
                NOW STREAMING
              </div>

              <h2
                className="
                  text-6xl
                  md:text-8xl
                  font-black
                  tracking-wider
                  text-red-600
                "
              >
                IT&apos;S TIME
              </h2>
            </>

              <p className="text-xl md:text-2xl text-zinc-300">
                Hari yang telah dinantikan akhirnya tiba ❤️
              </p>

              <div className="mt-8 text-white">

                <h3 className="text-2xl md:text-4xl font-bold">
                  Prasetya Dhamma Permana Putra
                </h3>

                <p className="my-3 text-red-500 text-3xl">
                  &
                </p>

                <h3 className="text-2xl md:text-4xl font-bold">
                  Prisilia Indira Oktavia
                </h3>

              </div>

            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">

              <CountdownCard
                value={timeLeft.days}
                label="Hari"
              />

              <CountdownCard
                value={timeLeft.hours}
                label="Jam"
              />

              <CountdownCard
                value={timeLeft.minutes}
                label="Menit"
              />

              <CountdownCard
                value={timeLeft.seconds}
                label="Detik"
                animate
              />

            </div>
          )}

        </div>

      </section>
    </>
  );
}