"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import meatImg from '../../assets/images/ProductCategories/Meat.png';
import fishImg from '../../assets/images/ProductCategories/Fish.png';
import fruitImg from '../../assets/images/ProductCategories/Fruits.png';
import herbImg from '../../assets/images/ProductCategories/Herb.png';
import legumeImg from '../../assets/images/ProductCategories/Legumes.png';
import oilImg from '../../assets/images/ProductCategories/Oil.png';
import tuberImg from '../../assets/images/ProductCategories/Tuber.png';
import veggiesImg from '../../assets/images/ProductCategories/Veggies.png';
import { ClipLoader } from 'react-spinners';

interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  imageUrl: StaticImageData;
  features: string[];
  reviews: { user: string; comment: string }[];
}

const productData: { [key: string]: Product } = {
  '1': {
    id: '1',
    name: 'Fresh Meat',
    description: 'High-quality fresh meat sourced from local farms.',
    fullDescription: 'Our fresh meat is sourced from local farms that follow sustainable and ethical farming practices. The meat is organic, grass-fed, and free from antibiotics. It is processed and delivered with the utmost care to ensure freshness and quality. Perfect for a variety of dishes, our meat is a healthy and delicious choice for your meals.',
    price: 24.00,
    imageUrl: meatImg,
    features: ['Organic', 'Grass-fed', 'No antibiotics'],
    reviews: [
      { user: 'John Doe', comment: 'Excellent quality meat!' },
      { user: 'Jane Smith', comment: 'Very fresh and tasty.' },
    ],
  },
  '2': {
    id: '2',
    name: 'Fresh Fish',
    description: 'Freshly caught fish delivered daily.',
    fullDescription: 'Our fresh fish is caught daily and delivered to ensure maximum freshness. The fish is wild-caught and free from preservatives, making it a healthy choice for your meals. Rich in Omega-3 fatty acids, our fish is not only delicious but also beneficial for your health.',
    price: 20.00,
    imageUrl: fishImg,
    features: ['Wild-caught', 'No preservatives', 'Rich in Omega-3'],
    reviews: [
      { user: 'Alice Johnson', comment: 'Best fish I have ever had!' },
      { user: 'Bob Brown', comment: 'Very fresh and delicious.' },
    ],
  },
  '3': {
    id: '3',
    name: 'Fresh Fruits',
    description: 'Seasonal fruits sourced from local orchards.',
    fullDescription: 'Our fresh fruits are sourced from local orchards that practice sustainable farming. The fruits are organic, seasonal, and free from pesticides. They are picked at the peak of ripeness to ensure maximum flavor and nutrition. Enjoy a variety of sweet and juicy fruits that are perfect for snacking or adding to your favorite recipes.',
    price: 15.00,
    imageUrl: fruitImg,
    features: ['Organic', 'Seasonal', 'No pesticides'],
    reviews: [
      { user: 'Charlie Davis', comment: 'Sweet and juicy fruits!' },
      { user: 'Dana Lee', comment: 'Great variety and quality.' },
    ],
  },
  '4': {
    id: '4',
    name: 'Fresh Herbs',
    description: 'Aromatic herbs to enhance your dishes.',
    fullDescription: 'Our fresh herbs are picked daily to ensure maximum freshness and flavor. They are organic and free from pesticides, making them a healthy addition to your meals. Use our herbs to enhance the flavor of your dishes and add a touch of freshness to your cooking.',
    price: 6.00,
    imageUrl: herbImg,
    features: ['Organic', 'Freshly picked', 'No pesticides'],
    reviews: [
      { user: 'Eve Martinez', comment: 'Very aromatic and fresh.' },
      { user: 'Frank Wilson', comment: 'Perfect for cooking.' },
    ],
  },
  '5': {
    id: '5',
    name: 'Fresh Legumes',
    description: 'Nutritious legumes for a healthy diet.',
    fullDescription: 'Our fresh legumes are sourced from local farms that follow sustainable farming practices. They are organic, high in protein, and free from preservatives. Legumes are a great source of nutrition and can be used in a variety of dishes to add flavor and texture.',
    price: 10.00,
    imageUrl: legumeImg,
    features: ['Organic', 'High protein', 'No preservatives'],
    reviews: [
      { user: 'Grace Kim', comment: 'Very nutritious and fresh.' },
      { user: 'Henry Clark', comment: 'Great quality legumes.' },
    ],
  },
  '6': {
    id: '6',
    name: 'Cooking Oil',
    description: 'High-quality cooking oil for all your needs.',
    fullDescription: 'Our cooking oil is cold-pressed and free from additives, making it a healthy choice for your cooking needs. It is rich in nutrients and has a high smoke point, making it perfect for frying, sautéing, and baking. Use our cooking oil to enhance the flavor of your dishes and promote a healthy lifestyle.',
    price: 30.00,
    imageUrl: oilImg,
    features: ['Cold-pressed', 'No additives', 'Rich in nutrients'],
    reviews: [
      { user: 'Ivy Scott', comment: 'Best cooking oil I have used.' },
      { user: 'Jack Turner', comment: 'Very healthy and tasty.' },
    ],
  },
  '7': {
    id: '7',
    name: 'Fresh Tubers',
    description: 'Organic tubers for a balanced diet.',
    fullDescription: 'Our fresh tubers are sourced from local farms that practice sustainable farming. They are organic, rich in fiber, and free from pesticides. Tubers are a great source of nutrition and can be used in a variety of dishes to add flavor and texture.',
    price: 12.00,
    imageUrl: tuberImg,
    features: ['Organic', 'Rich in fiber', 'No pesticides'],
    reviews: [
      { user: 'Karen Adams', comment: 'Very fresh and healthy.' },
      { user: 'Leo Baker', comment: 'Great quality tubers.' },
    ],
  },
  '8': {
    id: '8',
    name: 'Fresh Veggies',
    description: 'Fresh vegetables for your daily needs.',
    fullDescription: 'Our fresh vegetables are picked daily to ensure maximum freshness and flavor. They are organic and free from pesticides, making them a healthy addition to your meals. Use our vegetables to add flavor and nutrition to your dishes and promote a healthy lifestyle.',
    price: 10.00,
    imageUrl: veggiesImg,
    features: ['Organic', 'Freshly picked', 'No pesticides'],
    reviews: [
      { user: 'Mia Evans', comment: 'Very fresh and tasty.' },
      { user: 'Noah Foster', comment: 'Great variety of veggies.' },
    ],
  },
};

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    if (id && productData[id]) {
      setProduct(productData[id]);
    }
  }, [params]);

  if (!product) {
    return <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <div className='loader'></div>
        <ClipLoader size={50} color='#489706'/>
      </div>
    </div>;
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
            <h2 className="text-2xl font-bold text-[#489706]">Full Description</h2>
            <p className="text-lg text-gray-700 mt-4">{product.fullDescription}</p>
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
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#489706]">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-lg text-gray-700">&ldquo; {review.comment} &ldquo;</p>
              <p className="text-right text-gray-500 mt-2">- {review.user}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


