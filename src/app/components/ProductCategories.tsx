import React from 'react'
import fishImg from '../../assets/images/ProductCategories/Fish.png'
import meatImg from '../../assets/images/ProductCategories/Meat.png'
import fruitImg from '../../assets/images/ProductCategories/Fruits.png'
import herbImg from '../../assets/images/ProductCategories/Herb.png'
import legumeImg from '../../assets/images/ProductCategories/Legumes.png'
import oilImg from '../../assets/images/ProductCategories/Oil.png'
import tuberImg from '../../assets/images/ProductCategories/Tuber.png'
import veggiesImg from '../../assets/images/ProductCategories/Veggies.png'
import { StaticImageData } from 'next/image'

const ProductCategories = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto pt-10'>
        <h1 className='font-semibold text-3xl px-4 text-center'>What We Offer</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10'>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(meatImg as StaticImageData).src} className='w-[75%]' alt='meat' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Meat</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(fishImg as StaticImageData).src} className='w-[75%]' alt='fish' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Fish</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(fruitImg as StaticImageData).src} className='w-[75%]' alt='fruit' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Fruits</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(herbImg as StaticImageData).src} className='w-[75%]' alt='herb' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Herbs</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(legumeImg as StaticImageData).src} className='w-[75%]' alt='legume' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Legumes</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(oilImg as StaticImageData).src} className='w-[75%]' alt='oil' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Oil</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(tuberImg as StaticImageData).src} className='w-[75%]' alt='tuber' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Tubers</h1>   
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(veggiesImg as StaticImageData).src} className='w-[75%]' alt='veggies' />
                <h1 className='text-xl font-semibold text-center mt-5'>Fresh Veggies</h1>   
            </div>
        </div>
    </div>
  )
}

export default ProductCategories