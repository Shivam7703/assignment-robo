import HomeBanner from "@/components/banner-slides/HomeBanner";
import MostLoved from "@/components/banner-slides/MostLoved";
import VibeSlide from "@/components/banner-slides/VibeSlide";

export default function Home() {
  return (
   <>
   <div className="sm:h-32 h-48  w-full"></div>
  <HomeBanner/>
  <VibeSlide/>
  <MostLoved/>
   </>
  );
}
