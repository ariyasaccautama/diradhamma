"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Music,
  Pause,
} from "lucide-react";

type Props = {
  isOpen: boolean;
};

export default function AudioPlayer({
  isOpen,
}: Props) {
  const audioRef =
    useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  useEffect(() => {
    if (
      isOpen &&
      audioRef.current
    ) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  }, [isOpen]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/audio/wedding-song.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-24
          right-5
          z-[9999]
          w-14
          h-14
          rounded-full
          bg-red-600
          hover:bg-red-700
          shadow-[0_0_30px_rgba(229,9,20,0.7)]
          flex
          items-center
          justify-center
          transition-all
        "
      >
        {isPlaying ? (
          <Pause size={22} />
        ) : (
          <Music size={22} />
        )}
      </button>
    </>
  );
}