"use client";

import {
  Suspense,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

import Cover from "../components/Cover";
import NitflixIntro from "../components/NitflixIntro";

import AudioPlayer from "../components/AudioPlayer";

import Dresscode from "../components/section/Dresscode";
import FeaturedMovie from "../components/section/FeaturedMovie";
import Hero from "../components/section/Hero";
import Countdown from "../components/section/Countdown";
import Couple from "../components/section/Couple";
import Event from "../components/section/Event";
import LoveStory from "../components/section/LoveStory";
import PhotoCollection from "../components/section/PhotoCollection";
// import Location from "../components/section/Location";
import RSVP from "../components/section/RSVP";
import Gift from "../components/section/Gift";
import Closing from "../components/section/Closing";
//import Footer from "../components/Footer";

import FloatingNav from "../components/FloatingNav";

function HomeContent() {
  const searchParams = useSearchParams();

  const guestId =
  searchParams.get("id") || "";

const guestName =
  searchParams.get("to") ||
  "Tamu Undangan";

  const [opened, setOpened] =
    useState(false);

  const [playingIntro, setPlayingIntro] =
    useState(false);

  const playIntroSound = () => {
    const audio = new Audio(
      "/audio/ta-dum.mp3"
    );

    audio.volume = 0.8;

    audio.play().catch(() => {
      console.log(
        "Audio autoplay blocked"
      );
    });
  };

  const handleOpenInvitation = () => {
    playIntroSound();

    setPlayingIntro(true);

    setTimeout(() => {
      setOpened(true);
      setPlayingIntro(false);
    }, 3200);
  };

  if (playingIntro) {
    return <NitflixIntro />;
  }

  if (!opened) {
    return (
      <Cover
        guestName={guestName}
        onOpen={handleOpenInvitation}
      />
    );
  }

  return (
    <>
      {/* Background Music */}
      <AudioPlayer
        isOpen={opened}
      />

      <FloatingNav />

      <main className="bg-black text-white">

        <Hero />

        {/* <Dresscode /> */}

        <FeaturedMovie />

        {/* <Countdown /> */}

        <Couple />

        <Event />

        <RSVP
          guestId={guestId}
          guestName={guestName}
        />

        {/* <LoveStory /> */}

        <PhotoCollection />

        {/* <Location /> */}

        <Gift />

        <Closing />

        {/* <Footer /> */}

      </main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div />}>
      <HomeContent />
    </Suspense>
  );
}