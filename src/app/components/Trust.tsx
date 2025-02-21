import container from '../../assets/images/trust/Container.png'
import Image from 'next/image'
import customerSupport from '../../assets/images/trust/CustomerSupport.png'
import securePayment from '../../assets/images/trust/SecurePayment.png'
import moneyBack from '../../assets/images/trust/MoneyBack.png'
import { StaticImageData } from 'next/image'

const Trust = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-8'>
            <div className='flex flex-col items-center p-2'>
                <Image src={(container as StaticImageData).src} className='w-[40%] md:w-[25%]' alt='quality' />
                <h1 className='text-xs md:text-sm font-bold mt-3'>Very Fast Delivery</h1>
                <p className='text-xs text-gray-400 text-center mt-1'>Low Delivery Cost</p>
            </div>
            <div className='flex flex-col items-center p-2'>
                <Image src={(customerSupport as StaticImageData).src} className='w-[40%] md:w-[25%]' alt='organic' />
                <h1 className='text-xs md:text-sm font-bold mt-3'>Great Support 24/7</h1>
                <p className='text-xs text-gray-400 text-center mt-1'>Access to Instant Contact</p>
            </div>
            <div className='flex flex-col items-center p-2'>
                <Image src={(securePayment as StaticImageData).src} className='w-[40%] md:w-[25%]' alt='eco-friendly' />
                <h1 className='text-xs md:text-sm font-bold mt-3'>Secure Payment</h1>
                <p className='text-xs text-gray-400 text-center mt-1'>100% Secure Payment</p>
            </div>
            <div className='flex flex-col items-center p-2'>
                <Image src={(moneyBack as StaticImageData).src} className='w-[40%] md:w-[25%]' alt='money-back' />
                <h1 className='text-xs md:text-sm font-bold mt-3'>Money Back Guarantee</h1>
                <p className='text-xs text-gray-400 text-center mt-1'>30 Days Money Back</p>
            </div>
        </div>
    </div>
  )
}

export default Trust