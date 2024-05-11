import React from "react";

const CheckOut = (props) => {
  return (
    <div className="container mx-auto px-20 max-lg:px-0 mb-20">
      <div className="w-full text-center my-10">
        <h2 className="text-3xl font-semibold">Check Out</h2>
      </div>
      <div className="border-[2px] border-[#909191] rounded-md p-4 w-[60%] max-md:w-[90%] max-sm:w-full m-auto">
        <div>
          <h2 className="text-xl font-semibold py-2">Contact Information</h2>
          <div className="flex items-center gap-4">
            <div className="w-full">
              <label className="text-sm font-medium text-[#6C7275] block">
                FIRST NAME
              </label>
              <input
                placeholder="First name"
                type="text"
                className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium text-[#6C7275] block">
                LAST NAME
              </label>
              <input
                placeholder="Last name"
                type="text"
                className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-[#6C7275] block">
              PHONE NUMBER
            </label>
            <input
              placeholder="Phone Number"
              type="text"
              className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-[#6C7275] block">
              EMAIL ADDRESS
            </label>
            <input
              placeholder="Your Email"
              type="text"
              className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold pt-4 pb-2">Shipping Address</h2>
          <div>
            <label className="text-sm font-medium text-[#6C7275] block">
              STREET ADDRESS
            </label>
            <input
              placeholder="Street Address"
              type="text"
              className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-[#6C7275] block">
              TOWN / CITY
            </label>
            <input
              placeholder="Town / City"
              type="text"
              className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-full">
              <label className="text-sm font-medium text-[#6C7275] block">
                STATE
              </label>
              <input
                placeholder="State"
                type="text"
                className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium text-[#6C7275] block">
                ZIP CODE
              </label>
              <input
                placeholder="Zip Code"
                type="text"
                className="py-2 px-4 rounded-md text-[#6C7275] border-[1px] border-[#929292] w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-black text-white py-2 px-6 rounded-lg shadow-sm hover:shadow-xl my-4 block m-auto w-[60%] max-md:w-[90%] max-sm:w-full"
        onClick={props.placeOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckOut;
