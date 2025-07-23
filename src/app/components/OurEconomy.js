import React from 'react';
import Image from "next/image";
import bgCircle from '../../../public/assets/images/oureconomy/bgCircle.png'
import Line from '../../../public/assets/images/oureconomy/line.png'
import LeftBottom from '../../../public/assets/images/oureconomy/left-bottom.png'
import RightBottom from '../../../public/assets/images/oureconomy/right-bottom.png'
import LeftTop from '../../../public/assets/images/oureconomy/left-top.png'
import RightTop from '../../../public/assets/images/oureconomy/right-top.png'

const TokenCard = ({ title, subtitle, className = "" }) => (
  <div className={`relative p-[1.5px] rounded-[30px] w-full max-md:px-5 group ${className}`}>
    {/* Gradient Border */}
    <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-[#14F195] via-[#399FE9] to-[#7928D2] z-0" />

    {/* Inner White Card */}
    <div className="relative bg-white rounded-[28px] px-[10px] py-5 shadow-[0px_0px_4px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow duration-300 z-10">
      <h3 className="text-[24px] font-soehneHalbfett text-center text-[rgba(30,30,30,1)]">{title}</h3>
      <p className="text-[16px] font-soehneBuch text-center whitespace-nowrap text-[rgba(30,30,30,1)]">{subtitle}</p>
    </div>
  </div>
);

const TokenDetailCard = ({ title, items }) => (
  <div className="relative p-[1px] rounded-[12px] w-full max-w-[420px] h-full group transition-all duration-300">
    {/* Default border */}
    <div className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#7928D2] via-[#399FE9] to-[#14F195] opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
    
    {/* Hover border with shadow */}
    <div className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#d2fceb] via-[#8cf9cb] via-[#31d9b6] to-[#4169e1] opacity-0 group-hover:opacity-100 shadow-[0px_8px_32px_rgba(49,217,182,0.4)] transition-all duration-300"></div>
    
    <div className="relative bg-white rounded-[12px] flex flex-col text-lg text-[rgba(30,30,30,1)] font-normal px-6 py-6 max-md:px-4 h-full overflow-hidden">
      {/* Gradient overlay on hover - bottom right corner */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#31d9b6] via-[#8cf9cb] to-[#d2fceb] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-tl-full"></div>
      
      <h3 className="text-[22px] font-soehneHalbfett relative z-10">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-2 mt-4 first:mt-4 relative z-10">
          <img
            src={item.icon}
            alt={item.iconAlt}
            className="w-5 h-5 object-contain shrink-0"
          />
          <div
            className="font-soehneBuch leading-snug"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}
    </div>
  </div>
);

export const OurEconomy = () => {
  const acquireItems = [
    {
      icon: "/assets/images/oureconomy/airdrop.png",
      text: "Airdrop",
      iconAlt: "Airdrop icon"
    },
    {
      icon: "/assets/images/oureconomy/tokensale.png",
      text: "Token Sale",
      iconAlt: "Token sale icon"
    },
    {
      icon: "/assets/images/oureconomy/exchange.png",
      text: "Exchange",
      iconAlt: "Exchange icon"
    }
  ];

  const earnItems = [
    {
      icon: "/assets/images/oureconomy/m2e.png",
      text: "M2E App",
      iconAlt: "M2E App icon"
    },
    {
      icon: "/assets/images/oureconomy/fitness.png",
      text: "Fitness Miners",
      iconAlt: "Fitness Miners icon"
    }
  ];

  const stakeItems = [
    {
      icon: "/assets/images/oureconomy/singlesided.png",
      text: "Single-Sided",
      iconAlt: "Single-sided staking icon"
    },
    {
      icon: "/assets/images/oureconomy/lpstake.png",
      text: "LP staking",
      iconAlt: "LP staking icon"
    },
    {
      icon: "/assets/images/oureconomy/fitnessminor.png",
      text: "Fitness Miners <br />Staking",
      iconAlt: "Fitness Miners staking icon"
    }
  ];

  const spendItems = [
    {
      icon: "/assets/images/oureconomy/merch.png",
      text: "Merch",
      iconAlt: "Merch icon"
    },
    {
      icon: "/assets/images/oureconomy/virtualgoods.png",
      text: "Virtual goods",
      iconAlt: "Virtual goods icon"
    },
    {
      icon: "/assets/images/oureconomy/equipments.png",
      text: "Equipment",
      iconAlt: "Equipment icon"
    },
    {
      icon: "/assets/images/oureconomy/subs.png",
      text: "Subscriptions",
      iconAlt: "Subscriptions icon"
    }
  ];

  return (
    <section className="mt-[119px] max-md:mt-10">
      <h2 className="text-[44px] text-center self-center max-md:max-w-full font-soehneHalbfett">
        <span className="text-black">Our</span> <span className="bg-gradient-to-r from-[#00E0C2] to-[#A349F4] bg-clip-text text-transparent">Token Economy</span>
      </h2>
      
      <div className="bg-[rgba(244,244,244,1)] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] self-stretch flex flex-col items-center justify-center mt-[35px] px-20 py-[39px] max-md:max-w-full max-md:mr-0.5 max-md:px-5">
        <div className="w-full max-w-[1288px] max-md:max-w-full">
          {/* Main Token Flow Section */}
          <div className="relative flex items-center justify-center min-h-[600px] max-md:flex-col">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={bgCircle}
                alt="Token economy flow background"
                className="object-contain opacity-80"
              />
            </div>

            {/* Left Card - Acquire */}
            <div className="absolute left-[80px] top-1/2 transform -translate-y-1/2 w-[280px] max-md:relative max-md:left-auto max-md:top-auto max-md:transform-none max-md:mb-5">
              <TokenCard
                title="Acquire"
                subtitle="Airdrop, Sale, Exchange"
                className="shadow-[0px_2px_24px_rgba(20,241,149,1)] hover:shadow-[0px_8px_32px_rgba(20,241,149,0.6)]"
              />
            </div>

            {/* Right Card - Earn */}
            <div className="absolute right-[80px] top-1/2 transform -translate-y-1/2 w-[280px] max-md:relative max-md:right-auto max-md:top-auto max-md:transform-none max-md:mt-5">
              <TokenCard
                title="Earn"
                subtitle="Games, Staking"
                className="shadow-[0px_2px_24px_rgba(20,241,149,1)] hover:shadow-[0px_8px_32px_rgba(20,241,149,0.6)]"
              />
            </div>

            {/* Top Card - M2E Mobile */}
            <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[300px] max-md:relative max-md:left-auto max-md:top-auto max-md:transform-none max-md:order-1">
              <TokenCard
                title="M2E Mobile"
                subtitle="App Users"
                className="hover:shadow-[0px_8px_32px_rgba(20,241,149,0.6)]"
              />
            </div>

            {/* Center Card - Spend */}
            <div className="relative z-10 w-[300px] max-md:order-3">
              <TokenCard
                title="Spend"
                subtitle="Marketplace, Subscriptions"
                className="hover:shadow-[0px_8px_32px_rgba(20,241,149,0.6)]"
              />
            </div>

            {/* Bottom Card - M2E Fitness */}
            <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[300px] max-md:relative max-md:left-auto max-md:bottom-auto max-md:transform-none max-md:order-4">
              <TokenCard
                title="M2E Fitness"
                subtitle="Miner User"
                className="hover:shadow-[0px_8px_32px_rgba(20,241,149,0.6)]"
              />
            </div>

            {/* Flow Arrows - Aligned exactly like in the reference image */}
            
            {/* Top-Left Arrow: From M2E Mobile to Acquire (dotted line style) */}
            <div className="absolute top-[130px] left-[200px] max-md:hidden z-20">
              <Image
                src={LeftTop}
                alt="Flow arrow"
                className="object-contain"
              />
            </div>
            
            {/* Top-Right Arrow: From M2E Mobile to Earn (dotted line style) */}
            <div className="absolute top-[130px] right-[200px] max-md:hidden z-20">
              <Image
                src={RightTop}
                alt="Flow arrow"
                className="object-contain"
              />
            </div>

            {/* Middle-Left Arrow: From Acquire to Spend (horizontal dotted line) */}
            <div className="absolute top-1/2 left-[380px] transform -translate-y-1/2 max-md:hidden z-20">
              <Image
                src={Line}
                alt="Flow arrow"
                className="object-contain"
              />
            </div>

            {/* Middle-Right Arrow: From Earn to Spend (horizontal dotted line) */}
            <div className="absolute top-1/2 right-[380px] transform -translate-y-1/2 max-md:hidden z-20">
              <Image
                src={Line}
                alt="Flow arrow"
                className="object-contain transform scale-x-[-1]"
              />
            </div>

            {/* Bottom-Left Arrow: From Spend to M2E Fitness (dotted line style) */}
            <div className="absolute bottom-[130px] left-[200px] max-md:hidden z-20">
              <Image
                src={LeftBottom}
                alt="Flow arrow"
                className="object-contain"
              />
            </div>

            {/* Bottom-Right Arrow: From Spend to M2E Fitness (dotted line style) */}
            <div className="absolute bottom-[130px] right-[200px] max-md:hidden z-20">
              <Image
                src={RightBottom}
                alt="Flow arrow"
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Detail Cards Section */}
        <div className="w-full px-4">
  {/* Wrapper with max-width and centered */}
  <div className="mt-14 max-w-[1200px] mx-auto max-md:max-w-full max-md:mt-10">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch items-stretch">
      <div className="w-3/12 max-md:w-full max-md:ml-0 flex">
        <TokenDetailCard title="Acquire" items={acquireItems} />
      </div>
      <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0 flex">
        <TokenDetailCard title="Earn" items={earnItems} />
      </div>
      <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0 flex">
        <TokenDetailCard title="Stake" items={stakeItems} />
      </div>
      <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0 flex">
        <TokenDetailCard title="Spend" items={spendItems} />
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};