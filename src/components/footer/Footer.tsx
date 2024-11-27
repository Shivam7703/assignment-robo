"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { logo } from "@/assets";

import { footer } from "@/data/wrapperData";

export default function Footer() {
  return (
    <div
      className="pt-5 bg-blue-900 md:px-16 w-full  text-white md:pt-12"
    >
      {/* NewsLetter Section  */}
      <div className="mb-5 flex w-full justify-between gap-3 border-b border-white max-sm:flex-wrap md:pb-8">
        <Image
          src={logo}
          alt="logo"
          className="h-16 max-h-16 w-min object-contain md:h-20"
        />
        <p className="mb-4 max-w-[400px] text-wrap max-sm:mt-3 max-sm:!w-[80vw]">
       {footer?.text} 
        </p>
      </div>
      {/* Footer links section  */}
      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list1?.title}</h4>
          <ul>
            {footer?.list1?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
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
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
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
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
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
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
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
              className="w-full rounded-full border-none py-4 pl-5 text-sm outline-none"
            />
            <button
              className="!rounded-full !px-8"
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
          <div className="flex-center gap-x-2 text-3xl text-white">
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
    </div>
  );
}