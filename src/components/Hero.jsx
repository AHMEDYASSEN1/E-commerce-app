import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  const carouselItems = [
    "/Images/Paste image.png",
    "/Images/img.png",
    "/Images/Paste image--.png",
  ];

  return (
    <div className="container mx-auto px-20 max-lg:px-10">
      <div>
        <Carousel items={carouselItems}></Carousel>
      </div>
      <div className="py-8 flex items-center max-md:block">
        <div className="text-5xl flex-1 font-medium max-md:text-4xl">
          Simply Unique<span className="text-[#6C7275]">/</span>
          <br></br> Simply Better<span className="text-[#6C7275]">.</span>
        </div>
        <div className="w-[453px] text-[#6C7275] max-md:pt-4 max-md:w-fit">
          <b className="text-black">3legant</b> is a gift & decorations store
          base in HCMC, Vietnam. Est since 2019.
        </div>
      </div>
    </div>
  );
};

export default Hero;
