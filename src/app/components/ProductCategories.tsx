import React from 'react'
import Link from 'next/link'
import meatImg from '../../assets/images/ProductCategories/Meat.png'
import fishImg from '../../assets/images/ProductCategories/Fish.png'
import fruitImg from '../../assets/images/ProductCategories/Fruits.png'
import herbImg from '../../assets/images/ProductCategories/Herb.png'
import legumeImg from '../../assets/images/ProductCategories/Legumes.png'
import oilImg from '../../assets/images/ProductCategories/Oil.png'
import tuberImg from '../../assets/images/ProductCategories/Tuber.png'
import veggiesImg from '../../assets/images/ProductCategories/Veggies.png'

const productCategories = [
  { id: 1, name: 'Meat', image: meatImg },
  { id: 2, name: 'Fish', image: fishImg },
  { id: 3, name: 'Fruits', image: fruitImg },
  { id: 4, name: 'Herb', image: herbImg },
  { id: 5, name: 'Legumes', image: legumeImg },
  { id: 6, name: 'Oil', image: oilImg },
  { id: 7, name: 'Tuber', image: tuberImg },
  { id: 8, name: 'Veggies', image: veggiesImg },
];

const ProductCategories = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto pt-10'>
      <h1 className='font-semibold text-lg sm:text-2xl md:text-3xl px-4 text-center'>What We Offer</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4'>
        {productCategories.map((category) => (
          <Link href={`/category/${category.id}`} passHref key={category.id}>
            <div className='flex flex-col items-center'>
              <img src={category.image.src} className='w-[75%]' alt={category.name} />
              <h2 className='text-lg font-semibold mt-2'>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductCategories