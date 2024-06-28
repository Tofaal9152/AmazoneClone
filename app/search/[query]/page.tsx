"use client";
import SearchResults from "@/components/SearchResults";
import { useSuperbase } from "@/lib/superbase/hooks/useSuperbase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { query } = useParams();
  const { getFilterData, filterData } = useSuperbase();
  useEffect(() => {
    getFilterData(query.toString());
  }, []);
  return (
    <div>
      <SearchResults filterData={filterData}/>
    </div>
  );
};

export default page;
