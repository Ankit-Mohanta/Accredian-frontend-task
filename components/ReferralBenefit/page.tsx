"use client";

import { ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import Icon from "@/assets/Group.png"
import Image from "next/image";

const ReferralBenefit = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programDetailsArray = [
    {
        heading: "Professional Certificate Program in Product Management",
        referrer: "₹ 7,000",
        referee: "₹ 9,000",
    },
    {
        heading: "PG Certificate Program in Strategic Product Management",
        referrer: "₹ 9,000",
        referee: "₹ 11,000",
    },
    {
        heading: "Executive Program in Data Driven Product Management",
        referrer: "₹ 10,000",
        referee: "₹ 10,000",
    },
    {
        heading: "Executive Program in Product Management and Digital Transformation",
        referrer: "₹ 10,000",
        referee: "₹ 10,000",
    },
    {
        heading: "Executive Program in Product Management",
        referrer: "₹ 10,000",
        referee: "₹ 10,000",
    },
    {
        heading: "Advanced Certification in Product Management",
        referrer: "₹ 10,000",
        referee: "₹ 10,000",
    },
    {
        heading: "Executive Program in Product Management and Project Management",
        referrer: "₹ 10,000",
        referee: "₹ 10,000",
    },
  ]

  const programsArray = [
    "ALL PROGRAMS",
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  return (
    <div className="w-[90%] max-w-[1360px] mx-auto my-8 flex flex-col items-center justify-center gap-8">
      <p className="font-semibold text-[27px] text-center">
        What Are The <span className="text-[#1A73E8]">Referral Benefits?</span>
      </p>

      <div className="w-[90%] mx-auto flex gap-10">
        <div className="min-w-[300px] rounded-xl overflow-hidden flex flex-col bg-white shadow-heroComponent">
          {programsArray.map((details, index) => {
            return (
              <div
                key={index}
                className={`text-lg font-semibold w-full flex items-center justify-between transition p-4 relative before:absolute before:bottom-0 before:w-[90%] before:rounded-full before:h-0.5 before:bg-[#000000] before:bg-opacity-40 ${
                  index === activeProgram
                    ? "bg-[#1A73E8] text-white before:opacity-0"
                    : "text-black"
                } ${
                  index === programsArray.length - 1 && "before:opacity-0"
                } cursor-pointer`}
                onClick={() => {
                  setActiveProgram(index);
                }}
              >
                {details}
                <ArrowForwardIos />
              </div>
            );
          })}
        </div>

        <div className="w-full rounded-xl overflow-hidden bg-[#EBF3FF] bg-opacity-35 shadow-heroComponent">
          <div className="w-full bg-[#1A73E8] bg-opacity-35 p-4 flex items-center">
            <div className="w-[50%] text-xl font-bold text-[#1350A0]">
              Programs
            </div>
            <div className="w-[25%] text-xl font-bold text-[#1350A0] text-center border-l-2 border-r-2 border-gray-400">
              Referrer Bonus
            </div>
            <div className="w-[25%] text-xl font-bold text-[#1350A0] text-center">
              Referee Bonus
            </div>
          </div>

          <div className="w-full">
            {
                programDetailsArray.map((details, index)=>{
                    return(
                        <div className="w-full py-4 flex items-center" key={index}>
              <div className="w-[50%] text-xl flex gap-2 px-4">
                <Image
                alt="Temp icon"
                src={Icon}
                className="h-[18px] w-auto object-cover" />
                <p>
                {details.heading}
                </p>
              </div>
              <div className="w-[25%] text-xl text-center border-l-2 border-r-2 border-gray-400 px-2">
              {details.referrer}
              </div>
              <div className="w-[25%] text-xl text-center px-2">
              {details.referee}
              </div>
            </div>
                    )
                })
            }
          </div>
        </div>
      </div>

      <button
        name="refer now button"
        className="px-10 py-2 rounded-md bg-[#1A73E8] text-white mx-auto"
      >
        Refer Now
      </button>
    </div>
  );
};

export default ReferralBenefit;
