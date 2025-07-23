'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialStat = ({ icon, followers, iconAlt }) => (
  <div className="hover:transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
    <Image
      src={icon}
      alt={iconAlt}
      width={100}
      height={100}
      className="aspect-[0.93] object-contain cursor-pointer 
                 w-[60px] sm:w-[80px] md:w-[100px]"
    />
    <div className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold mt-[20px] sm:mt-[24px] font-soehneKraeftig">
      {followers}
    </div>
    <div className="mt-[5px] sm:mt-[7px] text-sm sm:text-base font-soehneKraeftig text-[#666666]">
      Followers
    </div>
  </div>
);

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const socialStats = [
    {
      icon: "/x.png",
      followers: "5,489",
      iconAlt: "X Platform"
    },
    {
      icon: "/telegram.png",
      followers: "1,332",
      iconAlt: "Telegram"
    },
    {
      icon: "/facebook.png",
      followers: "3,486",
      iconAlt: "Facebook"
    },
    {
      icon: "/android.png",
      followers: "5,019",
      iconAlt: "Discord"
    }
  ];

  return (
    <footer className="bg-[rgba(244,244,244,1)] shadow-md pt-[72px] pb-[23px] px-5 sm:px-10 md:px-20 mt-[38px] flex flex-col items-center">
      <div className="w-full max-w-[1293px] flex flex-col items-center">
        <h2 className="text-[32px] sm:text-[36px] md:text-[44px] text-center">
          <span className="text-black font-soehneHalbfett">Our</span>{' '}
          <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-soehneHalbfett">
            Social Links
          </span>
        </h2>

        <div className="flex gap-3 mt-12 justify-between flex-wrap max-w-[879px] w-full">
          {socialStats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <SocialStat {...stat} />
              {index < socialStats.length - 1 && (
                <div className="w-0.5 h-[54px] bg-gradient-to-b from-[#14F195] via-[#399FE9] to-[#7928D2] ml-10 sm:ml-16 md:ml-20" />
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-black mt-[50px]" />

        {/* Logo */}
        <div className="w-full max-w-[1293px] mr-auto px-4">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={302}
            height={50}
            className="mb-[40px] mt-[60px] w-[180px] sm:w-[220px] md:w-[302px] h-auto"
          />

          {/* Left-Aligned Section */}
          <div className="w-full flex flex-col items-start text-left max-w-[730px] mt-[50px]">
            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-4 w-full mb-10 flex-wrap"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 min-w-[260px] h-[60px] sm:h-[70px] md:h-[75px] rounded-full border border-black px-6 text-black placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#14F195] via-[#399FE9] to-[#7928D2] text-white text-base sm:text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform font-soehneKraeftig"
              >
                Register Now
              </button>
            </form>

            {/* Footer Links & Copyright */}
            <div className="flex w-full flex-wrap text-[rgba(30,30,30,1)] items-start justify-between">
              <div className="flex gap-10 sm:gap-20 mb-2 md:mb-0">
                <Link
                  href="/privacy-policy"
                  className="hover:text-gray-600 font-soehneKraeftig text-[#666666] text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-gray-600 font-soehneKraeftig text-[#666666] text-sm sm:text-base"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="sm:relative sm:left-[75%] font-soehneKraeftig text-[#666666] text-sm sm:text-base mt-2 sm:mt-0">
                Reflect App, LLC. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
