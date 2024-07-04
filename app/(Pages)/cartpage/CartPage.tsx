"use client";
import {
  getCart,
  setQuantityDecreament,
  setQuantityIncreament,
  setremove,
} from "@/redux/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CartPage = () => {
  const cartItems = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const router =useRouter()
  let totalAmount = 0;
  cartItems.forEach((item: any) => {
    totalAmount += item.price * item.quantity;
  });

  return (
    <div className="px-[6%] py-[2rem] flex justify-between space-x-5">
      {/* left show cart*/}
      <section className="space-y-8 w-4/5">
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
                    <button
                      onClick={() => dispatch(setremove(item.id))}
                      className="px-2 py-1 bg-red-500  text-white font-semibold rounded-md"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="bg-gray-100 w-fit flex items-center  space-x-4 px-2 py-1 rounded-md">
                    <div
                      onClick={() =>
                        item.quantity &&
                        dispatch(setQuantityDecreament(item.id))
                      }
                      className="font-bold  text-2xl cursor-pointer"
                    >
                      -
                    </div>
                    <div className="font-bold  text-xl ">{item.quantity}</div>
                    <div
                      onClick={() => dispatch(setQuantityIncreament(item.id))}
                      className="font-bold  text-2xl cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
              {/* price */}
              <div>
                <h1 className="font-bold text-xl">{`$${
                  item.price * item.quantity
                }`}</h1>
                <p className="line-through text-red-500 text-xs ">
                  M.R.P $3,99,500
                </p>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="flex justify-end">
          <h1 className="text-xl font-bold">
            Total amount: {`$${totalAmount}`}
          </h1>
        </div>
      </section>
      {/* right buy */}
      <section className="border p-2 w-1/5">
        <div className="">
          <span className="font-semibold text-green-500">
            Your order is eligible for FREE Delivery
          </span>
          <span>
            {" "}
            {`Choose FREE Delivery option at checkout. Subtotal (${cartItems.length}):`}
          </span>
          <span className="font-semibold text-lg">{`$${totalAmount}`}</span>
        </div>
        <div
          onClick={() => router.push("/checkout")}
          className="px-2 text-center font-bold duration-300 rounded-md py-1
          text-black text-md cursor-pointer bg-[#FFD814] hover:bg-[#FFA41C]
          mt-[1rem]"
        >
          Proceed to Buy
        </div>
      </section>
    </div>
  );
};

export default CartPage;
