import React from 'react'
import landingVeggies from '../../assets/images/landingveggies.png'
import { StaticImageData } from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='bg-[#FFC1070F]'>  
        <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto py-10 md:py-20'>
            <div className='flex justify-center md:justify-start'>
                <img src={(landingVeggies as StaticImageData).src} alt='logo' className='w-full md:w-auto' />
            </div>
            <div className='flex flex-col justify-center px-5 md:px-12'>
                <p className='text-[#489706] text-center md:text-left'>Welcome to Fresh Fields</p>
                <h1 className='text-2xl md:text-4xl font-bold text-center md:text-left'>Fresh and Healthy Farm Products</h1>
                <div className='flex justify-center md:justify-start'>
                    <button className='bg-[#489706] w-[170px] text-white px-5 py-2 mt-5 rounded-3xl flex justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                        Shop Now <HiArrowLongRight size={25} className='mx-2'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero