"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { banner1, banner2} from "@/assets";
import { sliderText } from "@/utils/motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdArrowRightAlt } from "react-icons/md";

export default function HomeBanner() {
  const uniqueId = "banner123";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section  className="swiperstyle1">
      <Swiper {...swiperOptions} className="mySwiper ">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden rounded-xl">
            <HomeBannerCard
              img={item?.img}
              title={item?.title}
              title2={item?.title2}
              subtitle={item?.subtitle}
              btntext={item?.btntext}
              key={currentSlide} // Re-trigger animation when slide changes
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next swiper-button-next !right-2 !top-[70%] !h-12 !w-12 rounded-full duration-300 hover:!bg-black !bg-zinc-100 !bg-opacity-30 !p-2.5 !text-xs !text-orange-600 md:!right-3 md:!top-1/2 md:!h-12 md:!w-12 max-md:!hidden`}
      >
        <GrNext />
      </div>
      <div
        className={`${uniqueId}-prev swiper-button-prev !left-2 !top-[70%] !h-12 !w-12 rounded-full duration-300 hover:!bg-black  !bg-zinc-100 !bg-opacity-30 !p-2.5 !text-xs !text-orange-600 md:!left-3 md:!top-1/2 md:!h-12 md:!w-12 max-md:!hidden`}
      >
        <GrPrevious />
      </div>
    </section>
  );
}

function HomeBannerCard({
  img,
  title,
  title2,
  subtitle,
  btntext,
}: any) {
  return (
    <div className="relative w-full overflow-hidden bg-[#0f1014] text-white md:h-[80vh] h-[70vh]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full object-cover object-center"
        alt="banner image"
        layout="fill"
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-transparent via-[#0000004e] to-[#202020c1]"></div>

      <div className="relative z-10 grid grid-cols-2 max-md:pb-10 md:grid-cols-3 h-full">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-2 flex h-full w-full flex-col max-w-4xl  justify-center gap-7 p-8 max-md:items-center md:px-28"
        >
          <h1 className="inline-block  text-4xl font-semibold md:text-6xl max-md:text-center">
            {title} <span className="text-orange-500 banner-text">{title2}</span>
          </h1>
          <p className="md:text-lg text-md max-md:text-center">{subtitle}</p>
          <Link href={"/"} className="w-min">
            <div className="flex items-center gap-4 text-nowrap px-6 py-2 bg-orange-600 text-white duration-300 hover:bg-black">
              <p className="text-md font-bold">{btntext}</p><MdArrowRightAlt  className="animate-x text-4xl"/>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

const sliderContent = [
  {
    id: 1,
    img: banner1,
    title: "Celebrate in Style!",
    title2:"Trending Now",
    subtitle:
      "Shop now and upgrade your wardrobe with our exclusive collection of stylish apparel Shop now and upgrade your wardrobe with our exclusive collection of stylish apparel",
    btntext: "Explore More",
    href: "/",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner2,
    title: "Trendy Clothes, Just buy!",
    title2:"Trending Now",
    subtitle:
      "Shop now and upgrade your wardrobe with our exclusive collection of stylish apparelShop now and upgrade your wardrobe with our exclusive collection of stylish apparel",
      btntext: "Shop Now",
    href: "/",
  },
  {
    id: 3,
    img: banner1,
    title: "Celebrate in Style!",
    title2:"Trending Now",
    subtitle:
      "Shop now and upgrade your wardrobe with our exclusive collection of stylish apparelShop now and upgrade your wardrobe with our exclusive collection of stylish apparel",
    btntext: "Explore More",
    href: "/",
  },
];
