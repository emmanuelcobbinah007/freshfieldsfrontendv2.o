"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import veggiesImg from '../../assets/images/ProductCategories/Veggies.png';
import meatImg from '../../assets/images/ProductCategories/Meat.png';
import fishImg from '../../assets/images/ProductCategories/Fish.png';
import fruitImg from '../../assets/images/ProductCategories/Fruits.png';
import herbImg from '../../assets/images/ProductCategories/Herb.png';
import legumeImg from '../../assets/images/ProductCategories/Legumes.png';
import oilImg from '../../assets/images/ProductCategories/Oil.png';
import tuberImg from '../../assets/images/ProductCategories/Tuber.png';
import { FaShoppingCart } from 'react-icons/fa';

const productCategories: { [key: string]: Category } = {
  '1': {
    id: '1',
    name: 'Meat',
    description: 'High-quality fresh meat sourced from local farms.',
    fullDescription: 'Our fresh meat is sourced from local farms that follow sustainable and ethical farming practices. The meat is organic, grass-fed, and free from antibiotics. It is processed and delivered with the utmost care to ensure freshness and quality. Perfect for a variety of dishes, our meat is a healthy and delicious choice for your meals.',
    price: 24.00,
    image: meatImg,
    features: ['Organic', 'Grass-fed', 'No antibiotics'],
    reviews: [
      { user: 'John Doe', comment: 'Excellent quality meat!' },
      { user: 'Jane Smith', comment: 'Very fresh and tasty.' },
    ],
  },
  '2': {
    id: '2',
    name: 'Fish',
    description: 'Freshly caught fish delivered daily.',
    fullDescription: 'Our fresh fish is caught daily and delivered to ensure maximum freshness. The fish is wild-caught and free from preservatives, making it a healthy choice for your meals. Rich in Omega-3 fatty acids, our fish is not only delicious but also beneficial for your health.',
    price: 20.00,
    image: fishImg,
    features: ['Wild-caught', 'No preservatives', 'Rich in Omega-3'],
    reviews: [
      { user: 'Alice Johnson', comment: 'Best fish I have ever had!' },
      { user: 'Bob Brown', comment: 'Very fresh and delicious.' },
    ],
  },
  '3': {
    id: '3',
    name: 'Fruits',
    description: 'Seasonal fruits sourced from local orchards.',
    fullDescription: 'Our fresh fruits are sourced from local orchards that practice sustainable farming. The fruits are organic, seasonal, and free from pesticides. They are picked at the peak of ripeness to ensure maximum flavor and nutrition. Enjoy a variety of sweet and juicy fruits that are perfect for snacking or adding to your favorite recipes.',
    price: 15.00,
    image: fruitImg,
    features: ['Organic', 'Seasonal', 'No pesticides'],
    reviews: [
      { user: 'Charlie Davis', comment: 'Sweet and juicy fruits!' },
      { user: 'Dana Lee', comment: 'Great variety and quality.' },
    ],
  },
  '4': {
    id: '4',
    name: 'Herb',
    description: 'Aromatic herbs to enhance your dishes.',
    fullDescription: 'Our fresh herbs are picked daily to ensure maximum freshness and flavor. They are organic and free from pesticides, making them a healthy addition to your meals. Use our herbs to enhance the flavor of your dishes and add a touch of freshness to your cooking.',
    price: 6.00,
    image: herbImg,
    features: ['Organic', 'Freshly picked', 'No pesticides'],
    reviews: [
      { user: 'Eve Martinez', comment: 'Very aromatic and fresh.' },
      { user: 'Frank Wilson', comment: 'Perfect for cooking.' },
    ],
  },
  '5': {
    id: '5',
    name: 'Legumes',
    description: 'Nutritious legumes for a healthy diet.',
    fullDescription: 'Our fresh legumes are sourced from local farms that follow sustainable farming practices. They are organic, high in protein, and free from preservatives. Legumes are a great source of nutrition and can be used in a variety of dishes to add flavor and texture.',
    price: 10.00,
    image: legumeImg,
    features: ['Organic', 'High protein', 'No preservatives'],
    reviews: [
      { user: 'Grace Kim', comment: 'Very nutritious and fresh.' },
      { user: 'Henry Clark', comment: 'Great quality legumes.' },
    ],
  },
  '6': {
    id: '6',
    name: 'Oil',
    description: 'High-quality cooking oil for all your needs.',
    fullDescription: 'Our cooking oil is cold-pressed and free from additives, making it a healthy choice for your cooking needs. It is rich in nutrients and has a high smoke point, making it perfect for frying, sautéing, and baking. Use our cooking oil to enhance the flavor of your dishes and promote a healthy lifestyle.',
    price: 30.00,
    image: oilImg,
    features: ['Cold-pressed', 'No additives', 'Rich in nutrients'],
    reviews: [
      { user: 'Ivy Scott', comment: 'Best cooking oil I have used.' },
      { user: 'Jack Turner', comment: 'Very healthy and tasty.' },
    ],
  },
  '7': {
    id: '7',
    name: 'Tuber',
    description: 'Organic tubers for a balanced diet.',
    fullDescription: 'Our fresh tubers are sourced from local farms that practice sustainable farming. They are organic, rich in fiber, and free from pesticides. Tubers are a great source of nutrition and can be used in a variety of dishes to add flavor and texture.',
    price: 12.00,
    image: tuberImg,
    features: ['Organic', 'Rich in fiber', 'No pesticides'],
    reviews: [
      { user: 'Karen Adams', comment: 'Very fresh and healthy.' },
      { user: 'Leo Baker', comment: 'Great quality tubers.' },
    ],
  },
  '8': {
    id: '8',
    name: 'Veggies',
    description: 'Fresh vegetables for your daily needs.',
    fullDescription: 'Our fresh vegetables are picked daily to ensure maximum freshness and flavor. They are organic and free from pesticides, making them a healthy addition to your meals. Use our vegetables to add flavor and nutrition to your dishes and promote a healthy lifestyle.',
    price: 10.00,
    image: veggiesImg,
    features: ['Organic', 'Freshly picked', 'No pesticides'],
    reviews: [
      { user: 'Mia Evans', comment: 'Very fresh and tasty.' },
      { user: 'Noah Foster', comment: 'Great variety of veggies.' },
    ],
  },
};

type Category = {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: any;
  features: string[];
  reviews: { user: string; comment: string }[];
};

const CollectionPage = () => {
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    if (id && productCategories[id]) {
      setCategory(productCategories[id]);
    }
  }, [params]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-[90%] md:w-[80%] mx-auto pt-10'>
      <h1 className='font-semibold text-lg sm:text-2xl md:text-3xl px-4 text-center'>Collection {category.name}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4'>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className='flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-white'>
            <Link href={`/product/${category.id}`} passHref>
              <img src={category.image.src} className='w-[75%] rounded-t-lg cursor-pointer' alt={category.name} />
            </Link>
            <h2 className='text-lg font-semibold mt-2'>{category.name}</h2>
            <p className='text-sm text-gray-600 mt-1'>{category.description}</p>
            <p className='text-sm text-gray-800 mt-1'>${category.price.toFixed(2)}</p>
            <div className='flex space-x-2 mt-3 pb-6'>
                <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                  <FaShoppingCart className='' />
                </button>
                <Link href={`/product/${category.id}`} passHref>
                  <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;