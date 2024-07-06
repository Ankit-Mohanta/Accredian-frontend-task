import React from "react";
import AddPeopleIcon from "@/assets/AddPeople.png";
import ClipBoard from "@/assets/ClipBoard.png"
import Wallet from "@/assets/Wallet.png"
import Image from "next/image";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const SecondComponent = () => {
  return (
    <div className="w-full bg-[#EEF5FF] py-10 px-[5%] flex flex-col items-center justify-center gap-8">
      <p className="font-semibold text-[27px] text-center">
        How Do I <span className="text-[#1A73E8]">Refer?</span>
      </p>

      <div className="w-full max-w-[1000px] mx-auto flex items-center">
        {/* First box */}
        <div className="w-1/3 rounded-full p-10 relative z-[1]">
          <div className="flex flex-col items-center p-4 justify-center gap-5 w-full aspect-square rounded-full bg-[#EEF5FF] shadow-2xl">
            <Image
              alt="Add People Icon"
              src={AddPeopleIcon}
              className="h-[67px] w-auto object-cover"
            />

            <p className="text-base text-center">
              Submit referrals easily via our website’s referral section.
            </p>
          </div>

          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                borderStyle: "dashed none dashed dashed"
              }}
            />
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                borderStyle: "none solid solid none"
              }}
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 border-[#1A73E8] border-2 bg-white rounded-full" />
        </div>

        {/* Second component */}
        <div className="w-1/3 rounded-full p-10 relative z-[1] ml-[-2px]">
          <div className="flex flex-col items-center justify-center p-4 gap-5 w-full aspect-square rounded-full bg-[#EEF5FF] shadow-2xl">
            <Image
              alt="Add People Icon"
              src={ClipBoard}
              className="h-[67px] w-auto object-cover"
            />

            <p className="text-base text-center">
            Earn rewards once your referral joins an Accredian program.
            </p>
          </div>

          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)",
                borderStyle: "solid solid solid solid"
              }}
            />
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                borderStyle: "none solid solid none"
              }}
            />
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(50% 50%, 0% 100%, 0% 100%, 50% 100%)",
                borderStyle: "dashed"
              }}
            />
            <div className="absolute left-[10%] top-[80%] w-4 h-4 border-[#1A73E8] border-2 bg-white rounded-full" />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -top-3 text-[#1A73E8]">
          <PlayArrowIcon />
          </div>
        </div>

        {/* Third component */}
        <div className="w-1/3 rounded-full p-10 relative z-[1] ml-[-2px]">
          <div className="flex flex-col items-center justify-center p-4 gap-5 w-full aspect-square rounded-full bg-[#EEF5FF] shadow-2xl">
            <Image
              alt="Add People Icon"
              src={Wallet}
              className="h-[67px] w-auto object-cover"
            />

            <p className="text-base text-center">
            Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>

          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)",
                borderStyle: "solid solid solid solid"
              }}
            />
            <div
              className="w-full h-full border-2 border-[#1A73E8] rounded-full absolute top-0 left-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                borderStyle: "dashed"
              }}
            />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 border-[#1A73E8] border-2 bg-white rounded-full" />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -top-3 text-[#1A73E8]">
          <PlayArrowIcon />
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

export default SecondComponent;
