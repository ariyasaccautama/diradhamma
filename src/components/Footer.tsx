"use client";

import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        py-16
        pb-32
        px-6
      "
    >
      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/bg-footer.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/90
          to-black/80
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          max-w-4xl
          mx-auto
          text-center
        "
      >
        <p className="text-gray-400 text-sm">
          Design & Developed with
          <span className="text-red-500">
            {" "}
            ❤️{" "}
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
            gap-2
            mt-4

            text-gray-200
            hover:text-red-500

            transition-all
            duration-300

            hover:scale-105
          "
        >
          <FaInstagram size={20} />

          <span className="font-medium">
            @ariyamelulu
          </span>
        </a>

        <div
          className="
            w-20
            h-px
            bg-red-600/50
            mx-auto
            my-6
          "
        />

        <p className="text-xs text-gray-500">
          © 2026 Dhamma & Dira Wedding
          Invitation
        </p>
      </div>
    </footer>
  );
}