"use client";

import Image from "next/image";
import { useState } from "react";

import { weddingData } from "../../data/wedding";

import {
  Copy,
  Gift as GiftIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import toast from "react-hot-toast";

export default function Gift() {
  const [opened, setOpened] =
    useState(false);

  const copyToClipboard = (
    text: string,
    label: string
  ) => {
    navigator.clipboard.writeText(text);

    if (label === "Alamat") {
      toast.success(
        "Alamat berhasil disalin 📍"
      );
    } else {
      toast.success(
        `Nomor rekening ${label} disalin 💳`
      );
    }
  };

  return (
    <section id="gift" className="py-24 px-6">

      <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

      <h2 className="text-4xl font-bold text-center mb-3">
        Wedding Gift
      </h2>

      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Kehadiran dan doa Anda adalah hadiah terbaik.
        Namun jika berkenan berbagi kebahagiaan,
        Anda dapat mengirimkan hadiah melalui:
      </p>

      {/* TOGGLE BUTTON */}

      <div className="flex justify-center mb-8">

        <button
          onClick={() =>
            setOpened(!opened)
          }
          className="
            flex
            items-center
            gap-3
            bg-red-600
            hover:bg-red-700
            px-8
            py-4
            rounded-2xl
            font-bold
            transition-all
            duration-300
            shadow-lg
          "
        >
          🎁 Klik di sini

          {opened ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

      </div>

      <AnimatePresence>

        {opened && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="overflow-hidden"
          >

            {/* REKENING */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

              {/* MANDIRI */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  text-white
                  border
                  border-yellow-500/20
                  bg-gradient-to-br
                  from-slate-900
                  via-blue-950
                  to-slate-950
                "
              >

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-white/65
                    backdrop-blur-md
                    px-2.5
                    py-1.5
                    rounded-lg
                    shadow-lg
                  "
                >
                  <Image
                    src="/images/bank-mandiri.png"
                    alt="Mandiri"
                    width={100}
                    height={30}
                    className="h-7 md:h-8 w-auto"
                  />
                </div>

                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  Bank Account
                </p>

                <h3 className="text-3xl font-black mt-4">
                  {weddingData.gift.groom.bank}
                </h3>

                <p className="text-[38px] md:text-2xl font-black text-yellow-400 mt-5 tracking-wide break-all">
                  {weddingData.gift.groom.account}
                </p>

                <p className="text-gray-300 mt-4 text-sm md:text-lg">
                  {weddingData.gift.groom.holder}
                </p>

                <button
                  onClick={() =>
                    copyToClipboard(
                      weddingData.gift.groom.account,
                      weddingData.gift.groom.bank
                    )
                  }
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    bg-white
                    text-black
                    hover:bg-gray-200
                    px-6
                    py-4
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  <Copy size={18} />
                  Salin Rekening
                </button>

              </div>

              {/* BCA */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  text-white
                  border
                  border-blue-500/20
                  bg-gradient-to-br
                  from-blue-950
                  via-blue-800
                  to-slate-950
                "
              >

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-white/65
                    backdrop-blur-md
                    px-2.5
                    py-1.5
                    rounded-lg
                    shadow-lg
                  "
                >
                  <Image
                    src="/images/bank-bca.png"
                    alt="BCA"
                    width={100}
                    height={30}
                    className="h-7 md:h-8 w-auto"
                  />
                </div>

                <p className="text-sm text-blue-200 uppercase tracking-widest">
                  Bank Account
                </p>

                <h3 className="text-3xl font-black mt-4">
                  {weddingData.gift.bride.bank}
                </h3>

                <p className="text-[38px] md:text-2xl font-black mt-5 tracking-wide break-all">
                  {weddingData.gift.bride.account}
                </p>

                <p className="text-blue-100 mt-4 text-sm md:text-lg">
                  {weddingData.gift.bride.holder}
                </p>

                <button
                  onClick={() =>
                    copyToClipboard(
                      weddingData.gift.bride.account,
                      weddingData.gift.bride.bank
                    )
                  }
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    bg-white
                    text-black
                    hover:bg-gray-200
                    px-6
                    py-4
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  <Copy size={18} />
                  Salin Rekening
                </button>

              </div>

            </div>

            {/* KADO */}

            <div className="max-w-6xl mx-auto mt-10">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  border
                  border-red-900/30
                  bg-gradient-to-r
                  from-red-950/50
                  via-zinc-900
                  to-red-950/50
                "
              >

                <div className="absolute right-8 top-8 text-7xl opacity-10">
                  🎁
                </div>

                <div className="absolute left-8 bottom-6 text-5xl opacity-10">
                  💝
                </div>

                <div className="flex items-center gap-3 mb-6">

                  <GiftIcon size={28} />

                  <h3 className="text-3xl font-black">
                    Kirim Kado
                  </h3>

                </div>

                <p className="text-lg text-gray-300 mb-2">
                  📦 Penerima:
                </p>

                <p className="font-semibold text-xl mb-4">
                  {weddingData.giftAddress.recipient}
                </p>

                <p className="text-gray-400 leading-relaxed max-w-3xl mb-8">
                  {weddingData.giftAddress.address}
                </p>

                <button
                  onClick={() =>
                    copyToClipboard(
                      weddingData.giftAddress.address,
                      "Alamat"
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    bg-red-600
                    hover:bg-red-700
                    px-6
                    py-3
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  <Copy size={18} />
                  Salin Alamat
                </button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}