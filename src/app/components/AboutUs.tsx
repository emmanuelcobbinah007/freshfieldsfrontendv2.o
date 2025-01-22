import React from 'react'
import Logo from '../../assets/images/Logo -lg.png'
import { StaticImageData } from 'next/image'

const AboutUs = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto hidden md:block md:pt-10'>
        <div className='flex justify-center'>
        <img src={(Logo as StaticImageData).src} className='w-[70%] md:w-[55%]' alt='logo' />
        </div>

        <div>
            <h1>About The Store</h1>
            <p>We are Fresh fields. Use our platform to order your fresh fruits, vegetables, and groceries and get them delivered to you at the comfort of your home or office.</p>
        </div>
        <div>
            <h1>Why Choose Us?</h1>
            <p>With a database of multiple suppliers, farmers and markets, we assure supply of fresh, quality and healthy foodstuffs to our customers. Also, our e-payment system and cash-on-delivery options, attempt to achieve a convinient way for customers to settle their bills.</p>
        </div>
        <div>
            <h1>Our Values</h1>
            <p>Guided by our values, we seek to achieve maximum customer&apos;s comfort. Use our platform for your grocery shopping and receive your products sorted, cleaned and packaged under strict hygienic conditions.</p>
        </div>
        <div>
            <h1>Our Values</h1>
            <p>Our core mission is to provide customers with fresh fruits, vegetables and groceries. We reduce the stress of going to the markets by providing this platform to customers to easily & conveniently shop from the comfort of their homes and offices and get their products delivered at their doorsteps.
            </p>
        </div>


    </div>
  )
}

export default AboutUs