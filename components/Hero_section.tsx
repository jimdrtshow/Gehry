import React from "react";
interface Hero_section_props {
  children1: React.ReactNode;
  children2: React.ReactNode;
  children3: React.ReactNode;
  children4: React.ReactNode;
}

const Hero_section: React.FC<Hero_section_props> = ({
  children1,
  children2,
  children3,
  children4,
}) => {
  return (
    <div className="w-auto h-auto ">
      <div className="w-auto h-auto absolute pt-5 pb-5">
        <p className="text-[1rem] text-my_color_6 font-sans tracking-wider ">
          {children1}
        </p>
      </div>
      <div className="w-full h-auto  ">
        <div className="w-full h-[10vh]"></div>
        <div className="w-full h-auto pt-2">
          <h1 className="text-[1.618rem] md:text-[2.618rem] lg:text-[4.236rem]">
            {children2}
          </h1>
        </div>
      </div>

      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center justify-start pt-5 md:pt-10 ">
          <h2 className="text-[1rem] text-my_color_9 md:text-[1.618rem]">
            {children3}
          </h2>
        </div>
        <div className="w-full h-auto flex items-center justify-start pt-2  ">
          <p className="text-sm md:text-lg text-my_color_6 ">{children4}</p>
        </div>
      </div>
    </div>
  );
};
export default Hero_section;
