"use client";
import { getCart } from "@/redux/counterSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  const cartItems = useAppSelector(getCart);

  return (
    <div className="px-[6%] pt-[2rem] space-y-8 ">
      <h1 className="text-3xl font-bold">Cart items: {cartItems.length}</h1>
      <hr />
      {cartItems.map((item: any) => {
        return (
          <div key={item.id} className="flex  justify-between items-start">
            {/* product  */}
            <div className="flex space-x-7 ">
              {/* image */}
              <div className="">
                <Image
                  src={item.image}
                  alt="product"
                  className="p-2 mix-blend-multiply"
                  width={150}
                  height={200}
                />
              </div>
              {/* imageLeft text */}
              <div className="space-y-5 ">
                <h1 className="text-2xl font-bold">{item.title}</h1>

                <p className="text-sm text-green-500 font-bold">In stoke</p>
                <div className="flex items-center space-x-3">
                  <button className="px-2 py-1 bg-red-500  text-white font-semibold rounded-md">
                    Remove
                  </button>
                  <button className="px-2 py-1 bg-green-500  text-white font-semibold rounded-md">
                    Buy
                  </button>
                </div>
               
                  <div className="bg-gray-100 w-fit flex items-center  space-x-4 px-2 py-1 rounded-md">
                    <div className="font-bold  text-2xl cursor-pointer">+</div>
                    <div className="font-bold  text-xl ">0</div>
                    <div className="font-bold  text-2xl cursor-pointer">-</div>
                  </div>
                </div>
             
            </div>
            {/* price */}
            <div>
              <h1 className="font-bold text-xl">{`$${item.price}`}</h1>
              <p className="line-through text-red-500 text-xs ">M.R.P $3,99,500</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
// id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, … }
// ​​
// category: "men's clothing"
// ​​
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// ​​
// id: 1
// ​​
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// ​​
// price: 109.95
// ​​
// rating: '{"rate": 3.9, "count": 120}'
// ​​
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
