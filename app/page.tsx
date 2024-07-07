import FAQ from "@/components/FAQ/page";
import HeroComponent from "@/components/HeroSection/page";
import LastComponent from "@/components/LastComponent/page";
import SecondComponent from "@/components/SecondComponent/page";
import Image from "next/image";
import ReferralBenefit from "../components/ReferralBenefit/page";
import dynamic from "next/dynamic";

const HomePage = dynamic(
  ()=> import('@/components/HomePage/HomePage'),
  {
      ssr: false,
      loading: () => (
        <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
      )
    }
)

export default function Home() {
  return (
    <HomePage />
  );
}
