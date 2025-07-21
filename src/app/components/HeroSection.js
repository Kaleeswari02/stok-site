import React from "react";
import Image from "next/image";
import treadmillIcon from "../../../public/assets/images/herosection/treadmillIcon.png";
import GlobIcon from "../../../public/assets/images/herosection/globe-icon.png";
import TrustIcon from "../../../public/assets/images/herosection/trust-logo.png";
import bgCircle from "../../../public/assets/images/herosection/bgCircle.png";
import runnerImg from "../../../public/assets/images/herosection/runnerImg.png";

export const HeroSection = () => {
  return (
 <section className="w-full px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12">

    {/* Left Column: Text + Stats stacked with mt-20 */}
<div className="w-full lg:w-1/2 max-w-xl flex flex-col text-center lg:text-left lg:mt-0">
      <div className="mt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mt-10">
          <span className="font-soehneHalbfett text-[54px] bg-gradient-primary bg-clip-text text-transparent">
            Play, Earn, and Win.
          </span>
        </h1>

        <p className="font-soehneKraeftig mt-6 text-[18px] text-gray-700">
          Welcome to the most powerful move-to-earn experience. Do more than just run. With a multitude of different exercise options, unlock your new, fitter self with exclusive web3 rewards and gamification.
        </p>

        <div className="mt-10">
          <button className="px-10 py-4 font-soehneHalbfett text-white text-lg rounded-full shadow-lg bg-gradient-primary hover:opacity-90 transition">
            Register Now
          </button>
        </div>
      </div>

{/* Stats Section below button */}
<div className="mt-10 w-full max-w-full">
  <div className="flex flex-row items-center justify-start gap-12 whitespace-nowrap">

    {/* Stat 1 */}
    <div className="flex items-center gap-5">
      <Image src={treadmillIcon} alt="treadmill" width={96} height={96} />
      <span className="font-soehneKraeftig text-[14px] sm:text-base text-gray-800 leading-tight text-left">
        1.8 Million users <br /> pre-registered
      </span>
    </div>

    {/* Divider */}
    <div className="flex-shrink-0 w-1 h-10 bg-gradient-to-b from-primary to-purple-500 rounded  opacity-90" />

    {/* Stat 2 */}
    <div className="flex items-center gap-5">
      <Image src={GlobIcon} alt="global" width={96} height={96} />
      <span className="font-soehneKraeftig text-[14px] sm:text-base text-gray-800 leading-tight text-left">
        50% users around <br /> the world
      </span>
    </div>

    {/* Divider */}
    <div className="flex-shrink-0 w-1 h-10 bg-gradient-to-b from-primary to-purple-500 rounded  opacity-90" />

    {/* Stat 3 */}
    <div className="flex items-center gap-5">
      <Image src={TrustIcon} alt="trust" width={96} height={96} />
      <span className="font-soehneKraeftig text-[14px] sm:text-base text-gray-800 leading-tight text-left">
        100% Trustable
      </span>
    </div>

  </div>
</div>



    </div>

    {/* Right Image Column with mt-10 */}
<div className="relative w-full lg:w-1/2 h-[450px] md:h-[600px] flex items-center justify-end mt-10 lg:mt-0">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image src={bgCircle} alt="Background Circle" className="w-96 md:w-[500px]" priority />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image src={runnerImg} alt="Runner" className="w-72 md:w-[400px]" priority />
      </div>
    </div>

  </div>


</section>

  );
};
