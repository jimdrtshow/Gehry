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
    <div className="w-auto h-auto">
      <div className="w-auto h-auto absolute pt-5 pb-5">
        <p>{children1}</p>
      </div>
      <div className="w-full h-auto  ">
        <div className="w-full h-[10vh] border-t border-gray-500"></div>
        <div className="w-full h-auto flex items-center justify-start ">
          <h1 className="text-3xl md:text-6xl font-medium tracking-tight">
            {children2}
          </h1>
        </div>
      </div>

      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center justify-start pt-20  ">
          <h2 className="text-xl font-bold md:text-2xl">{children3}</h2>
        </div>
        <div className="w-full h-auto flex items-center justify-start pt-5  ">
          <p>{children4}</p>
        </div>
      </div>
    </div>
  );
};
export default Hero_section;