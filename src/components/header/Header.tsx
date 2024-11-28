"use client";

import React, { useState, useEffect } from "react";
// import Link from "next/link";
import { shape3, shape4, logo } from "@/assets";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import {  IoLocation, IoMailOpen, IoMenu } from "react-icons/io5";
// import { MdOutlinePerson } from "react-icons/md";
import Image from "next/image";
// import { useRouter, usePathname } from "next/navigation";

import { header } from "@/data/wrapperData";

import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineWifiCalling3 } from "react-icons/md";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  // const pathname = usePathname();
  // const router = useRouter();
  // const getBasePath = (url: string) => {
  //   const urlSegments = url.split("/");
  //   return `/${urlSegments[1]}`;
  // };

  useEffect(() => {
    if (header?.navItems) {
      setNavItems(header.navItems);
    }
  }, [header?.navItems]);

  // useEffect(() => {
  //   const activeItem =
  //     navItems.find((item) => item.href === getBasePath(pathname)) ||
  //     navItems.find((item) =>
  //       item.subNav?.some(
  //         (subItem: { href: string }) => subItem.href === getBasePath(pathname),
  //       ),
  //     );
  //   if (activeItem) {
  //     setActiveItemId(activeItem.id.toString());
  //   } else {
  //     setActiveItemId(null);
  //   }
  // }, [pathname, navItems]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
          setShow("-translate-y-[119px]");
        } else {
          setShow("shadow-sm");
        }
      } else {
        setShow("translate-y-0");
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, isMobileMenuOpen]);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (itemId: string, href: string) => {
    setActiveItemId(itemId);
    setIsMobileMenuOpen(false);
    // router.push(href);
  };

  return (
    <header
      className={`fixed top-0 z-50 md:h-20 h-24 w-full  transition-transform duration-300  ${show}`}
    >
      <div className="flex justify-center md:justify-between flex-wrap lg:px-28 md:px-16 max-md:hidden py-2 bg-orange-800 text-white">
        <div className="flex gap-4"><p className="flex"><IoMailOpen className="text-xl" /> &nbsp; info@website.com
        </p> <p className="flex"><MdOutlineWifiCalling3 className="text-xl"/> &nbsp; +9123443343444  </p></div>

        <div className="flex gap-4 max-sm:hidden"><p className="flex"><IoLocation 
        className="text-xl" /> &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p></div>
      </div>
      <div className="flex w-full bg-white h-full items-end justify-center gap-3 max-sm:pt-2 pb-2 ">
      <Image src={shape3} alt="logo" className="max-h-28 max-w-28 -mt-4 mb-3 w-[15vw]"/>
      <Image src={logo} alt="logo" className="max-h-28 max-w-80 w-[35vw]"/>
      <Image src={shape4} alt="logo" className="max-h-28 max-w-28 -mt-4 mb-3 w-[15vw]"/>
      </div>
      <div
       
        className="no-scrollbar bg-orange-900 text-white overflow-x-auto lg:px-20 md:px-12 px-4 max-md:hidden"
      >
        <Menu
          navItemsArray={navItems}
          activeItemId={activeItemId}
          onItemClick={handleNavItemClick}
        />
      </div>
      {/* Mobile Section */}
      <div className="flex h-12 w-full items-center justify-between gap-3 px-5 bg-orange-900 text-white md:hidden">
        <div className="flex-center relative cursor-pointer rounded-full text-3xl md:hidden">
          {isMobileMenuOpen ? (
            <VscChromeClose onClick={handleMobileMenu} />
          ) : (
            <IoMenu onClick={handleMobileMenu} />
          )}
        </div>
        {/* Logo with Link */}
        
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-36 w-full md:hidden">
          <MenuMobile
            navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItemId}
          />
        </div>
      )}
    </header>
  );
};

export default Header;




