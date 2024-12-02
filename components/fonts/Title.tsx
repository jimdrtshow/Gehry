import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-6xl font-medium tracking-tight">
      {children}
    </h1>
  );
}
