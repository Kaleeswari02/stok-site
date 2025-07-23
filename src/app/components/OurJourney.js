'use client';
import React from "react";
import Image from "next/image";
import trackImg from '../../../public/assets/images/journey/trackImg.png';
import Q1Badge from "../../../public/assets/images/journey/Q1.png";
import Q2Badge from "../../../public/assets/images/journey/Q2.png";
import Q3Badge from "../../../public/assets/images/journey/Q3.png";
import Q4Badge from "../../../public/assets/images/journey/Q4.png";
import Q5Badge from "../../../public/assets/images/journey/Q5.png";

const roadmap = [
  {
    id: "q4",
    quarter: "Q4 2024",
    tasks: [
      "Company setup, SAFT prep and legal",
      "Prepare token sale package",
      "Token and smart contract development",
    ],
    badge: Q4Badge,
    position: "top-[3%] left-[42%]",

  },
  {
    id: "q3",
    quarter: "Q3 2025",
    tasks: [
      "Release production Sportstech Web3 mobile app",
      "Appstore/Playstore listing process",
      "Partnership announcements",
    ],
    badge: Q3Badge,
    position: "top-[25%] right-[5%]",
        rotate: "rotate-[6deg]",

  },
  {
    id: "q2",
    quarter: "Q2 2025",
    tasks: [
      "Continue influencer and growth marketing",
      "Public sale and listing",
      "Staking contract live",
      "Release Beta Sportstech Web3 mobile app",
      "Launch M2E earning economy",
    ],
    badge: Q2Badge,
    position: "top-[55%] right-[6%]",
        rotate: "-rotate-[5deg]",

  },
  {
    id: "q1",
    quarter: "Q1 2025",
    tasks: [
      "Investor outreach",
      "Seed/Private sale rounds",
      "Begin influencer and growth marketing",
      "Launch airdrop campaign",
      "Implement PR campaign",
      "Launchpad confirmation",
      "Exchange confirmation",
      "Token and smart contract audit",
    ],
    badge: Q1Badge,
    position: "top-[60%] left-[4%]",
        rotate: "rotate-[3deg]",


  },
  {
    id: "q5",
    quarter: "Q5 2025",
    tasks: ["Release Fitness Miner exercise bike w/Web3"],
    badge: Q5Badge,
    position: "top-[30%] left-[4%]",
        rotate: "-rotate-[3deg]",

  },
];

export const OurJourney = () => {
  return (
    <section className="relative w-full max-w-[1100px] mx-auto mt-20 px-4">
      <h2 className="text-[44px] font-bold text-center mb-16">
        <span className="text-black">Our </span>
        <span className="bg-gradient-to-r from-[#00E0C2] to-[#8B5CF6] bg-clip-text text-transparent">Journey</span>
      </h2>

      <div className="relative w-full h-auto">
        {/* Track Image */}
        <Image
          src={trackImg}
          alt="Journey Track"
          className="w-full h-auto object-contain"
        />

        {/* Roadmap Cards */}
        {roadmap.map((item) => (
          <div
            key={item.id}
            className={`absolute ${item.position}  ${item.rotate}  bg-white shadow-xl rounded-xl p-5 w-[260px] max-md:w-[90%]`}
          >
            {/* Header Row */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-black font-semibold text-lg font-soehneHalbfett">{item.quarter}</h3>
              <Image src={item.badge} alt={item.quarter} width={45} height={45} />
            </div>

            {/* Task Paragraphs */}
            <div className="space-y-2">
              {item.tasks.map((task, idx) => (
                <p key={idx} className="text-sm text-gray-800 font-soehneBuch leading-relaxed">
                  {task}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
