"use client";
export const dynamic = 'force-dynamic'; 
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assets/images/intropage/logo.png";
import bgCircle from "../../../public/assets/images/intropage/bgCircle.png";
import Person from "../../../public/assets/images/intropage/person.png";
import Line from "../../../public/assets/images/intropage/line.png";

export default function IntroPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset success message after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setShowModal(false);
    }, 3000);
  };

    const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEmail("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-green-600 text-[32px]  mb-10 max-md:text-[26px] max-sm:text-xl">
        Thank you for subscribing!
      </div>
    );
  }

  const socialLinks = [
    {
      name: "Twitter",
      icon: '/assets/images/intropage/twitter.png',
      url: "#",
    },
    {
      name: "Telegram",
      icon: '/assets/images/intropage/telegram.png',
      url: "#",
    },
    {
      name: "Facebook",
     icon: '/assets/images/intropage/facebook.png',
      url: "#",
    },
    {
      name: "Discord",
      icon: '/assets/images/intropage/discord.png',
      url: "#",
    },
  ];
  return (
    <div className="max-w-none w-full min-h-screen relative overflow-hidden flex flex-col items-center bg-neutral-100 mx-auto p-0 max-md:max-w-[991px] max-md:px-5 max-md:py-0 max-sm:max-w-screen-sm">
      <header className="relative w-full">
        <div className="absolute left-[137px] top-[94px] w-[230px] h-[34px] z-10 max-md:left-[50px] max-md:top-[50px] max-md:w-[180px] max-md:h-[28px] max-sm:left-5 max-sm:top-5 max-sm:w-[140px] max-sm:h-[22px]">
          <Image
            src={Logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      <main className="w-full flex flex-col items-center">
        <section className="relative w-full h-[800px] flex items-center justify-center mt-[100px] max-md:h-[600px] max-md:mt-20 max-sm:h-[500px] max-sm:mt-[60px]">
          <div className="relative w-[1200px] h-full max-md:w-[700px] max-sm:w-[360px]">
            <div className="relative w-full h-full flex items-center justify-center overflow-visible">
              {/* Updated person image */}
              <Image
                src={Person}
                alt="Person Transition"
                width={800}
                height={600}
                className="absolute top-20 left-1/2 -translate-x-1/2 object-contain z-10
                 max-md:w-[700px] max-md:h-auto
                 max-sm:w-[360px]"
              />

              {/* Decorative Line - Mid Layer */}
              <div
                className="absolute left-[360px] top-[350px] w-[493px] h-[248px] z-[3] 
      max-md:left-[150px] max-md:top-[300px] max-md:w-[350px] max-md:h-[176px]
      max-sm:left-[60px] max-sm:top-[240px] max-sm:w-[240px] max-sm:h-[120px]"
              >
                <Image
                  src={Line}
                  alt="Connecting line"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content section with relative positioning for background circle */}
        <div className="relative w-full">
          {/* Background Circle - positioned behind text content */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-[1] pointer-events-none
            w-[1100px] h-[2000px] top-[-650px]
            max-md:w-[900px] max-md:h-[900px] max-md:top-[0px]
            max-sm:w-[500px] max-sm:h-[500px] max-sm:top-[0px]"
            style={{
              backgroundImage: `url(${bgCircle.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <section className="relative w-full flex flex-col items-center z-[2]">
           <h1
  className="font-soehneExtrafett text-[#1E1E1E] text-[85px] font-black text-center w-full max-w-[1400px] mb-[60px] 
             -mt-[200px]
             max-md:text-5xl max-md:mt-[30px] max-md:mb-[40px] max-md:px-4 
             max-sm:text-[32px] max-sm:leading-[1.1] max-sm:mt-5 max-sm:mb-8"
>
  JOIN THE REVOLUTION
</h1>

            <div className="flex items-center justify-center w-full max-w-[1000px] mb-[60px] gap-[20px] max-md:flex-col max-md:gap-[20px] max-md:mb-[40px] max-sm:mb-8">
              {/* MOVE */}
              <div className="bg-white w-[300px] h-[100px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] flex items-center justify-center rounded-full hover:shadow-lg duration-300 max-sm:w-[200px] max-sm:h-[60px]">
                <div className="text-[#1E1E1E] text-3xl font-soehneExtrafett max-sm:text-lg">
                  MOVE
                </div>
              </div>

              {/* Line */}
              <div className="hidden sm:flex items-center">
                <div className="h-[150px] w-[1.6px] mx-2 sm:mx-4 rounded-full bg-gray-600" />
              </div>
              {/* EARN */}

              <div className="bg-white w-[300px] h-[100px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] flex items-center justify-center rounded-full hover:shadow-lg duration-300 max-sm:w-[200px] max-sm:h-[60px]">
                <div className="text-[#1E1E1E] text-3xl font-soehneExtrafett max-sm:text-lg">
                  EARN
                </div>
              </div>

              {/* Line */}
              <div className="hidden sm:flex items-center">
                <div className="h-[150px] w-[1.6px] mx-2 sm:mx-4 rounded-full bg-gray-600" />
              </div>
              {/* REPEAT */}
              <div className="bg-white w-[300px] h-[100px] shadow-[0_0_2px_0_rgba(0,0,0,0.25)] flex items-center justify-center rounded-full hover:shadow-lg duration-300 max-sm:w-[200px] max-sm:h-[60px]">
                <div className="text-[#1E1E1E] text-3xl font-soehneExtrafett max-sm:text-lg">
                  REPEAT
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full flex flex-col items-center z-[2]">
            <p className="text-black text-center text-3xl font-soehneHalbfett w-full max-w-[1253px] mt-0 mb-[100px] mx-auto px-5 py-0 max-md:text-[28px] max-md:mb-[60px] max-sm:text-xl max-sm:leading-[1.3] max-sm:mb-10">
              Web3 brings a new layer to your fitness experience — one where
              movement is meaningful, and progress is personalized. No
              subscriptions. No limits. Just a future-forward way to train,
              earn, and grow.
            </p>

            <button
              className="inline-flex justify-center items-center gap-2
            shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] w-[400px] h-[81px] cursor-pointer 
            mb-10 px-[90px] py-5 rounded-[80px]
            bg-gradient-primary hover:to-[#7928D2] 
            transition-all duration-300 transform hover:scale-105 max-md:w-80 max-md:h-[65px] 
            max-md:px-[70px] max-md:py-[15px] max-sm:w-[250px] max-sm:h-[55px] max-sm:px-[50px] max-sm:py-3"
              onClick={() => router.push("/home")}
            >
              <span className="text-white text-[32px] font-soehneHalbfett  max-md:text-[26px] max-sm:text-xl">
                Explore Now
              </span>
            </button>
          </section>
        </div>

        <footer className="relative w-full flex flex-col items-center z-[2]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mb-5"
          >
            <button
              type="button"
              onClick={openModal}
              className="text-black text-[32px]  underline decoration-solid font-soehneHalbfett decoration-auto underline-offset-auto cursor-pointer mb-4 hover:text-[#399FE9] transition-colors duration-300 max-md:text-[26px] max-sm:text-xl"
            >
              Join our Newsletter
            </button>
          </form>
          <footer className="flex gap-[50px] items-center justify-center mb-[50px] max-md:gap-[30px] max-sm:gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={`Follow us on ${social.name}`}
                className="w-11 h-11 cursor-pointer hover:scale-110 transition-transform duration-300"
              >
               
          <Image
          src={social.icon}
          alt={social.name}
          width={44}
          height={44}
        />              </a>
            ))}
          </footer>
        </footer>

                {/* Newsletter Modal */}
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl">
                      {/* Close button */}
                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
        
                      {/* Modal Content */}
                      <div className="mb-6">
                        {/* Logo */}
                        <div className="flex items-center mb-4">
                          
                        </div>
        
                        {/* Title */}
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-teal-500">Move. Earn. </span>
                          <span className="text-2xl font-bold text-gray-800">Evolve.</span>
                        </div>
        
                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6">
                          Join our newsletter to follow the fitness revolution where your workouts work for you.
                        </p>
                      </div>
        
                      {/* Form or Success Message */}
                      {isSubmitted ? (
                        <div className="text-center">
                          <div className="text-green-600 text-xl font-semibold mb-4">
                            Thank you for subscribing!
                          </div>
                          <div className="text-gray-500 text-sm">
                            Check your email for confirmation.
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="flex gap-2">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            required
                          />
                          <button
                            type="submit"
                            disabled={isLoading || !email}
                            className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isLoading ? (
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              "Subscribe"
                            )}
                          </button>
                        </form>
                      )}
        
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url(${bgCircle.src})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
      </main>
      
    </div>
  );
};