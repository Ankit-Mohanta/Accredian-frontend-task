import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Headphone from "@/assets/headphone.png";
import Image from "next/image";

const LastComponent = () => {
  return (
    <div className="w-[90%] max-w-[1360px] mx-auto my-8 bg-[#1A73E8] rounded-md px-10 py-16 flex items-center justify-between relative overflow-hidden">
      <div className="flex items-center gap-8 relative z-[2]">
        <div className="p-1 rounded-xl bg-[#E2E8F0] bg-opacity-35">
          <div className="bg-white rounded-xl w-[72px] h-[72px] flex items-center justify-center">
            <Image
              alt="Customer care icon"
              src={Headphone}
              unoptimized={true}
              className="w-[56px] h-[56px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-white">
          <p className="text-[26px] font-semibold">
            Want to delve deeper into the program?
          </p>

          <p className="text-base font-medium">
            Share your details to receive expert insights from our program team!
          </p>
        </div>
      </div>

      <button
        name="Get in touch button"
        className="text-[#1A73E8] font-semibold text-xl flex items-center gap-1 bg-white px-5 py-2 rounded-md relative z-[2]"
      >
        Get in touch
        <ArrowForwardIos />
      </button>

      <div className="absolute bg-[#237CF2] w-[631px] aspect-square rounded-full right-[6px] top-[10px] z-[1] flex items-center justify-center">
        <div className="w-[515px] bg-[#3289FC] aspect-square rounded-full flex items-center justify-center">
          <div className="w-[374px] aspect-square bg-[#4696FF] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LastComponent;
