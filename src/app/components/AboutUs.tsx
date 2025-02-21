import React from 'react'
import Logo from '../../assets/images/Logo -lg.png'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto md:pt-10'>
      <div className='hidden md:flex justify-center md:justify-center'>
        <Image src={(Logo as StaticImageData).src} className='w-[70%] md:w-[55%] mx-auto' alt='logo' />
      </div>

      <div className='mt-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 text-[#489706] font-playfair'>About The Store</h1>
        <p className='text-base md:text-lg text-center leading-relaxed text-gray-700'>
          We are Fresh Fields. Use our platform to order your fresh fruits, vegetables, and groceries and get them delivered to you at the comfort of your home or office.
        </p>
      </div>

      <div className='mt-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 text-[#489706] font-playfair'>Why Choose Us?</h1>
        <p className='text-base md:text-lg text-center leading-relaxed text-gray-700'>
          With a database of multiple suppliers, farmers, and markets, we assure the supply of fresh, quality, and healthy foodstuffs to our customers. Also, our e-payment system and cash-on-delivery options provide convenience and flexibility.
        </p>
      </div>

      <div className='mt-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 text-[#489706] font-playfair'>Our Mission</h1>
        <p className='text-base md:text-lg text-center leading-relaxed text-gray-700'>
          Our mission is to provide fresh, healthy, and affordable food to everyone. We strive to support local farmers and promote sustainable farming practices.
        </p>
      </div>

      <div className='mt-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 text-[#489706] font-playfair'>Contact Us</h1>
        <p className='text-base md:text-lg text-center leading-relaxed text-gray-700'>
          Have any questions or concerns? Feel free to reach out to us at <a href="mailto:info@freshfields.com" className='text-[#489706] underline'>info@freshfields.com</a>.
        </p>
      </div>

      <div className='mt-10 flex justify-center'>
        <button className='bg-[#489706] text-white px-6 py-3 rounded-lg hover:bg-[#367a04] transition duration-300'>
          Get in Touch
        </button>
      </div>

      <div className='mt-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 text-[#489706] font-playfair'>Our Values</h1>
        <ul className='text-base md:text-lg text-center leading-relaxed text-gray-700 list-disc list-inside'>
          <li>Quality: We ensure the highest quality of products.</li>
          <li>Freshness: Our products are always fresh.</li>
          <li>Sustainability: We support sustainable farming practices.</li>
          <li>Customer Satisfaction: Our customers are our top priority.</li>
        </ul>
      </div>

      <div className='my-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 text-[#489706] font-playfair'>Testimonials</h1>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3'>
            <p className='text-base md:text-lg text-gray-700'>&quot;Fresh Fields has the best quality products. I am very satisfied with their service!&quot;</p>
            <p className='text-right text-gray-500 mt-4'>- Happy Customer</p>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3'>
            <p className='text-base md:text-lg text-gray-700'>&quot;I love the freshness of the products. Highly recommend Fresh Fields!&quot;</p>
            <p className='text-right text-gray-500 mt-4'>- Satisfied Client</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs