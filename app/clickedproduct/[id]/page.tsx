"use client";
import SingleProducts from "@/components/SingleProducts";
import { useSuperbase } from "@/lib/superbase/hooks/useSuperbase";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import ship from "@/public/ship.png";
const page = () => {
  const { id } = useParams();
  const { singlePrdct, getsingleProduct } = useSuperbase();
  useEffect(() => {
    getsingleProduct(Number(id));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center object-cover">
        <Image src={ship} alt="ship_logo" width={600} height={100} />
      </div>
      <div>
        <SingleProducts singlePrdct={singlePrdct} />
      </div>
    </div>
  );
};

export default page;
