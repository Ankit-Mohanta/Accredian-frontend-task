"use client";

import React, { useEffect, useState } from "react";
import Anniversary1 from "@/assets/HeroSection/Anniversary1.png";
import Anniversary2 from "@/assets/HeroSection/Anniversary2.png";
import Anniversary3 from "@/assets/HeroSection/Anniversary3.png";
import Anniversary4 from "@/assets/HeroSection/Anniversary4.png";
import Anniversary5 from "@/assets/HeroSection/Anniversary5.png";
import Anniversary6 from "@/assets/HeroSection/Anniversary6.png";
import Image from "next/image";
import ReferNow from "../ReferNow/page";
import Link from "next/link";

const HeroComponent = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const referalCode = sessionStorage.getItem("referralCode");
    if (referalCode) {
      setReferralCode(referalCode);
    }
  }, []);

  const menus: string[] = ["Refer", "Benefits", "FAQs", "Support"];

  return (
    <div className="w-full max-w-[1360px] mx-auto my-10">
      <div className="w-[800px] mx-auto rounded-full bg-[#1A73E8] bg-opacity-10 flex items-center justify-evenly py-4">
        {menus.map((details, index) => {
          return (
            <div
              key={index}
              className={`relative before:absolute before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#1A73E8] before:rounded-full before:-bottom-2 text-2xl transition cursor-pointer ${
                index === activeMenu
                  ? "text-[#1A73E8] before:opacity-100"
                  : "text-[#4B4B4B] before:opacity-0"
              }`}
              onClick={() => {
                setActiveMenu(index);
              }}
            >
              {details}
            </div>
          );
        })}
      </div>

      <div className="w-full shadow-heroComponent bg-[#EEF5FF] overflow-hidden rounded-[29px] flex items-center gap-2 mt-8 relative">
        <div className="w-1/2 flex flex-col px-10 gap-10 z-[1]">
          <div>
            <p className="text-[#1A202C] text-[88px] font-extrabold leading-[90px]">
              Let’s Learn & Earn
            </p>

            <p className="text-[40px] leading-[65px]">
              <span>
                Get a chance to win <br />
                up-to{" "}
                <span className="text-[54px] font-extrabold text-[#1A73E8]">
                  Rs. 15,000
                </span>
              </span>
            </p>
          </div>

          {referralCode ? (
            <ReferNow />
          ) : (
            <Link
              href={"/SignIn"}
              className="bg-[#1A73E8] text-white text-xl px-8 py-2 rounded-lg w-fit"
            >
              Refer Now
            </Link>
          )}
        </div>

        <div className="w-1/2 relative">
          <Image
            alt="Anniversary one"
            src={Anniversary1}
            unoptimized={true}
            className="object-cover h-auto w-full relative z-[1]"
          />

          <Image
            alt="Anniversary two"
            src={Anniversary2}
            className="absolute -top-4 left-40 z-[0] w-[157px] h-auto"
          />

          <Image
            alt="Anniversary six"
            src={Anniversary6}
            className="absolute bottom-8 left-0 z-[2] w-[157px] h-auto"
          />
        </div>

        <Image
          alt="Anniversary four"
          src={Anniversary4}
          className="absolute top-0 left-0 z-[0] w-[157px] h-auto"
        />

        <Image
          alt="Anniversary three"
          src={Anniversary3}
          className="absolute top-40 -right-3 z-[0] w-[157px] h-auto"
        />

        <Image
          alt="Anniversary five"
          src={Anniversary5}
          className="absolute top-0 right-3 z-[0] w-[157px] h-auto"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
