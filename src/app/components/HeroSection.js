import React from "react";
import Image from "next/image";
import treadmillIcon from "../../../public/assets/images/herosection/treadmillIcon.png";
import GlobIcon from "../../../public/assets/images/herosection/globe-icon.png";
import TrustIcon from "../../../public/assets/images/herosection/trust-logo.png";
import bgCircle from "../../../public/assets/images/herosection/bgCircle.png";
import runnerImg from "../../../public/assets/images/herosection/runnerImg.png";

export const HeroSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-20">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-soehneHalbfett">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Play, Earn, and Win.
            </span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg sm:text-[18px] font-soehneKraeftig max-w-xl mx-auto lg:mx-0">
            Welcome to the most powerful move-to-earn experience. Do more than
            just run. With a multitude of different exercise options, unlock
            your new, fitter self with exclusive web3 rewards and gamification.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-8 sm:px-10 py-3 sm:py-4 font-soehneHalbfett text-white text-base sm:text-lg rounded-full shadow-lg bg-gradient-primary hover:opacity-90 transition">
              Register Now
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8 lg:gap-10 text-left">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 min-h-[60px]">
                <Image
                  src={treadmillIcon}
                  alt="treadmill"
                  width={60}
                  height={60}
                />
                <p className="text-sm sm:text-base font-soehneKraeftig text-gray-800 leading-tight whitespace-nowrap">
                  1.8 Million users
                  <br />
                  pre-registered
                </p>
              </div>

              {/* Divider */}
              <div className="hidden sm:flex items-center">
                <div className="h-[60px] w-[2px] mx-2 sm:mx-4 rounded-full [background:linear-gradient(180deg,_#14F195_0%,_#399FE9_50%,_#7928D2_100%)]" />
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4 min-h-[60px]">
                <Image src={GlobIcon} alt="global" width={56} height={56} />
                <p className="text-sm sm:text-base font-soehneKraeftig text-gray-800 leading-tight whitespace-nowrap">
                  50% users
                  <br />
                  around the world
                </p>
              </div>

              {/* Divider */}
              <div className="hidden sm:flex items-center">
                <div className="h-[60px] w-[2px] mx-2 sm:mx-4 rounded-full [background:linear-gradient(180deg,_#14F195_0%,_#399FE9_50%,_#7928D2_100%)]" />
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4 min-h-[60px]">
                <Image src={TrustIcon} alt="trust" width={56} height={56} />
                <p className="text-sm sm:text-base font-soehneKraeftig text-gray-800 leading-tight whitespace-nowrap">
                  100% Trustable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Image Stack) */}
        <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center">
          {/* Background Circle */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src={bgCircle}
              alt="Background Circle"
              className="w-72 sm:w-96 md:w-[500px]"
              priority
            />
          </div>

          {/* Runner Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src={runnerImg}
              alt="Runner"
              className="w-60 sm:w-80 md:w-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
