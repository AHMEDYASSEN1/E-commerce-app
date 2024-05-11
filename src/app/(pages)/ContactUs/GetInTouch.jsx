import React from "react";

const GetInTouch = () => {
  return (
    <div className="flex gap-6 my-10 max-sm:flex-col-reverse">
      <div className="flex-1">
        <label className="text-[#6C7275] font-medium block text-sm">
          FULL NAME
        </label>
        <input
          className="border-[#6C7275] border-[1px] px-2 py-1 rounded-md mb-4 mt-2 w-full"
          placeholder="Your Name"
        ></input>
        <label className="text-[#6C7275] font-medium block text-sm">
          EMAIL ADDRESS
        </label>
        <input
          className="border-[#6C7275] border-[1px] px-2 py-1 rounded-md mb-4 mt-2 w-full"
          placeholder="Your Email"
        ></input>
        <label className="text-[#6C7275] font-medium block text-sm">
          MESSAGE
        </label>
        <textarea
          className="border-[#6C7275] border-[1px] px-2 py-1 rounded-md mb-4 mt-2 w-full h-28"
          placeholder="Your message"
        ></textarea>
        <button className="bg-black text-white py-2 px-10 rounded-lg">
          Send Message
        </button>
      </div>
      <div className="flex-1 text-white">
        <img className="h-full m-auto" src="/Images/blog-1.png"></img>
      </div>
    </div>
  );
};

export default GetInTouch;
