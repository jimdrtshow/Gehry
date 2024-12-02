import React from "react";
import Title from "./fonts/Title";

export default function Title_container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-auto  ">
      <div className="w-full h-[10vh] border-t border-gray-500"></div>
      <div className="w-full h-auto flex items-center justify-start ">
        <Title>{children}</Title>
      </div>
    </div>
  );
}
