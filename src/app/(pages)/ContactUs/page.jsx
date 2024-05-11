import React from "react";
import Sales from "@/components/Sales";
import ContactSections from "./ContactSections";
import GetInTouch from "./GetInTouch";
import Values from "@/components/Values";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div className="container mx-auto px-20 max-lg:px-10">
        <div>
          <div className="flex items-center text-[#545454] my-4 max-sm:text-sm">
            Home
            <MdOutlineKeyboardArrowRight className="mx-4 max-sm:text-sm"></MdOutlineKeyboardArrowRight>
            <span className="text-black">Contact Us</span>
          </div>
          <h2 className="text-5xl font-semibold pt-4 w-[70%] max-md:text-3xl max-md:w-full">
            We believe in sustainable decore. we're passionate about life at
            home.
          </h2>
          <p className="w-[80%] py-4">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <Sales />
        <ContactSections />
        <GetInTouch />
      </div>
      <div className="bg-[#f3f5f7]">
        <Values />
      </div>
    </div>
  );
};

export default ContactUs;
