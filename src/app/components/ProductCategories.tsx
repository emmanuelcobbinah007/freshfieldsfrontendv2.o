"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import veggiesImg from '../../assets/images/ProductCategories/veggies.jpg';
import meatImg from '../../assets/images/ProductCategories/meat.jpg';
import fishImg from '../../assets/images/ProductCategories/fish.jpg';
import fruitImg from '../../assets/images/ProductCategories/fruits.jpg';
import herbImg from '../../assets/images/ProductCategories/herb.jpg';
import legumeImg from '../../assets/images/ProductCategories/legumes.jpeg';
import oilImg from '../../assets/images/ProductCategories/Oil.png';
import tuberImg from '../../assets/images/ProductCategories/tuber.jpeg';
import grainsImg from '../../assets/images/ProductCategories/grains.jpg';

const productCategories = [
  { id: 1, name: 'Meat', image: meatImg },
  { id: 2, name: 'Fish', image: fishImg },
  { id: 3, name: 'Fruits', image: fruitImg },
  { id: 4, name: 'Herb', image: herbImg },
  { id: 5, name: 'Legumes', image: legumeImg },
  { id: 6, name: 'Oil', image: oilImg },
  { id: 7, name: 'Tuber', image: tuberImg },
  { id: 8, name: 'Veggies', image: veggiesImg },
  { id: 9, name: 'Grains', image: grainsImg },
];

const ProductCategories = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto pt-10'>
      <h1 className='font-semibold text-lg sm:text-2xl md:text-3xl px-4 text-center'>What We Offer</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4'>
        {productCategories.map((category) => (
          <Link href={`/category/${category.name}`} passHref key={category.id}>
            <div className='flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg'>
              <Image src={category.image.src} className='w-[75%] rounded-lg' alt={category.name} 
              width={500} // Replace with actual width
              height={300} />
              <h2 className='text-lg font-semibold mt-2'>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductCategories;