import Image from "next/image";
import React from "react";
import Rating from "@/app/Components/Ratings/Rating";
import { useAppDispatch } from "@/redux/hooks";
import { setcart } from "@/redux/counterSlice";
import { useRouter } from "next/navigation";

const HomePageCard = ({ value }: { value: any }) => {
    const dispatch =useAppDispatch()
    const router =useRouter()
  return (
    <>
      {value.map((item: any) => {
        return (
          <div className="bg-slate-50 flex flex-col space-y-5 p-5 shadow-xl cursor-pointer shadow-slate-200 rounded-md">
            <div
              onClick={() => router.push(`/clickedproduct/${item.id}`)}
              className="w-[250px] h-[250px] flex items-center justify-center"
            >
              <Image
                className="mix-blend-multiply p-5"
                src={item.image}
                alt="ada"
                width={200}
                height={200}
              />
            </div>
            <div className="space-y-3">
              <h1
                onClick={() => router.push(`/clickedproduct/${item.id}`)}
                className="font-semibold text-xl"
              >
                {item.title}
              </h1>
              <Rating items={item} />
              <h1 className="font-bold text-lg">{`$${item.price}`}</h1>
            </div>
            <div
              onClick={() => dispatch(setcart(item))}
              className="px-2 text-center font-bold duration-300 rounded-md py-1
          text-black text-md cursor-pointer bg-[#FFD814] hover:bg-[#FFA41C]
          mt-[1rem]"
            >
              Add to Cart
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HomePageCard;
