"use client";

import React, { useState } from 'react';
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const { signUp } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    signUp(email, password)
      .then(() => {
        toast.success('Sign up successful!');
        router.push('/');
      })
      .catch((error) => {
        toast.error(error);
      });



  };

  return (
    <div className='bg-[#FFC1070F] h-[100vh] flex items-center justify-center p-4'>
      <ToastContainer />
      <form onSubmit={handleSubmit} className='bg-[FFC1070F] p-6 h-auto rounded md:shadow-2xl md:w-[35%]'>
        <h2 className='text-2xl mb-4 text-center font-semibold'>Sign Up</h2>
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
        <div className='mb-4'>
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
        <div className='mb-6'>
          <label className='block text-gray-700 md:text-lg text-md font-bold mb-2' htmlFor='confirmPassword'>
            Confirm Password
          </label>
          <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                placeholder='********'
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
        </div>
        <div className='flex items-center justify-between'>
        <button
                type='submit'
                className='bg-[#489706] w-full text-white px-5 py-2  rounded-3xl flex justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200'>
                Sign Up
              </button>
        </div>
        <hr
             className="w-[50%] mx-auto my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
            />
            <p className='text-center pb-10'>Already have an account? <span className='text-[#489706]'><Link href='/sign-in'>Sign In.</Link></span></p>

      </form>
    </div>
  );
};

export default SignUpForm;
