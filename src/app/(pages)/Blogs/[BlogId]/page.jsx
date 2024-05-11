import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoTodayOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import data from "../../../(utils)/blogs.json";
import Article from "../../../../components/Article";

const page = () => {
  return (
    <div className="container mx-auto px-20 max-lg:px-10">
      <div>
        <div className="flex items-center text-[#545454] my-4">
          Home
          <MdOutlineKeyboardArrowRight className="mx-4 max-sm:mx-2"></MdOutlineKeyboardArrowRight>
          <span className="text-black">Contact Us</span>
        </div>
        <h2 className="text-4xl font-semibold pt-4 w-[70%] max-md:w-full max-md:text-3xl">
          How to make a busy bathroom a place to relax
        </h2>
        <div className="flex py-4 gap-4 text-[#6C7275] max-md:text-sm">
          <span className="flex items-center gap-2">
            <CgProfile />
            Henrik Annemark
          </span>
          <span className="flex items-center gap-2">
            <IoTodayOutline />
            Octoper 6,2023
          </span>
        </div>
      </div>
      <div>
        <img src="/Images/BlogsPost4.png"></img>
        <div className="py-6">
          <p className="text-sm">
            Your bathroom serves a string of busy functions on a daily basis.
            See how you can make all of them work, and still have room for
            comfort and relaxation.
          </p>
          <h3 className="text-2xl font-semibold py-2">
            A cleaning hub with built-in ventilation
          </h3>
          <p className="text-sm">
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-4 justify-between mb-6 max-md:block">
          <div className="flex-1">
            <img className="w-full pb-3" src="/Images/BlogsPost3.png" alt="" />
            <div>
              <h3 className=" text-2xl font-semibold pb-2">
                Storage with a calming effect
              </h3>
              <p className="text-sm">
                Having a lot to store doesn’t mean it all has to go in a
                cupboard. Many bathroom items are better kept out in the open –
                either to be close at hand or are nice to look at. Add a plant
                or two to set a calm mood for the entire room (and they’ll
                thrive in the humid air).
              </p>
            </div>
          </div>
          <div className="flex-1 max-md:pt-6">
            <img className="w-full pb-2" src="/Images/BlogsPost3.png" alt="" />
            <div>
              <h3 className="text-2xl font-semibold pb-2">
                Kit your clutter for easy access
              </h3>
              <p className="text-sm">
                Even if you have a cabinet ready to swallow the clutter, it’s
                worth resisting a little. Let containers hold kits for different
                activities – home spa, make-up, personal hygiene – to bring out
                or put back at a moment’s notice.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 max-md:block">
          <div className="flex-1">
            <img src="/Images/BlogsPost1.png"></img>
          </div>
          <div className="flex-1 max-md:pt-3">
            <h3 className=" text-2xl font-semibold pb-2">
              An ecosystem of towels
            </h3>
            <p className="text-sm">
              Racks or hooks that allow air to circulate around each towel
              prolong their freshness. They dry quick and the need for frequent
              washing is minimized.
            </p>
            <h3 className=" text-2xl font-semibold pb-2">
              Make your mop disappear
            </h3>
            <p className="text-sm">
              Having your cleaning tools organized makes them easier to both use
              and return to. When they’re not needed, close the curtain and feel
              the peace of mind it brings.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex justify-between mb-8 items-end">
          <h2 className="text-4xl max-lg:text-3xl max-sm:text-2xl">
            You might also like
          </h2>
          <button className="py-1 h-fit border-b-2 border-black cursor-pointer flex items-center font-medium">
            More Articles <GoArrowRight className="ml-[5px]"></GoArrowRight>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center">
          {data.slice(0, 3).map((blog) => (
            <Article
              key={blog.id}
              id={blog.id}
              image={blog.image}
              description={blog.description}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
