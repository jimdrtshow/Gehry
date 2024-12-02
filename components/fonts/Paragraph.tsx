import React from "react";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg md:text-xl tracking-wide leading-5 text-gray-700">
      {children}
    </p>
  );
}
