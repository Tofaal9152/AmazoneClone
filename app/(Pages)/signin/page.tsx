import Signin from "@/app/(Pages)/signin/Signin";
import React from "react";
import { BsAmazon } from "react-icons/bs";

const page = () => {
  return (
    <div className="absolute w-full flex-col h-screen bg-black  z-50 top-0 flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <span>
          <BsAmazon size={22} className="text-yellow-400" />
        </span>
        <span className="text-yellow-400 text-2xl font-bold">Log in</span>
      </div>
      <Signin />
    </div>
  );
};

export default page;
