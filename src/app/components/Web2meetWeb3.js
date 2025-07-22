import React from "react";
import Image from "next/image";
import Icon1 from "../../../public/assets/images/web2meetweb3/icon1.png";
import Icon2 from "../../../public/assets/images/web2meetweb3/icon2.png";
import Icon3 from "../../../public/assets/images/web2meetweb3/icon3.png";
import Icon4 from "../../../public/assets/images/web2meetweb3/icon4.png";
import Number1 from "../../../public/assets/images/web2meetweb3/number1.png";
import Number2 from "../../../public/assets/images/web2meetweb3/number2.png";
import Number3 from "../../../public/assets/images/web2meetweb3/number3.png";
import Number4 from "../../../public/assets/images/web2meetweb3/number4.png";
import bgCircle from "../../../public/assets/images/web2meetweb3/bgcircle.png";

export const Web2meetWeb3 = () => {
  return (
    <section className="relative py-20 max-md:py-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <Image
          src={bgCircle}
          alt="Background Circle"
          width={850}
          height={850}
          className="w-auto h-auto"
        />
      </div>

      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-soehneHalbfett leading-tight">
            <span className="text-green-400">Web2</span>{" "}
            <span className="text-black">Meets</span>{" "}
            <span className="text-blue-500">Web3</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium mt-2 max-w-2xl mx-auto font-soehneKraeftig">
            Experience the future of fitness gaming with cutting-edge blockchain
            technology
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 flex flex-col lg:flex-row gap-6">
          {/* Left Big Card */}
          <div className="w-full lg:w-[43%] min-h-[400px] bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <Image src={Icon1} alt="Crypto Icon" width={280} height={280} />
            </div>
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-soehneHalbfett">
                Crypto Rewards
              </h3>
              <p className="text-base sm:text-lg mt-5 font-soehneBuch">
                Earn tokens for every <br />
                mile you run, every <br />
                goal you achieve
              </p>
            </div>
            <div className="absolute bottom-4 right-4 p-4">
              <Image src={Number1} alt="1" width={160} height={160} />
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-[57%] flex flex-col gap-6">
            {/* Top Two Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Card 2 */}
              <div className="w-full sm:w-1/2 min-h-[320px] bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <Image
                    src={Icon2}
                    alt="NFT Wearables"
                    width={70}
                    height={70}
                  />
                  <h3 className="text-lg sm:text-xl font-soehneHalbfett mt-6">
                    NFT Wearables
                  </h3>
                  <p className="text-sm sm:text-base mt-5 font-soehneBuch">
                    Collect rare digital gear <br />
                    that boosts your <br />
                    performance
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 p-4">
                  <Image src={Number2} alt="2" width={40} height={40} />
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full sm:w-1/2 min-h-[320px] bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <Image
                    src={Icon3}
                    alt="Multiplayer Races"
                    width={70}
                    height={70}
                  />
                  <h3 className="text-lg sm:text-xl font-soehneHalbfett mt-6">
                    Multiplayer Races
                  </h3>
                  <p className="text-sm sm:text-base mt-5 font-soehneBuch">
                    Compete with friends in <br />
                    real-time virtual <br />
                    marathons
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 p-4">
                  <Image src={Number3} alt="3" width={40} height={40} />
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="w-full min-h-[320px] bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
              {/* Left Column (Icon and Text) */}
              <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start">
                <Image
                  src={Icon4}
                  alt="Gamified Fitness"
                  width={70}
                  height={70}
                />
                <h3 className="text-lg sm:text-xl font-soehneHalbfett mt-6 text-center sm:text-left">
                  Gamified Fitness
                </h3>
                <p className="text-sm sm:text-base mt-5 font-soehneBuch text-center sm:text-left">
                  Level up your health with <br />
                  RPG-style progression <br />
                  systems
                </p>
              </div>

              {/* Right Column (Number Image) */}
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center absolute bottom-4 right-4 p-4">
                <Image src={Number4} alt="4" width={260} height={260} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
