"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  boys1, boys2, boys3, boys4, 
  mens1, mens2, mens3, mens4, 
  girls1, girls2, girls3, girls4, 
  shape2 ,side
} from "@/assets";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { EffectCube,  Autoplay } from 'swiper/modules';

export default function LatestBrands() {

    const SWIPER_CONFIG = {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        speed:1000,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        modules: [EffectCube, Autoplay]
      };

  const Men = [
    { id: 1, img: mens1 },
    { id: 2, img: mens2 },
    { id: 3, img: mens3 },
    { id: 4, img: mens4 },
  ];

  const Boy = [
    { id: 1, img: boys1 },
    { id: 2, img: boys2 },
    { id: 3, img: boys3 },
    { id: 4, img: boys4 },
  ];

  const Girl = [
    { id: 1, img: girls1 },
    { id: 2, img: girls2 },
    { id: 3, img: girls3 },
    { id: 4, img: girls4 },
  ];

  return (
    <section className='py-14 bg-white relative'>
      <h2 className="md:text-6xl font-medium text-3xl text-center text-black">
        Our Top Brands
      </h2>
      <Image
        src={shape2}
        alt="icon"
        width={500}
        height={500}
        className="mx-auto max-w-72 w-full md:mb-12 mb-3"
      />
      {/* men */}
      <div className='flex flex-wrap justify-between gap-y-8 items-center md:px-24 px-7 md:mb-14 mb-9'>
        <div className='sm:w-[49%] w-full max-w-[500px] px-5'>
          <Swiper
            {...SWIPER_CONFIG} 
            className="mySwiper"
          >
            {Men.map((card) => (
              <SwiperSlide key={card.id} className='overflow-hidden'>
                <Image
                  src={card?.img}
                  alt="icon"
                  width={500}
                  height={500}
                  className="h-auto object-cover w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='sm:w-[49%] w-full  space-y-7 text-black'>
            <h3 className='font1 md:text-6xl text-3xl font-semibold'>Let's Take A Look Some Groom's Outfit</h3>
            <p className='text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum dolorem deleniti nostrum qui delectus voluptatem repudiandae sed, illum at voluptatum iusto accusamus neque ullam, quas vitae, maiores ad reiciendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero pariatur eligendi consectetur rem provident dolor, qui libero maiores, ut nulla mollitia earum beatae laborum et, temporibus quaerat omnis itaque.</p>
            <div className='px-8 py-3  text-sm font-bold border-black border shadow-md bg-white cursor-pointer text-black hover:text-white hover:bg-black duration-300 w-max'>View Collection</div> 
        </div>
      </div>

      {/* boy */}
      <div className='flex flex-wrap justify-between relative max-sm:flex-wrap-reverse gap-y-8 overflow-hidden bg-orange-800 items-center md:px-24 md:py-16 px-7 py-10 md:mb-14 mb-9'>
     
            <div className='sm:w-[49%] w-full  space-y-7 text-white'>
            <h3 className='font1 md:text-6xl text-3xl font-semibold'>Let's Take A Look Some Boy's Collection</h3>
            <p className='text-zinc-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum dolorem deleniti nostrum qui delectus voluptatem repudiandae sed, illum at voluptatum iusto accusamus neque ullam, quas vitae, maiores ad reiciendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero pariatur eligendi consectetur rem provident dolor, qui libero maiores, ut nulla mollitia earum beatae laborum et, temporibus quaerat omnis itaque.</p>
            <div className='px-8 py-3 text-sm font-bold border-white border shadow-md bg-orange-800 cursor-pointer text-white hover:text-black hover:bg-white duration-300 w-max'>View Collection</div> 
        </div>

        <div className='sm:w-[49%] w-full max-w-[500px] px-5 relative'>
        <Image
                  src={side}
                  alt="icon"
                  width={500}
                  height={500}
                  className="absolute -top-8 -right-3 opacity-40  w-[30vw] max-w-44 "
                />
                 <Image
                  src={side}
                  alt="icon"
                  width={500}
                  height={500}
                  className="absolute -bottom-8 -left-3 rotate-180 opacity-40 w-[30vw] max-w-44 max-sm:hidden "
                />
          <Swiper
            {...SWIPER_CONFIG} 
            className="mySwiper"
          >
            {Boy.map((card) => (
              <SwiperSlide key={card.id} className='overflow-hidden'>
                <Image
                  src={card?.img}
                  alt="icon"
                  width={500}
                  height={500}
                  className="h-auto object-cover w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>

       {/* girl */}
       <div className='flex flex-wrap justify-between gap-y-8 items-center md:px-24 px-7 '>
        <div className='sm:w-[49%] w-full max-w-[500px] px-5'>
          <Swiper
            {...SWIPER_CONFIG} 
            className="mySwiper"
          >
            {Girl.map((card) => (
              <SwiperSlide key={card.id} className='overflow-hidden'>
                <Image
                  src={card?.img}
                  alt="icon"
                  width={500}
                  height={500}
                  className="h-auto object-cover w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='sm:w-[49%] w-full  space-y-7 text-black z-10 '>
            <h3 className='font1 md:text-6xl text-3xl font-semibold'>Let's Take A Look Some Bride's Lahanga</h3>
            <p className='text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum dolorem deleniti nostrum qui delectus voluptatem repudiandae sed, illum at voluptatum iusto accusamus neque ullam, quas vitae, maiores ad reiciendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero pariatur eligendi consectetur rem provident dolor, qui libero maiores, ut nulla mollitia earum beatae laborum et, temporibus quaerat omnis itaque.</p>
            <div className='px-8 py-3  text-sm font-bold border-black border shadow-md bg-white cursor-pointer text-black hover:text-white hover:bg-black duration-300 w-max'>View Collection</div> 
        </div>
      </div>
    </section>
  );
}