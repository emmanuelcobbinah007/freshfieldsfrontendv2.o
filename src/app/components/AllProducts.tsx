"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import meatImg from "../../assets/images/ProductCategories/Meat.png";
import fishImg from "../../assets/images/ProductCategories/Fish.png";
import fruitImg from "../../assets/images/ProductCategories/Fruits.png";
import herbImg from "../../assets/images/ProductCategories/Herb.png";
import legumeImg from "../../assets/images/ProductCategories/Legumes.png";
import oilImg from "../../assets/images/ProductCategories/Oil.png";
import tuberImg from "../../assets/images/ProductCategories/Tuber.png";
import veggiesImg from "../../assets/images/ProductCategories/Veggies.png";

const AllProducts = () => {
  const products = [
    { id: "1", name: "Fresh Meat", price: 24.0, image: meatImg },
    { id: "2", name: "Fresh Fish", price: 20.0, image: fishImg },
    { id: "3", name: "Fresh Fruits", price: 15.0, image: fruitImg },
    { id: "4", name: "Fresh Herbs", price: 6.0, image: herbImg },
    { id: "5", name: "Fresh Legumes", price: 10.0, image: legumeImg },
    { id: "6", name: "Cooking Oil", price: 30.0, image: oilImg },
    { id: "7", name: "Fresh Tubers", price: 12.0, image: tuberImg },
    { id: "8", name: "Fresh Veggies", price: 10.0, image: veggiesImg },
  ];

  return (
    <div className="">
      <h1 className="font-semibold pt-6 text-lg sm:text-2xl md:text-3xl text-center"></h1>
      <div className="w-[90%] md:w-[80%] mx-auto pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center px-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105"
            >
              <Image
                src={product.image.src}
                className="w-[75%]"
                alt={product.name}
                width={500} // Replace with actual width
                height={300}
              />
              <div className="flex justify-between items-center w-full mt-5">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-lg font-bold">
                  ₵{product.price.toFixed(2)} / kg
                </p>
              </div>
              <p className="text-center mt-2">
                High-quality fresh {product.name.toLowerCase()} sourced from
                local farms.
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
