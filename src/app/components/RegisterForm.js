"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Logo from "../../../public/assets/images/registerform/logo.png";
import Overlay from "../../../public/assets/images/registerform/overlay.png";
import Runner from "../../../public/assets/images/registerform/runner.jpg";

export default function RegisterForm({ onClose, value }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const emailValue = watch("email", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Registration successful!");
      console.log("Registration data:", data);
      // Close modal after successful registration if onClose is provided
      if (onClose) {
        setTimeout(() => onClose(), 1500);
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    toast.info(`${provider} login clicked`);
    console.log(`${provider} login initiated`);
  };

  return (
    <div className="bg-white h-full rounded-2xl overflow-hidden">
      <div className="flex h-full">
        {/* Left Image Side */}
        <section className="relative hidden md:block md:w-6/12 h-full">
          <Image
            src={Runner}
            alt="Fit woman on treadmill"
            fill
            className="object-cover"
          />
          <Image
            src={Overlay}
            alt="Overlay"
            fill
            className="object-cover z-10 opacity-100"
          />
        </section>

        {/* Right Form Side */}
        <section className="w-full md:w-6/12 flex flex-col p-6 sm:p-8 h-full">
          {/* Header */}
          <header className="flex items-start justify-start">
            <div className="flex flex-col">
              <Image src={Logo} alt="Sportstech Logo" width={150} height={60} />
            </div>
          </header>

          {/* Form Content - Centered and No Scroll */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              {/* Title */}
              <div className="mb-12">
                <p className="text-black text-xs font-soehneHalbfett mb-1 uppercase tracking-wide">
                  Start Your Earnings
                </p>
                <h1 className="text-black text-2xl sm:text-[26px] font-soehneHalbfett mb-1">
                  Pre-Registration
                </h1>
                <p className="text-gray-500 text-[10px] font-soehneBuch">
                  Email used only for essential updates.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="font-soehneBuch text-gray-800 text-sm block mb-2">
                    E-mail
                  </label>
                  <div
                    className={`transition-all duration-300 rounded-[80px] border px-[18px] py-[12px]
                    ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-400 focus-within:ring-[1.5px] focus-within:ring-blue-500"
                    }
                  `}
                  >
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="chirshems@gmail.com"
                      className="w-full text-gray-800 bg-transparent border-none outline-none placeholder:font-soehneBuch text-sm"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="font-soehneBuch text-gray-800 text-sm block mb-2">
                    Password
                  </label>
                  <div
                    className={`transition-all duration-300 rounded-[80px] border px-[18px] py-[12px]
                    ${
                      errors.password
                        ? "border-red-500"
                        : "border-gray-400 focus-within:ring-[1.5px] focus-within:ring-blue-500"
                    }
                  `}
                  >
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full text-gray-800 bg-transparent border-none outline-none placeholder:font-soehneBuch text-sm"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="shadow-lg flex items-center gap-2.5 text-sm text-white font-soehneHalbfett justify-center w-full px-6 py-3 rounded-full 
                  bg-gradient-primary hover:opacity-90
                   disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm font-medium mb-4 font-soehneKraeftig">
                  Register with
                </p>
                <div className="flex items-center justify-center gap-4">
                  {[
                    {
                      src: "/assets/images/registerform/google.png",
                      alt: "Google",
                      onClick: () => handleSocialLogin("Google"),
                    },
                    {
                      src: "/assets/images/registerform/facebook.png",
                      alt: "Facebook",
                      onClick: () => handleSocialLogin("Facebook"),
                    },
                    {
                      src: "/assets/images/registerform/twitter.png",
                      alt: "Apple",
                      onClick: () => handleSocialLogin("Apple"),
                    },
                  ].map(({ src, alt, onClick }) => (
                    <button
                      key={alt}
                      onClick={onClick}
                      type="button"
                      aria-label={`Register with ${alt}`}
                      className="aspect-square w-[42px] rounded-lg  transition-shadow"
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
