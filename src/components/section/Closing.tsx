"use client";

import { FaInstagram } from "react-icons/fa";

export default function Closing() {
  const scrollToDresscode = () => {
    document
      .getElementById("dresscode")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-4xl font-black mb-6">
          Sampai Jumpa di Hari Bahagia Kami ✨
        </h2>

        <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Merupakan suatu kebahagiaan bagi kami apabila bapak/ibu/sdr/sdri berkenan  hadir dan memberikan doa restu untuk kedua mempelai menjadi keluarga sakhinah mawadah dan warohmah.
        </p>

        <blockquote
          className="
            mt-3
            text-gray-400
            italic
            text-lg
          "
        >
          Kami yang berbahagia
          <br />
          Keluarga Bapak Supriyoto & Ibu Indrayani
          <br />
          &
          <br />
          Keluarga Bapak Tomo & Ibu Rusmiyati
        </blockquote>

        {/* Reminder Dresscode */}

        {/* <div
          className="
            mt-14
            bg-white/5
            backdrop-blur
            border
            border-white/10
            rounded-3xl
            p-8
            max-w-2xl
            mx-auto
          "
        >
          <div className="text-3xl mb-4">
            👔👗
          </div>

          <h3 className="text-1xl font-bold mb-3">
            Jangan Lupa Dresscode Ya! 😊
          </h3>

          <button
            onClick={scrollToDresscode}
            className="
              bg-red-600
              hover:bg-red-700
              px-5
              py-3
              rounded-xl
              font-bold
              transition
            "
          >
            🎨 Lihat Dresscode
          </button>
        </div> */}

        {/* Footer */}

        <div className="mt-4">
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

          <div
            className="
              w-24
              h-px
              bg-red-600/40
              mx-auto
              mb-8
            "
          />

          <p className="text-gray-500 text-sm">
            Design & Developed with
            <span className="text-red-500">
              {" "}❤️{" "}
            </span>
            by
          </p>

          <a
            href="https://instagram.com/ariyamelulu"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              mt-4
              px-6
              py-3

              rounded-full
              border
              border-white/20

              bg-white/5
              backdrop-blur-md

              text-white
              hover:text-white

              hover:bg-white/10
              hover:border-red-500/40
              hover:shadow-lg
              hover:shadow-red-500/20

              transition-all
              duration-300
            "
          >
            <FaInstagram
              size={22}
              className="text-pink-500"
            />

            <span className="font-semibold tracking-wide">
              ariyamelulu
            </span>
          </a>

          <p className="text-xs text-gray-500 mt-3">
            © 2026 Dhamma & Dira Wedding Invitation
          </p>

        </div>

      </div>
    </section>
  );
}