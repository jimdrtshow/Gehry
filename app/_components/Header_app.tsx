import Image from "next/image";
import React from "react";

export default function Header_app() {
  return (
    <header className="w-screen h-screen  -z-10 flex items-center justify-center bg-black text-my_color_1  ">
      {/* Background Image  */}
      <Image
        src="/images/hero.jpg"
        alt="#"
        fill
        className="opacity-50 object-cover"
      />
      <div className="w-11/12 h-5/6 z-10 ">
        <div className="w-full h-full flex flex-col items-center justify-around">
          <h1 className="text-[2.618rem] md:text-[4.236rem] lg:text-[6.854rem] ">
            An ambitious architectural firm from Milan
          </h1>
          {/* Update */}
          <button>
            <p>button</p>
          </button>
        </div>
      </div>
    </header>
  );
}
