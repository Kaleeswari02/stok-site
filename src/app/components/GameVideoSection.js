"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import LeftArrowIcon from "../../../public/assets/images/gamesection/left-arrow.png";
import RightArrowIcon from "../../../public/assets/images/gamesection/right-arrow.png";
import Circle from "../../../public/assets/images/gamesection/circle.png";
import PlayIcon from "../../../public/assets/images/gamesection/play-icon.jpg";
import Chart from "../../../public/assets/images/gamesection/chart.png";
import User from "../../../public/assets/images/gamesection/user.png";
import Mask from "../../../public/assets/images/gamesection/mask.png";

const videos = [
  {
    src: "/assets/videos/game1.mp4",
    poster: "/assets/images/gamesection/game-image1.png",
    title: ["The ", "sbike ", "Game"],
    description:
      "Turn your indoor cycling sessions into real-time challenges and crypto-powered rewards.",
    text: "Gamified Treadmill Experience",
  },
  {
    src: "/assets/videos/game2.mp4",
    poster: "/assets/images/gamesection/game-image1.png",
    title: ["Ride ", "Smarter ", "Now"],
    description:
      "Gamify your cardio and earn rewards as you race friends and foes.",
    text: "SBike Challenge Mode",
  },
  {
    src: "/assets/videos/game3.mp4",
    poster: "/assets/images/gamesection/game-image1.png",
    title: ["Push ", "Your ", "Limits"],
    description:
      "Experience real competition with AI-generated terrains and progress tracking.",
    text: "Compete with Global Riders",
  },
];

const Arrow = ({ direction, onClick }) => (
  <div onClick={onClick} className="relative w-12 h-12 cursor-pointer">
    <Image
      src={Circle}
      alt="circle background"
      width={48}
      height={48}
      priority
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        src={direction === "left" ? LeftArrowIcon : RightArrowIcon}
        alt={`${direction} arrow`}
        width={20}
        height={20}
        priority
      />
    </div>
  </div>
);

export const GameVideoSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-6 left-6 flex gap-3 z-30">{dots}</div>
    ),
    customPaging: () => (
      <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-r from-[#14F195] via-[#399FE9] to-[#7928D2] opacity-80"></div>
    ),
  };

  return (
    <section className="mt-10 px-6 max-w-[1300px] mx-auto relative">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-[40px] leading-tight">
          <span className="bg-gradient-to-r font-soehneHalbfett from-[#14F195] via-[#399FE9] to-[#7928D2] text-transparent bg-clip-text">
            Gamified
          </span>{" "}
          <span className="text-[#1E1E1E] font-soehneHalbfett">Mode</span>
        </h2>
        <p className="text-lg sm:text-2xl mt-2 text-[#1E1E1E] font-soehneBuch">
          Step into a world of enhanced adventures
        </p>
      </div>

      {/* Video Carousel */}
      <div className="mt-16 relative rounded-xl overflow-hidden h-[600px]">
        <Slider {...settings} ref={sliderRef}>
          {videos.map((video, index) => (
            <div key={index} className="relative h-[600px]">
              <video
                src={video.src}
                poster={video.poster}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-xl" />

              {/* Centered Play Icon */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="group flex items-center gap-3 bg-black/50 hover:bg-black/70 transition rounded-full px-6 py-3 cursor-pointer">
                  <h3 className="text-white text-base font-medium pointer-events-none font-soehneHalbfett">
                    Play Video
                  </h3>
                  <Image
                    src={PlayIcon}
                    alt="Play Button"
                    width={40}
                    height={40}
                    className="pointer-events-none"
                  />
                </div>
              </div>

              {/* Text Overlay at bottom-left */}
              <div className="absolute bottom-10 left-10 z-20 text-white max-w-sm">
                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-soehneHalbfett leading-tight">
                  <span className="text-[#00E0C2]">{video.title[0]}</span>
                  <span className="text-[#399FE9]">{video.title[1]}</span>
                  <span className="text-[#7928D2]">{video.title[2]}</span>
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm sm:text-base font-light leading-relaxed font-soehneBuch">
                  {video.description}
                </p>

                {/* Arrows */}
                <div className="flex gap-3 mt-6">
                  <Arrow
                    direction="left"
                    onClick={() => sliderRef.current?.slickPrev()}
                  />
                  <Arrow
                    direction="right"
                    onClick={() => sliderRef.current?.slickNext()}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-x-4">
          <Image
            src={User}
            alt="Multiplayer Challenges"
            width={45}
            height={45}
            className=""
          />
          <p className="text-left text-[16px] font-soehneHalbfett leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Multiplayer <br /> Challenges
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-x-4">
          <Image
            src={Mask}
            alt="Character Customize"
            width={45}
            height={45}
            className=""
          />
          <p className="text-left text-[16px] font-soehneHalbfett leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Character <br /> Customize
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-x-4">
          <Image
            src={Chart}
            alt="Real-Time Leaderboards"
            width={45}
            height={45}
            className=""
          />
          <p className="text-left text-[16px] font-soehneHalbfett leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Real-Time <br /> Leaderboards
          </p>
        </div>
      </div>
    </section>
  );
};
