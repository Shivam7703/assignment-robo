"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import {  logo3, border} from "@/assets";

import { footer } from "@/data/wrapperData";

export default function Footer() {
  return (
    <footer
      className="pt-5 bg-orange-800 md:px-16 p-7 w-full  text-white md:pt-9 relative" >
        
      {/* NewsLetter Section  */}
      <div className=" flex w-full justify-between gap-3 border-b-2 border-white max-sm:flex-wrap pb-5">
        <Image
          src={logo3}
          alt="logo"
          className="h-16 max-h-16 w-min object-contain md:h-20"
        />
        <p className="mb-4 max-w-2xl text-wrap max-sm:mt-3 max-sm:!w-full ">
       {footer?.text} 
        </p>
      </div>
      <div className="max-w-80 w-full bg-orange-800 mx-auto sticky -mt-4 mb-5">  <Image
          src={border}
          alt="border"
          className="w-full"
        /></div>
      {/* Footer links section  */}
      <div className="grid  pb-5 grid-cols-2 md:grid-cols-4 gap-y-2 lg:grid-cols-5">
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list1?.title}</h4>
          <ul>
            {footer?.list1?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-1 hover:font-medium hover:text-orange-300 duration-200"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list2?.title}</h4>
          <ul>
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-1 hover:font-medium hover:text-orange-300 duration-200"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list3?.title}</h4>
          <ul>
            {footer?.list3?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-1 hover:font-medium hover:text-orange-300 duration-200"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list4?.title}</h4>
          <ul>
            {footer?.list4?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-1 hover:font-medium hover:text-orange-300 duration-200"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
       
        <div className="col-span-2 flex flex-col max-lg:hidden lg:col-span-1">
          <h4 className="my-2 mb-3 text-xl font-semibold">
            {footer?.newLetter?.title}
          </h4>
          <p>{footer?.newLetter?.description}</p>
          <form action="" className="my-5 flex w-full flex-col gap-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full rounded-full border-none py-2 px-6 text-black text-sm outline-none"
            />
            <button
              className="rounded-lg !px-8 py-2 bg-black text-sm hover:bg-white hover:text-black duration-200"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* copyright  */}
      <div className="flex items-center justify-between border-t border-white py-5 max-md:flex-col">
        <p className="text-center text-sm">{footer?.copyrightText}</p>
        {/* Socials  */}
        {footer?.socials && (
          <div className="flex-center gap-x-2 max-md:mt-3 flex text-3xl text-white">
            {footer?.socials?.facebook && (
              <FaFacebook
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.facebook, "_blank")}
              />
            )}
            {footer?.socials?.instagram && (
              <AiFillInstagram
                className="social-icon text-xl"
                onClick={() =>
                  window.open(footer?.socials?.instagram, "_blank")
                }
              />
            )}
            {footer?.socials?.linkedin && (
              <FaLinkedinIn
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.linkedin, "_blank")}
              />
            )}
            {footer?.socials?.youtube && (
              <TbBrandYoutubeFilled
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.youtube, "_blank")}
              />
            )}
            {footer?.socials?.twitter && (
              <FaXTwitter
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.twitter, "_blank")}
              />
            )}
          </div>
        )}
      </div>
      <div className="w-full h-4 "></div>
    </footer>
  );
}
