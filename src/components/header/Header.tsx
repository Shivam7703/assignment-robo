"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoLogOutOutline, IoMenu } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import Image from "next/image";
import { logo } from "@/assets";
import { useRouter, usePathname } from "next/navigation";

import { header } from "@/data/wrapperData";

import { FiShoppingCart } from "react-icons/fi";
import Logo from "../Logo";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const getBasePath = (url: string) => {
    const urlSegments = url.split("/");
    return `/${urlSegments[1]}`;
  };

  useEffect(() => {
    if (header?.navItems) {
      setNavItems(header.navItems);
    }
  }, [header?.navItems]);

  useEffect(() => {
    const activeItem =
      navItems.find((item) => item.href === getBasePath(pathname)) ||
      navItems.find((item) =>
        item.subNav?.some(
          (subItem: { href: string }) => subItem.href === getBasePath(pathname),
        ),
      );
    if (activeItem) {
      setActiveItemId(activeItem.id.toString());
    } else {
      setActiveItemId(null);
    }
  }, [pathname, navItems]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
          setShow("-translate-y-[85px]");
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
    router.push(href);
  };

  return (
    <header
      className={`fixed top-0 z-50 h-20 w-full bg-white transition-transform duration-300 md:h-20 ${show}`}
    >
      <div className="flex w-full items-center justify-between py-2 max-md:hidden">
        {/* Logo with Link */}
        <Logo />
        <div className="flex items-center gap-2 md:gap-4">
          <RoundedButton />
          <CartButton />
        </div>
      </div>
      <div
       
        className="no-scrollbar bg-gray-300 overflow-x-auto pl-2 max-md:hidden"
      >
        <Menu
          navItemsArray={navItems}
          activeItemId={activeItemId}
          onItemClick={handleNavItemClick}
        />
      </div>
      {/* Mobile Section */}
      <div className="flex h-20 w-full items-center justify-between gap-3 border-b border-gray-300 bg-white md:hidden">
        <div className="flex-center relative cursor-pointer rounded-full text-3xl text-blue-950 hover:bg-blue-500/5 md:hidden">
          {isMobileMenuOpen ? (
            <VscChromeClose onClick={handleMobileMenu} />
          ) : (
            <IoMenu onClick={handleMobileMenu} />
          )}
        </div>
        {/* Logo with Link */}
        <Logo />
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full md:hidden">
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

function RoundedButton() {
  return (
    <div className="flex items-center">
      <div className="z-10 h-16 w-16 rounded-full bg-black">
        <Image src={logo} alt="logo" height={100} width={100} />
      </div>
      <div className="-ml-2 rounded-e-full bg-black px-4 py-2 font-semibold text-white">
        Suzuki Swift VDI
      </div>
    </div>
  );
}

function CartButton() {
  return (
    <button className="flex items-center gap-2">
      <FiShoppingCart />
      <p>Cart</p>
    </button>
  );
}


