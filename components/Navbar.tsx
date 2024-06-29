"use client";
import React, { useState } from "react";
import Image from "next/image";
// importing from public
import logo from "@/public/amazon-logo-2.webp";
// Importing from rect icons
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiMenuSearchFill } from "react-icons/ri";
// import constants--item list
import { items } from "@/constants/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const [query, setquery] = useState<string>("");
  const route = useRouter();
  const handleSearch = () => {
    route.push(`/search/${query}`);
  };
  return (
    <div className="">
      {/* Navbar */}
      <section>
        <div className="flex items-center justify-between text-white px-[4%] py-2 bg-[#131921]">
          {/* logo */}
          <div className="w-[6rem] cursor-pointer">
            <Link href={`/`}>
              <Image alt="logo" src={logo} />
            </Link>
          </div>
          {/* Search */}
          <div className="flex items-center justify-center w-[40rem]">
            <div className="flex items-center justify-between space-x-1 bg-[#E6E6E6] p-2 rounded-l-sm cursor-pointer">
              <span className="text-black">All</span>
              <span>
                <IoMdArrowDropdown className="text-black" />
              </span>
            </div>
            <div className="w-full">
              <input
                value={query}
                onChange={(e) => setquery(e.target.value)}
                type="text"
                className="w-full outline-none p-2 text-black text-md"
                placeholder="Search Amazon"
              />
            </div>
            <div
              onClick={handleSearch}
              className="bg-[#F3A847] p-2 rounded-r-sm cursor-pointer hover:bg-[#df912c]"
            >
              <span>
                <IoSearchSharp size={24} className="text-black" />
              </span>
            </div>
          </div>
          {/* cart */}
          <div className="flex space-x-3">
            <div className="border border-transparent hover:border-white p-1 cursor-pointer">
              <div className="text-xs">Helllo,sign in</div>
              <h2 className="text-sm font-semibold">Accounts & Lists</h2>
            </div>
            <div className="border border-transparent hover:border-white p-1 cursor-pointer">
              <div className="text-xs">Returs</div>
              <h2 className="text-sm font-semibold">& Orders</h2>
            </div>
            <div className="border border-transparent hover:border-white p-1 cursor-pointer flex items-end">
              <div className="relative">
                <span className="absolute  top-[-0.66rem] right-2 text-[#F3A847]">
                  0
                </span>
                <span>
                  <PiShoppingCartSimpleLight size={35} />
                </span>
              </div>
              <h2 className="text-sm font-semibold">Cart</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Item list */}
      <section>
        <div className="flex items-center justify-between bg-[#232F3E] px-[1rem]">
          <div className="flex items-center justify-start space-x-2">
            <span className="p-1 cursor-pointer border border-transparent hover:border-white">
              <RiMenuSearchFill size={26} className="text-white" />
            </span>
            {items.map((item, index) => {
              return (
                <span
                  key={index}
                  className="border border-transparent hover:border-white p-1 text-sm text-white cursor-pointer "
                >
                  {item.title}
                </span>
              );
            })}
          </div>
          <div className="px-1 font-semibold rounded-sm py-1 text-black text-xs cursor-pointer bg-[#F3A847]">
            Sign out
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
