import { useState } from "react";
import { superbase } from "../products";

export const useSuperbase = () => {
  const [products, setproducts] = useState<any>([]);
  const [filterData, setfilterData] = useState<any>([]);
  const [singlePrdct, setsinglePrdct] = useState<any>([]);
  const [menCat, setmenCat] = useState<any>([]);
  const [womenCat, setwomenCat] = useState<any>([]);
  const getDataFromSuperbase = async () => {
    let { data, error } = await superbase.from("products").select("*");
    if (data) {
      setproducts(data);
    } else if (error) {
      console.log(error);
    }
  };
  const getFilterData = async (query: string) => {
    const { data, error } = await superbase
      .from("products")
      .select("*")
      .or(
        `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
      );
    if (data) {
      setfilterData(data);
    } else if (error) {
      console.log(error);
    }
  };
  const getsingleProduct = async (id: number) => {
    const { data, error } = await superbase
      .from("products")
      .select("*")
      .eq("id", id);

    if (data) {
      setsinglePrdct(data);
    } else if (error) {
      console.log(error);
    }
  };
  const mensCategory = async () => {
    const { data, error } = await superbase
      .from("products")
      .select("*")
      .ilike(`category`, `%men's clothing%`);

    if (data) {
      setmenCat(data);
    } else if (error) {
      console.log(error);
    }
  };
  const womensCategory = async () => {
    const { data, error } = await superbase
      .from("products")
      .select("*")
      .ilike(`category`, `%women's clothing%`);

    if (data) {
      setwomenCat(data);
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
    mensCategory,
    womensCategory,
    menCat,
    womenCat,
  };
};
