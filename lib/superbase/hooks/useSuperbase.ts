import { useState } from "react";
import { superbase } from "../products";

export const useSuperbase = () => {
  const [products, setproducts] = useState<any>([]);
  const [filterData, setfilterData] = useState<any>([]);
  const [singlePrdct, setsinglePrdct] = useState<any>([]);
  const getDataFromSuperbase = async () => {
    let { data, error } = await superbase.from("products").select("*");
    if (data) {
      setproducts(data);
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };
  const getFilterData = async (query: string) => {
    const { data, error } = await superbase
      .from("products")
      .select("*")
      .or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);
    if (data) {
      setfilterData(data);
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };
  const getsingleProduct = async (id: number) => {
    const { data, error } = await superbase
      .from("products")
      .select("*").eq('id', id)
      
    if (data) {
      setsinglePrdct(data);
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };
  return {
    products,
    getDataFromSuperbase,
    getFilterData,
    filterData,
    singlePrdct,
    getsingleProduct,
  };
};
