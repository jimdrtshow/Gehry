import React from "react";

export default function Super_title({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-8xl md:text-7xl  font-black tracking-tighter">
      {children}
    </p>
  );
}
