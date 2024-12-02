import React from "react";

export default function Sub_title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold md:text-2xl">{children}</h2>;
}
