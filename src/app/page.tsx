import HomeBanner from "@/components/home/HomeBanner";
import MostLoved from "@/components/home/MostLoved";
import VibeSlide from "@/components/home/VibeSlide";
import { logo } from "@/assets";
import Image from "next/image";
import TopCollection from "@/components/home/TopCollection";
import LatestBrands from "@/components/home/LatestBrands";

export default function Home() {
  return (
   <>
   <div className="h-24 md:h-36 py-2 w-full">
    <Image src={logo} alt="logo" className="h-full w-full"/>
   </div>
  <HomeBanner/>
  <VibeSlide/>
  <MostLoved/>
  <TopCollection/>
  <LatestBrands/>
   </>
  );
}
