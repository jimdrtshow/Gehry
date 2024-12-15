"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function HeroServices() {
  return (
    <section className="w-screen h-screen lg:flex  bg-my_color_1  ">
      {/* BLOCK 1 */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center  ">
        <div className="w-11/12 h-5/6">
          {/* TITLE */}
          <div className="w-full h-3/4 flex items-center lg:items-start justify-start ">
            <h1 className="text-5xl md:text-7xl lg:text-8xl -tracking-wider p-2 ">
              Our Services elevate your space.
            </h1>
          </div>
          {/* DESCRIPTION */}
          <div className="w-full h-1/4 ">
            {/* DESCRIPTION BLOCK 2 (Button) */}
            <div className="w-full  h-full flex items-end justify-end ">
              <button className="  border-b-2 border-my_color_8  inline-flex justify-center items-center pl-2 pr-2 ">
                <FaPlus />
                <p className="text-lg p-2 ">more.</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 2  */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center ">
        {/* IMAGE */}
        <div className="w-11/12 h-5/6 relative">
          <Image
            src={"/images/services_app.jpg"}
            alt={"blabla"}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

{
}
