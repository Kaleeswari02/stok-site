'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function EarnSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <div
      key={i}
      style={{
        width: i === currentSlide ? "50px" : "20px",
        height: i === currentSlide ? "8px" : "20px",
        borderRadius: i === currentSlide ? "6px" : "50%",
        background: i === currentSlide ? "#14F195" : "#D9D9D9",
        margin: "5px -40px",
        transition: "all 0.3s ease",
      }}
    />
    
    
    ),
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative overflow-hidden">
      {/* Left: Treadmill Carousel with Overlay */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center">
        {/* Green Overlay (blurred glow effect) */}
        <img
          src="/backgroundoverlay.png"
          alt="Glow Overlay"
          className="absolute right-1 w-[10%] md:w-[75%] blur-xl opacity-90 z-0 pointer-events-none"
          style={{ right: "4vw", bottom: "-6vh" }}
        />

        {/* Slick Carousel */}
        <Slider {...settings} className="w-[60%] md:w-[60%] relative z-10">
          <div>
            <img
              src="/earnsec.png"
              alt="Treadmill 1"
              className="rounded-[32px] w-full"
            />
          </div>
          <div>
            <img
              src="/earnsec.png"
              alt="Treadmill 2"
              className="rounded-[32px] w-full"
            />
          </div>
        </Slider>
      </div>

      {/* Right: Text and Button */}
      <div className="w-full md:w-1/2  md:mt-0  text-center md:text-left">
        <h2 className="text-[32px] md:text-[45px] font-bold flex flex-wrap items-center">
          <span className="bg-[linear-gradient(to_right,#14F195,#399FE9,#7928D2)] text-transparent bg-clip-text font-soehneKraeftig">
            Two ways to
          </span>
          <span className="ml-2 flex items-center">
            <span className="bg-[linear-gradient(to_right,#14F195,#399FE9,#7928D2)] text-transparent bg-clip-text">e</span>
            <span className="text-[#2C154A]">a</span>
            <span className="text-black">r</span>
            <span className="text-black">n</span>
          </span>
        </h2>

        <p className="mt-4 text-[#3B3B3B] text-[20px] leading-relaxed max-w-xl font-soehneKraeftig">
          Sportstech makes it easy to convert your workouts to earnings. It’s easy as downloading our app and going for a run. Want to earn more? Purchase one of our Fitness Miners, workout, and earn gamified rewards.
        </p>

        <div className="mt-8 inline-block p-[2px] rounded-full bg-gradient-to-r from-[#00E599] via-[#3C82F4] to-[#5729F9]">
          <button className="bg-white text-[#3B3B3B] text-[20px] font-semibold px-7 py-4 rounded-full hover:bg-[#f5f5f5] transition font-soehneKraeftig">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
