"use client";
import Image from "next/image";
import Container from "@/components/Container";
import Super_title from "@/components/fonts/Super_title";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import React from "react";
import clsx from "clsx";

export default function Hero_app() {
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="w-screen h-screen relative -z-10 flex items-center justify-center bg-black text-my_color_1  ">
      {/* Background Image  */}
      <Image
        src="/images/hero.jpg"
        alt="House Wallpaper 4k"
        fill
        className="opacity-50 object-cover"
      />
      {/* Container Component for Margin */}
      <Container>
        {/* Flex container   */}
        <div className="w-full h-full lg:flex flex-row z-10 relative">
          {/* Block 1  */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-end justify-start ">
            <div>
              <div className="w-full h-auto">
                <h1
                  // ref={subTitleRef}
                  className="text-4xl md:text-6xl lg:text-[4.236rem] font-medium tracking-tight "
                >
                  <span
                    className={clsx("block", {
                      "opacity-0": !visible,
                      "transition-opacity duration-700 opacity-1000 ": visible,
                    })}
                  >
                    An ambitious architectural firm from Milan
                  </span>
                </h1>
              </div>
              <div className="w-full h-[20vh] hidden lg:flex items-end justify-start">
                <div className="relative z-50 text-my_color_1 bg-transparent border border-my_color_5 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2  ">
                  <Link className="text-[1rem]" href="#">
                    scroll for more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Block 2  */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-end justify-end  ">
            {/* <Image
              src="images/logo2.svg"
              alt="Logo test"
              width={600}
              height={600}
            /> */}
          </div>
        </div>
      </Container>
    </header>
  );
}
