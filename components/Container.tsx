import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-11/12 h-5/6 ">{children}</div>;
}
