import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import meatImg from '../../assets/images/ProductCategories/Meat.png'
import { StaticImageData } from 'next/image'
import fishImg from '../../assets/images/ProductCategories/Fish.png'
import fruitImg from '../../assets/images/ProductCategories/Fruits.png'
import herbImg from '../../assets/images/ProductCategories/Herb.png'
import legumeImg from '../../assets/images/ProductCategories/Legumes.png'
import oilImg from '../../assets/images/ProductCategories/Oil.png'
import tuberImg from '../../assets/images/ProductCategories/Tuber.png'
import veggiesImg from '../../assets/images/ProductCategories/Veggies.png'

const AllProducts = () => {
  return (
    <div className=''>
        <h1 className='font-semibold pt-6 text-lg sm:text-2xl md:text-3xl text-center'></h1>
    <div className=' w-[90%] md:w-[80%] mx-auto pt-10'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4'>
            <div className='flex flex-col items-center px-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(meatImg as StaticImageData).src} className='w-[75%]' alt='meat' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Meat</h1>
                    <p className='text-lg font-bold'>₵24.00 / kg</p>
                </div>
                <p className='text-center mt-2'>High-quality fresh meat sourced from local farms.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(fishImg as StaticImageData).src} className='w-[75%]' alt='fish' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Fish</h1>
                    <p className='text-lg font-bold'>₵20.00 / kg</p>
                </div>
                <p className='text-center mt-2'>Freshly caught fish delivered daily.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(fruitImg as StaticImageData).src} className='w-[75%]' alt='fruit' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Fruits</h1>
                    <p className='text-lg font-bold'>₵15.00 / kg</p>
                </div>
                <p className='text-center mt-2'>Seasonal fruits sourced from local orchards.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(herbImg as StaticImageData).src} className='w-[75%]' alt='herb' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Herbs</h1>
                    <p className='text-lg font-bold'>₵6.00 / bunch</p>
                </div>
                <p className='text-center mt-2'>Aromatic herbs to enhance your dishes.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(legumeImg as StaticImageData).src} className='w-[75%]' alt='legume' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Legumes</h1>
                    <p className='text-lg font-bold'>₵10.00 / kg</p>
                </div>
                <p className='text-center mt-2'>Nutritious legumes for a healthy diet.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(oilImg as StaticImageData).src} className='w-[75%]' alt='oil' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Cooking Oil</h1>
                    <p className='text-lg font-bold'>₵30.00 / bottle</p>
                </div>
                <p className='text-center mt-2'>High-quality cooking oil for all your needs.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(tuberImg as StaticImageData).src} className='w-[75%]' alt='tuber' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Tubers</h1>
                    <p className='text-lg font-bold'>₵12.00 / kg</p>
                </div>
                <p className='text-center mt-2'>Organic tubers for a balanced diet.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-3 hover:cursor-pointer hover:shadow-lg duration-300 rounded-lg hover:scale-105'>
                <img src={(veggiesImg as StaticImageData).src} className='w-[75%]' alt='veggies' />
                <div className='flex justify-between items-center w-full mt-5'>
                    <h1 className='text-lg font-semibold'>Fresh Veggies</h1>
                    <p className='text-lg font-bold'>₵10.00 / kg</p>
                </div>
                <p className='text-center mt-2'>Fresh vegetables for your daily needs.</p>
                <div className='flex space-x-2 mt-3 pb-6'>
                    <button className='flex justify-center items-center bg-[#489706] text-white px-4 py-2 rounded hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        <FaShoppingCart className='' />
                    </button>
                    <button className='bg-[#FFC1070F] text-black px-4 py-2 rounded border border-[#489706]'>View Product</button>
                </div>
            </div>
         </div>
    </div>

    </div>
  )
}

export default AllProducts