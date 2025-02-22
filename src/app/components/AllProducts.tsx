"use client";

import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const AllProducts = () => {
  const { products } = useProducts();

  return (
    <div className="">
      <h1 className="font-semibold pt-6 text-lg sm:text-2xl md:text-3xl text-center">All Products</h1>
      <div className="w-[90%] md:w-[80%] mx-auto pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center px-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105"
            >
              <Image
                src={product.imageUrl}
                className="w-[75%] rounded-lg"
                alt={product.name}
                width={500} 
                height={300}
              />
              <div className="flex justify-between items-center w-full mt-5">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-lg font-bold">
                  ₵{product.price.toFixed(2)} / kg
                </p>
              </div>
              <p className="text-center mt-2">
                {product.description}
              </p>
              <div className="flex space-x-2 mt-3 pb-6">
                <button className="flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200">
                  <FaShoppingCart className="" />
                </button>
                <Link href={`/product/${product.id}`} passHref>
                  <button className="bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
