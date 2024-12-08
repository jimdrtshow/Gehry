"use client";

import React from "react";

export default function Form() {
  // Skip the reloading pages
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      message: formData.get("message"),
    };

    // Call at the API
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Form submitted!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pt-16  ">
      {/* Full Name  */}
      <div className="relative z-0 w-full mb-5 group mt-5">
        <input
          type="text"
          name="fullName"
          id="formFullName"
          className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="formFullName"
          className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full name
        </label>
      </div>
      {/* email  */}
      <div className="relative z-0 w-full mb-5 group mt-10">
        <input
          type="email"
          name="email"
          id="formEmail"
          className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="formEmail"
          className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your email address
        </label>
      </div>
      {/* Phone number  */}
      <div className="relative z-0 w-full mb-5 group mt-10">
        <input
          type="text"
          name="phoneNumber"
          id="formTel"
          className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="formTel"
          className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number
        </label>
      </div>
      {/* Message  */}
      <div className="relative z-0 w-full mb-5 group mt-16">
        <textarea
          name="message"
          id="formMessage"
          className="block py-4 px-0 w-full h-[10vh] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="formMessage"
          className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your message
        </label>
        {/* Submit  */}
        <div className="w-full h-[15vh]  flex items-center justify-end">
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
}
