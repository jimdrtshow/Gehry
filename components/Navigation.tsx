"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import nav_items from "@/data/nav_items";

import Image from "next/image";

export default function Navigation() {
  const [menuPhoneOpen, setMenuPhoneOpen] = React.useState(false);

  return (
    <nav>
      {/* NAVBAR */}
      <div className=" w-screen h-[7vh]  fixed top-0 flex justify-center items-center z-50  text-my_color_1 backdrop-blur-sm bg-black/30  ">
        <div className="w-11/12 h-5/6 ">
          <div className=" w-full h-full flex justify-between items-center   ">
            <div className="w-2/6 lg:w-1/6 h-full flex items-center justify-start relative">
              <Image
                src="/images/logo.svg"
                alt="Gehry logo exemple"
                width={100}
                height={100}
              />
            </div>
            <div className="w-5/6 h-full hidden lg:flex items-center justify-end ">
              <ul className="inline-flex">
                {nav_items.map((item, index) => (
                  <li key={index} className="p-5">
                    <Link
                      href={item.href}
                      className="text-my_color_1 hover:text-my_color_7 text-[1.10rem]   flex items-start justify-between "
                    >
                      <span className="text-my_color_4 text-[0.618rem] pr-3">
                        0{index + 1}
                      </span>
                      {item.label}.
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/6 h-full flex lg:hidden items-center justify-end">
              {/* <Paragraph>Menu</Paragraph> */}
              <button
                onClick={() => {
                  setMenuPhoneOpen(!menuPhoneOpen);
                }}
              >
                <p className="text-lg tracking-widest">
                  {menuPhoneOpen ? "Close" : "Menu"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MENU PAGE  */}
      <div
        className={clsx(
          "w-screen h-[95vh] top-[10vh] fixed z-50 bg-my_color_1 justify-center items-center",
          {
            hidden: !menuPhoneOpen,
            flex: menuPhoneOpen,
          }
        )}
      >
        <div className="w-11/12 h-5/6 ">
          <div className="w-full h-full flex justify-start items-start">
            <ul className="flex flex-col">
              {nav_items.map((item, index) => (
                <li key={index} className="p-7 ">
                  <Link
                    onClick={() => {
                      setMenuPhoneOpen(!menuPhoneOpen);
                    }}
                    href={item.href}
                    className="text-black text-xl flex items-start justify-start"
                  >
                    <span className="text-gray-600 text-xs pr-3">
                      0{index + 1}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
