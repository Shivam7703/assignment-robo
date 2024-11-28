import HomeBanner from "@/components/banner-slides/HomeBanner";
import MostLoved from "@/components/banner-slides/MostLoved";
import VibeSlide from "@/components/banner-slides/VibeSlide";
import { logo } from "@/assets";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="h-24 md:h-36 py-2 w-full">
    <Image src={logo} alt="logo" className="h-full w-full"/>
   </div>
  <HomeBanner/>
  <VibeSlide/>
  <MostLoved/>
   </>
  );
}
