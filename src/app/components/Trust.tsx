import React from 'react'
import container from '../../assets/images/trust/Container.png'
import customerSupport from '../../assets/images/trust/CustomerSupport.png'
import securePayment from '../../assets/images/trust/SecurePayment.png'
import moneyBack from '../../assets/images/trust/MoneyBack.png'
import { StaticImageData } from 'next/image'

const Trust = () => {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='grid grid-cols-4 gap-10 py-10'>
            <div className='flex flex-col items-center p-3'>
                <img src={(container as StaticImageData).src} className='w-[30%]' alt='quality' />
                <h1 className='text-md font-bold mt-5'>Very Fast Delivery</h1>
                <p className='text-xs text-gray-400 text-center mt-2'>Low Delivery Cost</p>
            </div>
            <div className='flex flex-col items-center p-3'>
                <img src={(customerSupport as StaticImageData).src} className='w-[30%]' alt='organic' />
                <h1 className='text-md font-bold mt-5'>Great Support 24/7</h1>
                <p className='text-xs text-gray-400 text-center mt-2'>Access to Instant Contact</p>
            </div>
            <div className='flex flex-col items-center p-3'>
                <img src={(securePayment as StaticImageData).src} className='w-[30%]' alt='eco-friendly' />
                <h1 className='text-md font-bold mt-5'>100% Secure Payment</h1>
                <p className='text-xs text-gray-400 text-center mt-2'>We ensure your money is safe</p>
            </div>
            <div className='flex flex-col items-center p-3'>
                <img src={(moneyBack as StaticImageData).src} className='w-[30%]' alt='eco-friendly' />
                <h1 className='text-md font-bold mt-5'>Cash-Back Guarantee</h1>
                <p className='text-xs text-gray-400 text-center mt-2'>30 days money-back</p>
            </div>
        </div>
    </div>
  )
}

export default Trust