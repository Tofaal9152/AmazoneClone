"use client";
import { useSuperbase } from "@/lib/superbase/hooks/useSuperbase";
import Image from "next/image";
import React, { useEffect } from "react";
import Rating from "./Rating";
import HomePageCard from "./HomePageCard";

const Categorywise = () => {
  const { mensCategory, womensCategory, menCat, womenCat } = useSuperbase();
  useEffect(() => {
    mensCategory()
    womensCategory()
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <HomePageCard value={menCat} />
        <HomePageCard value={womenCat} />
        <HomePageCard value={menCat} />
        <HomePageCard value={womenCat} />
      </div>
    </div>
  );
};

export default Categorywise;
