import { PlusIcon } from "lucide-react";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterLogo from "@/assets/footerLogo.png"
import Image from "next/image";

const Footer = () => {
  const programsArray = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
    "Project Management",
    "Strategy & Leadership",
    "Senior Management",
    "Fintech",
  ];

  return (
    <div className="w-full py-8 bg-[#282828]">
      <div className="w-[90%] max-w-[1200px] mx-auto text-white">

        <div
        className="w-full my-6 flex justify-between">

            <Image
            alt="footer logo"
            src={FooterLogo}
            unoptimized={true}
            className="h-[34px] w-auto object-cover" />

            <div className="flex flex-col items-center justify-center">

            <button
                name='Schedule button'
                className='bg-[#1A73E8] text-white text-sm px-8 py-2 rounded-lg w-fit'>
                    Schedule 1-on-1 Call Now
                </button>

                <p className="text-sm">
                Speak with our Learning Advisor
                </p>

            </div>

        </div>

        <div className="w-full h-0.5 rounded-full bg-white" />

        <div className="w-full flex justify-between gap-2 my-6">
          <div className="w-[432px] flex flex-col gap-4 px-6">
            <p className="text-xl">Programs</p>

            {programsArray.map((details, index) => {
              return (
                <div
                  className="flex items-center justify-between w-full"
                  key={index}
                >
                  <p className="text text-base font-bold">{details}</p>

                  <PlusIcon />
                </div>
              );
            })}
          </div>

          <div className="w-[528px] px-5 flex flex-col gap-2">
            <p className="text-xl">Contact us</p>

            <ul className="text-sm">
              <li>
                Email us (For Data Science Queries): admissions@accredian.com
              </li>
              <li>
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </li>
              <li>Product Management Admission Helpline:+91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
            </ul>

            <p className="text-lg">Why Accredian</p>

            <p className="text-xl font-light">Follow us</p>

            <div className="flex items-center gap-3">
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>

          <div className="w-[180px]">
            <p className="text-xl">Accredian</p>

            <ul className="flex flex-col gap-1 text-sm">
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission policy</li>
              <li>Referral policy</li>
              <li>Privacy policy</li>
              <li>Terms of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-center py-5">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
