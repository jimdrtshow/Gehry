import Image from "next/image";
import React from "react";

export default function Header_app() {
  return (
    <header className="w-screen h-screen relative -z-10 flex items-center justify-center bg-black text-my_color_1  ">
      {/* Background Image  */}
      <Image
        src="/images/hero.jpg"
        alt="#"
        fill
        className="opacity-50 object-cover"
      />
      <div className="w-full h-full flex flex-col items-center justify-around z-0">
        <h1>An ambitious architectural firm from Milan</h1>
        {/* Update */}
        <button>
          <p>button</p>
        </button>
      </div>
    </header>
  );
}
