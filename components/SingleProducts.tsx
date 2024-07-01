import React from "react";
// components
import Rating from "./Rating";
// Image
import Image from "next/image";
// redux
import { useAppDispatch } from "@/redux/hooks";
import { setcart } from "@/redux/counterSlice";

const SingleProducts = ({ singlePrdct }: { singlePrdct: any }) => {

  const dispatch =useAppDispatch()
  
  return (
    <div className="container mx-auto py-8">
      <section className="p-8 rounded-lg">
        {singlePrdct.map((item: any) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8"
            >
              <div className="flex bg-gray-100 rounded-md justify-center items-center">
                <Image
                  width={400}
                  height={800}
                  src={item.image}
                  alt="product"
                  className=" p-5 mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
                  <h2 className="text-sm font-semibold uppercase mb-4 text-gray-600">
                    {item.category}
                  </h2>
                  <div className="mb-4">
                    <Rating items={item} />
                  </div>
                  <div className="font-bold text-xl text-gray-800 mb-4">{`$${item.price}`}</div>
                </div>
                <div className="flex space-x-3">
                  <div
                    onClick={() => dispatch(setcart(item))}
                    className="px-2 font-medium rounded-md py-1 text-black text-md cursor-pointer bg-[#FFD814] hover:bg-[#FFA41C]"
                  >
                    Add to Cart
                  </div>
                  <div className="px-2 font-medium rounded-md py-1 text-black text-md cursor-pointer bg-[#FFA41C] hover:bg-[#FFD814]">
                    Buy Now
                  </div>
                </div>
                <div>
                  <strong className="block mb-1">Description:</strong>
                  <p className="text-md text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SingleProducts;
