"use client";

import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { ClipLoader } from "react-spinners";

interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  imageUrl: string;
  features: string[];
}


const ProductPage = () => {
    const { products } = useProducts();

  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const product = products.find((product) => product.id === id);
    if (product) {
      setProduct(product);
    }

  }, [params]);


  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loader"></div>
          <ClipLoader size={50} color="#489706" />
        </div>
      </div>
    );
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto md:pt-10 bg-gradient-to-b from-white to-gray-50 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500} // Replace with actual width
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#489706]">{product.name}</h1>
          <p className="text-lg text-gray-700 mt-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-4">
            ₵{product.price.toFixed(2)}
          </p>
            <div className="flex items-center mt-6">
            <button className="bg-[#489706] text-white px-6 py-3 rounded-lg hover:bg-[#367a04] transition duration-300 mr-4 shadow-md">
              Add to Cart
            </button>
            <button className="bg-[#ff5722] text-white px-6 py-3 rounded-lg hover:bg-[#e64a19] transition duration-300 mr-4 shadow-md">
              Buy Now
            </button>
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg hover:bg-gray-300 transition duration-300"
            >
              -
            </button>
            <span className="px-4 py-2 bg-white border-t border-b border-gray-200">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg hover:bg-gray-300 transition duration-300"
            >
              +
            </button>
            </div>

          {/* Full Description */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#489706]">
              Full Description
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              {product.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#489706]">Features</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#489706]">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-lg text-gray-700">
                &ldquo; {review.comment} &ldquo;
              </p>
              <p className="text-right text-gray-500 mt-2">- {review.user}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductPage;
