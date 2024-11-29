"use client";

import React from "react";
import Image from "next/image";
import { man1, man2, wom3, boy1, shape2, shape5 } from "@/assets";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaStar } from "react-icons/fa";

export default function Testimonial() {
  const uniqueId = "banner124";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
     
      // When window width is >= 768px
      668: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // When window width is >= 1024px
      924: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    // Update slide index on change
  };

  const Client = [
    {
      id: 1,
      img: man1,
      text:
        "Siyaram is a good lore Ex voluptatum natus nemo explicabo laboriosam in aliquam mollitia nobis. Praesentium iusto magni nihil quae optio ducimus voluptatibus rerum omnis ad nobis!",
      clname: "Rasham Kumar",
    },
    {
      id: 2,
      img: man2,
      text:
        "Siyaram is a good lore Ex voluptatum natus nemo explicabo laboriosam in aliquam mollitia nobis. Praesentium iusto magni nihil quae optio ducimus voluptatibus rerum omnis ad nobis!",
      clname: "Rasham Kumar",
    },
    {
      id: 3,
      img: wom3,
      text:
        "Siyaram is a good lore Ex voluptatum natus nemo explicabo laboriosam in aliquam mollitia nobis. Praesentium iusto magni nihil quae optio ducimus voluptatibus rerum omnis ad nobis!",
      clname: "Rasham Kumar",
    },
    {
      id: 4,
      img: boy1,
      text:
        "Siyaram is a good lore Ex voluptatum natus nemo explicabo laboriosam in aliquam mollitia nobis. Praesentium iusto magni nihil quae optio ducimus voluptatibus rerum omnis ad nobis!",
      clname: "Rasham Kumar",
    },
  ];

  return (
    <section className=" md:p-24 py-14  relative ">
         <Image 
              src={shape5} 
              alt={"icon"} 
              width={500} 
              height={500} 
              className="absolute -top-36 right-0 max-w-96 sm:opacity-60 opacity-40  w-[40vw] -z-0"
            />
      <h2 className="md:text-6xl font-medium text-4xl text-center relative z-10 text-black">
        Our Clients Review
      </h2>
      <Image
        src={shape2}
        alt="icon"
        width={500}
        height={500}
        className="mx-auto max-w-72 w-full md:mb-12 z-10 mb-3"
      />
      <div className="max-sm:px-11">

      <Swiper {...swiperOptions} className="mySwiper py-4">
        {Client.map((card: any) => (
          <SwiperSlide key={card.id}>
            <div className="w-full flex flex-wrap justify-between p-9 gap-4 bg-orange-100 rounded-xl">
                <div className="flex items-center gap-2 md:gap-5">
                    <Image src={card.img} alt="client" className="rounded-full object-cover w-14 h-14"/>
                    <h3 className="font-semibold md:text-xl text-lg text-black ">{card.clname}</h3>
                </div>
                <div className="flex w-full justify-center gap-3 text-yellow-500 text-2xl"><FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

                <p className="w-full md:text-lg font1 text-black">{card.text}</p>
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next swiper-button-next !right-2 !p-2.5 !text-lg !text-orange-600 md:!right-3 !top-[64%] md:!h-16 md:!w-16 `}
      >
        {/* <GrNext /> */}
      </div>
      <div
        className={`${uniqueId}-prev swiper-button-prev !left-2  !p-2.5  !text-orange-600 md:!left-3 !top-[64%] md:!h-16 md:!w-16 `}
      >
        {/* <GrPrevious /> */}
      </div>
    </section>
  );
}
