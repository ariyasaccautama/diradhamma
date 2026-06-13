"use client";

import { weddingData } from "../data/wedding";

type Props = {
  guestName: string;
  onOpen: () => void;
};

export default function Cover({
  guestName,
  onOpen,
}: Props) {
  return (
    <main
      className="
        relative
        h-screen
        overflow-hidden
        bg-black
        text-white
        flex
        flex-col
        items-center
        justify-center
        px-6
      "
    >
      {/* Glow Background */}

      {/* <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -top-48
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            bg-red-600/10
            blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            -bottom-48
            left-1/2
            -translate-x-1/2
            w-[400px]
            h-[400px]
            bg-red-600/5
            blur-[120px]
            rounded-full
          "
        />

      </div> */}

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center">

        <h1
          className="
            text-red-600
            text-5xl
            md:text-6xl
            font-black
            tracking-widest
            mb-6
            drop-shadow-[0_0_25px_rgba(229,9,20,0.35)]
          "
        >
          NITFLIX
        </h1>

        <p className="uppercase text-gray-400 mb-3 text-sm tracking-[4px]">
          The Wedding Of
        </p>

        <h2
          className="
            text-center
            text-2xl
            md:text-4xl
            font-bold
          "
        >
          {weddingData.groom.name}
        </h2>

        <h2
          className="
            text-center
            text-3xl
            md:text-4xl
            font-bold
            my-2
            text-red-500
          "
        >
          &
        </h2>

        <h2
          className="
            text-center
            text-2xl
            md:text-4xl
            font-bold
            mb-8
          "
        >
          {weddingData.bride.name}
        </h2>

        {/* Guest Card */}

        <div
          className="
            bg-white/[0.03]
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            px-8
            py-5
            mb-8
            min-w-[300px]
          "
        >
          <p className="text-gray-400 text-center text-sm">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>

          <h3
            className="
              text-xl
              md:text-2xl
              font-semibold
              mt-2
              text-center
            "
          >
            {guestName}
          </h3>
        </div>

        <button
          onClick={onOpen}
          className="
            bg-red-600
            hover:bg-red-700
            hover:scale-105
            px-8
            py-4
            rounded-xl
            font-bold
            transition-all
            duration-300
            shadow-[0_0_30px_rgba(229,9,20,0.4)]
          "
        >
          🎬 BUKA UNDANGAN
        </button>

        <p
          className="
            text-gray-500
            text-xs
            md:text-sm
            mt-6
            text-center
            max-w-md
          "
        >
          Mohon maaf apabila terdapat kesalahan
          penulisan nama maupun gelar.
        </p>

      </div>
    </main>
  );
}