import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Menu = ({ navItemsArray, activeItemId, onItemClick }: any) => {
  return (
    <ul className="hidden items-center w-max py-3  gap-x-2 lg:gap-x-7  text-nowrap font-medium text-white md:flex">
      {navItemsArray?.map((item: any) => (
        <li key={item?.id} className="group relative transition-all">
          <Link
            href={item?.href || "#"}
            className="flex cursor-pointer items-center"
            onClick={() => onItemClick(item.id, item.href)}
          >
            <span
              className={` px-1 transition-all duration-300  !text-md hover:text-orange-300 ${activeItemId === item.id.toString() ? "text-orange-300 border-b-2 border-orange-300" : ""}`}
            >
              {item?.label}
            </span>
            {item?.subNav && item.subNav?.length !== 0 && (
              <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
            )}
          </Link>
          {/* dropdown */}
          {item.subNav && (
            <div className="absolute left-0 top-[100%] z-30 hidden w-auto flex-col gap-1 rounded bg-white py-3 shadow-md transition-all group-hover:flex">
              {item.subNav.map((nav: any) => (
                <Link
                  key={nav.id}
                  href={nav.href || "#"}
                  className={`flex cursor-pointer items-center py-1 pl-2 pr-8 hover:bg-blue-500 hover:text-white ${activeItemId === nav.id.toString() ? "text-orange-500" : ""}`}
                  onClick={() => onItemClick(nav.id, nav.href)}
                >
                  <span className="whitespace-nowrap pl-3">{nav.label}</span>
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
