"use client";

import React, { useState } from 'react'
import logo from '../../assets/images/Logo.png'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
import { CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-white'>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/' passHref>
            <Image src={logo as StaticImageData} alt='logo' className='h-7 hover:scale-105 duration-300 w-[175px]' />
          </Link>
          <div className='hidden md:flex items-center'>
            <Link href='/' passHref>
              <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>Home</p>
            </Link>
            <Link href='/products' passHref>
              <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>Shop</p>
            </Link>
            <Link href='/workwithus' passHref>
              <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>Work With Us</p>
            </Link>
            <Link href='/aboutus' passHref>
            <p className='px-3 flex items-center hover:text-[#489706] hover:cursor-pointer duration-300 hover:scale-105'>About Us</p>
            </Link>
          </div>
          <div className='hidden md:flex items-center'>
            <CiSearch size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
            <CiHeart size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
            <Link href='/sign-in' passHref>
              <CiUser size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
            </Link>
            <CiShoppingBasket size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
          </div>
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isOpen ? <HiX size={27} /> : <HiMenu size={27} />}
            </button>
          </div>
        </div>
        <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden w-1/2 p-4`}>
          <div className='flex justify-end mt-4'>
            <button onClick={toggleMenu}>
              <HiX size={27} />
            </button>
          </div>
          <div className='flex flex-col items-center space-y-4 mt-20'>
            <Link href='/' passHref>
              <p onClick={closeMenu} className='py-2 px-4 w-full text-center hover:text-[#489706] hover:cursor-pointer duration-300 font-semibold'>Home</p>
            </Link>
            <Link href='/products' passHref>
              <p onClick={closeMenu} className='py-2 px-4 w-full text-center hover:text-[#489706] hover:cursor-pointer duration-300 font-semibold'>Shop</p>
            </Link>
            <Link href='/workwithus' passHref>
            <p onClick={closeMenu} className='py-2 px-4 w-full text-center hover:text-[#489706] hover:cursor-pointer duration-300 font-semibold'>Work With Us</p>
            </Link>
            <Link href='/aboutus' passHref>
            <p onClick={closeMenu} className='py-2 px-4 w-full text-center hover:text-[#489706] hover:cursor-pointer duration-300 font-semibold'>About Us</p>
            </Link>
            <hr
      className="w-[50%] mx-auto my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
    />
            <div className='flex items-center py-2'>
              <CiSearch size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
              <CiHeart size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
              <Link href='/sign-in' passHref>
                <CiUser onClick={closeMenu} size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
              </Link>
              <CiShoppingBasket size={27} className='mx-[5px] hover:bg-gray-200 cursor-pointer rounded-[50%] p-1 duration-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar