import FAQ from "@/components/FAQ/page";
import HeroComponent from "@/components/HeroSection/page";
import LastComponent from "@/components/LastComponent/page";
import SecondComponent from "@/components/SecondComponent/page";
import Image from "next/image";
import ReferralBenefit from "../components/ReferralBenefit/page";

export default function Home() {
  return (
    <div className="w-full mx-auto">

      <HeroComponent />

      <SecondComponent />

      <ReferralBenefit />

      <FAQ />

      <LastComponent />

    </div>
  );
}
