import React from "react";
// icons
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ items }: { items: any }) => {
  const rating = JSON.parse(items.rating);
  return (
    <div>
      <section className="space-x-2 flex items-center">
        <span className="flex">
          {Array(Math.floor(rating.rate))
            .fill(1)
            .map((e) => {
               return(
                   <FaStar className="text-[#FFA41C]" />
                )        
            })}

          {Math.floor(rating.rate) < rating.rate ? (
            <FaStarHalfAlt className="text-[#FFA41C]" />
          ) : null}
        </span>
        <span className="text-[#4A7585]">{rating.count}</span>
      </section>
    </div>
  );
};

export default Rating;
