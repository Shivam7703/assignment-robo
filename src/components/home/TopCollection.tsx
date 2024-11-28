"use client";
import React from 'react';
import Image from 'next/image';
import { man1,  man3, wom1, wom2, wom3, boy2, shape2 } from "@/assets";
import { FaRegHeart } from 'react-icons/fa';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function TopCollection() {
  const Product = [{
    id:1,
    img: man1,
    price :"₹ 1200",
    itemName:"Self Pattern Suit",
  },
  {
    id:2,
    img: boy2,
    price :"₹ 1270",
    itemName:" Set with Mirror work",
    
  },
  {
    id:3,
    img: man3,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned",
  },
  {
    id:4,
    img: wom1,
    price :"₹ 1300",
    itemName:"Patterned Indo-Western Set ",
  },
  {
    id:5,
    img: wom2,
    price :"₹ 1770",
    itemName:"Set with Mirror work",
  },
  {
    id:6,
    img: man3,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned ",
  },
  {
    id:7,
    img: wom2,
    price :"₹ 1270",
    itemName:"Lahanga Top Collection",
  },
  {
    id:8,
    img: wom3,
    price :"₹ 1200",
    itemName:"Bridal Suit Anarkali",
},]


const uniqueId = "banner123";

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
 
  breakpoints: {
    // When window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
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
  

  return (
    <section className=" md:p-24 py-14 px-12 bg-orange-200 relative">
      <h2 className="md:text-6xl font-medium text-4xl text-center text-black">
        Our Latest Collection
      </h2>
      <Image
        src={shape2}
        alt="icon"
        width={500}
        height={500}
        className="mx-auto max-w-72 w-full md:mb-12 mb-3"
      />
       <Swiper {...swiperOptions} className="mySwiper ">
       { Product.map((card :any)=>(
          <SwiperSlide key={card.id} className="overflow-hidden ">
           <div className='w-full group space-y-2' >
          <div className=' h-[400px] relative overflow-hidden'>
           
           <div className='absolute text-white font-medium text-center text-lg py-2 px-2 bottom-0 right-0 w-[50%] bg-[#f09737e3] hover:bg-black cursor-pointer duration-300 font-mono z-20'> Add to Cart
              </div>

              <div className='absolute text-white font-medium text-center text-lg py-2 px-2 bottom-0 left-0 w-[50%] bg-[#20983ae3] hover:bg-black cursor-pointer font-mono duration-300 z-20'>Buy Now
              </div>
            
          <Image 
              src={card.img} 
              alt={"img"} 
              width={500} 
              height={500} 
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 z-10 duration-300"
            />
          </div>
         
            <p className='text-zinc-800 '>{card?.itemName}</p>
            <h4 className='text-xl font-bold  text-black'>{card?.price}</h4>
         </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next swiper-button-next !right-2 !p-2.5 !text-lg !text-orange-600 md:!right-3 md:!top-[64%] md:!h-16 md:!w-16 `}
      >
        {/* <GrNext /> */}
      </div>
      <div
        className={`${uniqueId}-prev swiper-button-prev !left-2  !p-2.5  !text-orange-600 md:!left-3 md:!top-[64%] md:!h-16 md:!w-16 `}
      >
        {/* <GrPrevious /> */}
      </div>
    </section>
  );
}