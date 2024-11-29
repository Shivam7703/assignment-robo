"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { man1, man2, man3, wom1, wom2, wom3, boy1, boy2, shape2 } from "@/assets";
import { FaRegHeart } from 'react-icons/fa';

export default function MostLoved() {
  const [activeFilter, setActiveFilter] = useState(1);

  const filters = [
    { id: 1, value: "Men" },
    { id: 2, value: "Boy" },
    { id: 3, value: "Woman" }
  ];

  const menFilter = [{
    id:1,
    img: man1,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  },
  {
    id:2,
    img: man2,
    price :"₹ 1270",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : false,
    type: "BEST SELLER"
  },
  {
    id:3,
    img: man3,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  },
  {
    id:4,
    img: man1,
    price :"₹ 1300",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : false,
    type: "BEST SELLER"

  },
  {
    id:5,
    img: man2,
    price :"₹ 1770",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
    ,    type: "BEST QUALITY"

  },
  {
    id:6,
    img: man3,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  }]

  const boyFilter = [{
    id:1,
    img: boy1,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  },
  {
    id:2,
    img: boy2,
    price :"₹ 1270",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : false,
    type: "BEST SELLER"
  },
  {
    id:3,
    img: boy1,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
    ,    type: "BEST QUALITY"

  },
  {
    id:4,
    img: boy2,
    price :"₹ 1300",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : false,
    type: "BEST SELLER"

  },
  ]

  const womenFilter = [{
    id:1,
    img: wom1,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  },
  {
    id:2,
    img: wom2,
    price :"₹ 1270",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : false,
    type: "BEST SELLER"
  },
  {
    id:3,
    img: wom3,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
,    type: "BEST QUALITY"
},
  {
    id:4,
    img: wom1,
    price :"₹ 1300",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : false,
    type: "BEST SELLER"

  },
  {
    id:5,
    img: wom2,
    price :"₹ 1770",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  },
  {
    id:6,
    img: wom3,
    price :"₹ 1200",
    itemName:"Boys Cream Self Patterned Indo-Western Set with Mirror work",
    Available : true
  }]

  return (
    <section className=" md:p-24 py-14 px-7 bg-white relative">
      <h2 className="md:text-6xl font-medium text-4xl text-center text-black">
        Most Loved Collection
      </h2>
      <Image
        src={shape2}
        alt="icon"
        width={500}
        height={500}
        className="mx-auto max-w-72 w-full md:mb-12 mb-3"
      />
      <div className="flex gap-4 sm:gap-12 justify-center mx-auto items-center mb-12">
        {filters.map((filter) => (
          <p
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`font-semibold text-lg md:text-xl cursor-pointer px-4 py-2 ${
              activeFilter === filter.id ? "border-b-4 border-orange-500 text-black" : "text-zinc-600"
            }`}
          >
            {filter.value}
          </p>
        ))}
      </div>

      <div className='flex flex-wrap justify-center md:gap-14 sm:gap-28 gap-y-10 w-full'>
        {/* cards */}
       { (activeFilter == 1 ? menFilter :activeFilter == 2 ? boyFilter: activeFilter == 3?womenFilter :[])
        .map((card :any)=>(
         <div className='md:w-[32%] max-w-72  sm:w-[48%] w-full group space-y-2' key={card.id}>
          <div className='md:h-96 h-72 relative overflow-hidden'>
            <div className='absolute text-red-500  text-2xl w-max top-3 right-3 z-20'><FaRegHeart />
            </div>
            {!card.Available && <div className='absolute text-white font-medium text-center text-lg py-2 px-8 bottom-0 right-0 w-full bg-[#ff08007c] font-mono z-20'> Sold Out
              </div>}
            
          <Image 
              src={card.img} 
              alt={"img"} 
              width={500} 
              height={500} 
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 z-10 duration-300"
            />
          </div>
          {card.type && <div className=' text-white font-medium  text-center text-md py-1 px-3 w-max bg-orange-500 group-hover:bg-black duration-200 '>{card.type}
            </div>}
            <p className='text-zinc-700 '>{card?.itemName}</p>
            <h4 className='text-xl font-bold  text-black'>{card?.price}</h4>
         </div>
        ))}
      </div>
      <div className='px-8 w-max mx-auto mt-10 py-3 md:text-xl text-sm font-bold bg-orange-600 cursor-pointer text-white  hover:bg-orange-800 duration-300'>View All</div> 

    </section>
  );
}
