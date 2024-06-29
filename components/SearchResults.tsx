import React from "react";
import Card from "./Card";
import Link from "next/link";

const SearchResults = ({ filterData }: { filterData: any }) => {
  console.log(filterData);

  return (
    <div>
      <section className="mt-[3rem] ml-[7rem]">
        <div className=" space-y-3">
          <h2 className="text-2xl font-semibold">
            Results: {filterData.length}
          </h2>
          <p>
            Price and other details may vary based on product size and color
          </p>
          <div className="grid grid-cols-4 gap-3">
            {filterData.map((items: any, index: number) => {
              return (
                <Link href={`/clickedproduct/${items.id}`}>
                  <Card items={items} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResults;
