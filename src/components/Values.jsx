import React from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";

const Values = () => {
  return (
    <div className="container mx-auto px-20 max-lg:px-10">
      <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 justify-items-center">
        <div className="bg-[#f3f5f7] px-6 py-10 min-w-52">
          <CiDeliveryTruck className="text-5xl"></CiDeliveryTruck>
          <h3 className=" text-lg font-semibold pt-2">Free Shipping</h3>
          <span className="text-sm text-gray-500">Order above $200</span>
        </div>
        <div className="bg-[#f3f5f7] px-6 py-10 min-w-52">
          <CiMoneyCheck1 className="text-5xl"></CiMoneyCheck1>
          <h3 className=" text-lg font-semibold pt-2">Money-back</h3>
          <span className="text-sm text-gray-500">30 days guarantee</span>
        </div>
        <div className="bg-[#f3f5f7] px-6 py-10 min-w-52">
          <CiLock className="text-5xl"></CiLock>
          <h3 className=" text-lg font-semibold pt-2">Secure Payments</h3>
          <span className="text-sm text-gray-500">Secured by Stripe</span>
        </div>
        <div className="bg-[#f3f5f7] px-6 py-10 min-w-52">
          <PiPhoneLight className="text-5xl"></PiPhoneLight>
          <h3 className=" text-lg font-semibold pt-2">24/7 Support</h3>
          <span className="text-sm text-gray-500">Phone and Email support</span>
        </div>
      </div>
    </div>
  );
};

export default Values;
