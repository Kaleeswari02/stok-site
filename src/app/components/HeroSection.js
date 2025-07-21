import React from "react";
import Image from "next/image";
import treadmillIcon from "../../../public/assets/images/herosection/treadmillIcon.png";
import GlobIcon from "../../../public/assets/images/herosection/globe-icon.png";
import TrustIcon from "../../../public/assets/images/herosection/trust-logo.png";
import bgCircle from "../../../public/assets/images/herosection/bgCircle.png";
import runnerImg from "../../../public/assets/images/herosection/runnerImg.png";

export const HeroSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className=" font-halbfett bg-gradient-primary bg-clip-text  text-transparent">
              Play, Earn, and Win.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 ">
            Welcome to the most powerful move-to-earn experience. Do more than
            just run. With a multitude of different exercise options, unlock
            your new, fitter self with exclusive web3 rewards and gamification.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="px-10 py-4 text-white font-semibold text-lg rounded-full shadow-lg bg-gradient-primary hover:opacity-90 transition">
              {" "}
              Register Now
            </button>
          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm font-medium text-gray-800">
            <div className="flex items-center gap-3">
              <Image
                src={treadmillIcon}
                alt="treadmill"
                width={50}
                height={50}
              />
              <span>1.8 Million user were pre-register</span>
            </div>
            <div className="flex items-center gap-3 relative pl-4 sm:pl-6">
              {/* Gradient Border */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
              <Image src={GlobIcon} alt="global" width={50} height={50} />
              <span>50% user were around the world</span>
            </div>
            <div className="flex items-center gap-3 relative pl-4 sm:pl-6">
              {/* Gradient Border */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary to-purple-500 rounded-full"></div>
              <Image src={TrustIcon} alt="trust" width={50} height={50} />
              <span>100% Trustable</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Background Circle */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src={bgCircle}
              alt="Background Circle"
              className="w-72 md:w-[400px]"
              priority
            />
          </div>

          {/* Runner Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src={runnerImg}
              alt="Runner"
              className="w-56 md:w-[320px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
