import React from "react";
// Components
import Rating from "@/app/Components/Ratings/Rating";
// Assets
import Image from "next/image";

const Card = ({ items }: { items: any }) => {
  
  return (
    <div>
      <section className="space-y-3 w-[270px] h-[600px]">
        <div className="bg-[#F7F7F7] w-[250px] h-[300px] text-center items-center flex rounded-md justify-center">
          <Image
            width={200}
            height={200}
            className="object-cover mix-blend-multiply p-5"
            alt="images of products"
            src={items.image}
          />
        </div>
        <h1 className="text-xl font-semibold">{`${items.title.substring(0,30)}...`}</h1>
        <p className="font-bold text-lg">{`$${items.price}`}</p>
        <div>
          <Rating items={items} />
        </div>
        

        <p className="flex flex-col">
          <strong>Description:</strong>
          <span>

          {`${items.description.substring(0, 100)}...`}
          <span className="text-xs font-medium">Read more</span>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Card;
