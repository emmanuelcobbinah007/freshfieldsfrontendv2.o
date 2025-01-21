'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle sign-in logic here
      console.log('Email:', email);
      console.log('Password:', password);
    };

    return (
        <div className='bg-[#FFC1070F] h-[90vh] flex items-center justify-center p-4'>
          <form onSubmit={handleSubmit} className='bg-[FFC1070F] p-6 h-auto md:h-[70vh] rounded md:shadow-2xl md:w-[35%]'>
            <h2 className='text-2xl mb-4 text-center font-semibold'>Sign In</h2>
            <div className='mb-4'>
              <label className='block text-gray-700 md:text-lg text-md font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='jdoe@freshfields.io'
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 md:text-lg text-md font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                placeholder='********'
                onChange={(e) => setPassword(e.target.value)}
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-[#489706] w-full text-white px-5 py-2 mt-5 rounded-3xl flex justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                Sign In
              </button>
            </div>
            <hr
             className="w-[50%] mx-auto my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
            />
            <p className='text-center'>Don't have an account? <span className='text-[#489706]'><Link href='/sign-up'>Sign Up.</Link></span></p>

          </form>
        </div>
      );
}

export default SignInForm