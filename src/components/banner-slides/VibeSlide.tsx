

// Adjust import path for images based on your project structure

'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Ensure Swiper styles are imported
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Adjust import path for images based on your project structure
import {vibe1,vibe2,vibe3, horse, shape1,shape2} from '@/assets';


export default function VibeSlide () {
const data=[
    {
        id: 1,
        img:vibe1,
        text1: "Shop shot Kurta",
        text2:"Look Vibrant"
    },
    {
        id: 2,
        img:vibe2,
        text1: "Shop shot Kurta",
        text2:"Look Vibrant"
    },
    {
        id: 3,
        img:vibe3,
        text1: "Shop shot Kurta",
        text2:"Look Vibrant"
    },
    {
        id: 4,
        img:vibe2,
        text1: "Shop shot Kurta",
        text2:"Look Vibrant"
    },
]

  return (
    <section className=" md:p-24 py-14 px-7 bg-white relative">
        <Image 
              src={shape1} 
              alt={"icon"} 
              width={500} 
              height={500} 
              className="absolute -top-32 -left-14 max-w-md sm:opacity-70 opacity-50  w-[70vw] "
            />
        <div className='absolute bg-[#F8ECD7] w-full h-3/5 bottom-0 left-0'></div>
        <h2 className='md:text-6xl font-medium  text-3xl text-center mt-14 relative z-20 text-black'>What&lsquo;s Your Vibe?
          </h2>
          <Image 
              src={shape2} 
              alt={"icon"} 
              width={500} 
              height={500} 
              className="mx-auto max-w-72 w-full md:mb-12 mb-3"
            />
        
        
      <Swiper
        effect="coverflow"
        grabCursor={false}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }} // Space between slides
        breakpoints={{
          // Responsive breakpoints
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ 
          clickable: true 
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        {data?.map((vibes) => (
          <SwiperSlide key={vibes.id} className=''>
            <div className='relative w-full h-full'>
            <Image 
              src={vibes.img} 
              alt={vibes.text1} 
              width={500} 
              height={500} 
              className="top-0 left-0 h-full w-full object-cover"
            />
            <div className='bg-gradient-to-l from-transparent h-auto w-max to-[#202020d6] absolute bottom-0 left-0 p-7 pr-12  text-white'>
                <h3 className='sm:text-3xl text-2xl font-semibold '>{vibes.text1}</h3>
                <p className='text-lg'>{vibes.text2}</p>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image 
              src={horse} 
              alt={"horse"} 
              width={500} 
              height={500} 
              className="max-w-md mx-auto mt-10 z-20 relative w-full"
            />
    </section>
  );
};
