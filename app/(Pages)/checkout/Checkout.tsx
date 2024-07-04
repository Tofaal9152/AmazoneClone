import React from "react";

const Checkout = () => {
  return (
    <div className="absolute top-0 z-50 bg-black h-full w-full">
      {/* Payment */}
      
      <section className="divcenter w-full h-full ">
        <div className="border border-slate-600 shadow-md shadow-slate-700 bg-gray-900 p-5 space-y-4 w-1/3 text-white">
          <h1 className="text-2xl text-orange-300 font-bold text-center">
            Order Summary
          </h1>
          <div className="flex items-center justify-between">
            <span>Items</span>
            <span className="font-bold">$456</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery</span>
            <span className="font-bold">$456</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="font-bold">$456</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Coupon applied</span>
            <span className="font-bold">$456</span>
          </div>
          <hr />
          <h1 className="text-xl font-bold text-red-500 flex items-center justify-between">
            <span>Order Total</span>
            <span>$564</span>
          </h1>
          <hr />
          <div
            className="px-2 text-center font-bold duration-300 rounded-md py-1
          text-black text-md cursor-pointer bg-[#FFD814] hover:bg-[#FFA41C]
          mt-[1rem]"
          >
            Place Your Order Now
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
