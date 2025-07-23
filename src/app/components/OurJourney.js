import React from "react";
import Image from "next/image";
import trackImg from '../../../public/assets/images/journey/trackImg.png'

const roadmap = [
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
    position: "left-10 top-[60%]",
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
    position: "right-10 top-[55%]",
  },
  {
    id: "q3",
    quarter: "Q3 2025",
    tasks: [
      "Release production Sportstech Web3 mobile app",
      "Appstore/Playstore listing process",
      "Partnership announcements",
    ],
    position: "right-10 top-[25%]",
  },
  {
    id: "q4",
    quarter: "Q4 2024",
    tasks: [
      "Company setup, SAFT prep and legal",
      "Prepare token sale package",
      "Token and smart contract development",
    ],
    position: "top-5 left-[40%]",
  },
  {
    id: "q5",
    quarter: "Q5 2025",
    tasks: ["Release Fitness Miner exercise bike w/Web3"],
    position: "left-10 top-[30%]",
  },
];

export const  OurJourney =() => {
  return (
    <section className="relative w-full max-w-[1300px] mx-auto mt-20 px-4">
      <h2 className="text-[44px] font-soehneHalbfett  text-center mb-16">
        <span className="text-black">Our </span>
        <span className="bg-gradient-to-r from-[#00E0C2] to-[#8B5CF6] bg-clip-text text-transparent">Journey</span>
      </h2>

      {/* Background Track Image */}
      <div className="relative w-full">
        <Image
          src={trackImg}
          alt="Journey Track"
          className="w-full h-auto object-contain"
        />

        {/* Floating Cards */}
        {roadmap.map((item) => (
          <div
            key={item.id}
            className={`absolute ${item.position} bg-white shadow-lg rounded-xl p-4 w-[250px] max-md:w-[90%]`}
          >
            <h3 className="text-blue-500 font-bold mb-2">{item.quarter}</h3>
            <ul className="text-sm list-disc list-inside text-gray-700">
              {item.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
