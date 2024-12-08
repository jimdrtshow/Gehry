import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-white bg-my_color_9 hover:bg-my_color_6 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2  "
    >
      {children}
    </button>
  );
}
