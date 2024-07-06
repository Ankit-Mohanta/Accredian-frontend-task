"use client";

import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const FAQHeadingsArray = ["Eligibility", "How to use", "Terms & Conditions"];
  return (
    <div className="w-[90%] max-w-[1360px] mx-auto my-8 px-10">
      <p className="font-semibold text-[27px] text-center">
        Frequently Asked <span className="text-[#1A73E8]">Questions</span>
      </p>

      <div className="mt-6 flex gap-10">
        <div className="flex flex-col gap-5">
          {FAQHeadingsArray.map((details, index) => {
            return (
              <div
                key={index}
                className={`w-[260px] h-[68px] p-2 flex items-center justify-center transition bg-white font-semibold text-base ${
                  activeFAQ === index
                    ? "shadow-heroComponent text-[#1A73E8]"
                    : "border-2 border-[#737373] text-[#737373]"
                } rounded cursor-pointer`}
                onClick={() => {
                  setActiveFAQ(index);
                }}
              >
                {details}
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <div className="w-full flex items-center justify-between cursor-pointer">
            <p className="text-[#1A73E8] text-base font-semibold">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </p>

            <ChevronUp />
          </div>

          <p className="pl-8 text-opacity-85 text-[15px] mt-6">
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </p>

          <div className="w-full flex items-center justify-between cursor-pointer mt-10">
            <p className="text-base font-semibold">
              What is the minimum system configuration required?
            </p>

            <ChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
