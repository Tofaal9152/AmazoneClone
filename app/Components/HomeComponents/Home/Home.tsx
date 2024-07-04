"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Categorywise from "../Categorywise/Categorywise";


const Home = () => {
   
  return (
    <div>
      <section>
        <div>
          <Image
          style={{maskImage:`linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0.9))`}}
            src={`https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg`}
            alt=""
            width={10000}
            height={10000}
          />
        </div>
      </section>
      <section className="container m-auto relative top-[-18rem]">
        <Categorywise/>
      </section>
    </div>
  );
};

export default Home;
