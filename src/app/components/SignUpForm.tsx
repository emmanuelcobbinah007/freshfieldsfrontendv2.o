"use client";

import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const result = await signUp(email, password, name, phone, address);
      if (result && 'success' in result && result.success) {
        router.push("/");
      } else {
        if (result && 'error' in result) {
          toast.error(typeof result.error === 'string' ? result.error : "An unknown error occurred.");
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    } catch (error) {
      toast.error("An error occurred during sign-up.");
    }
  };

  return (
    <div className="bg-[#FFC1070F] h-auto pt-[20px] flex items-center justify-center p-4">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-[FFC1070F] p-6 h-auto rounded md:shadow-2xl md:w-[35%]">
        <h2 className="text-2xl mb-4 text-center font-semibold">Sign Up</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 md:text-lg text-md font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 md:text-lg text-md font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jdoe@example.com"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-700 md:text-lg text-md font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+233 245228860"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label className="block text-gray-700 md:text-lg text-md font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Fake Street"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 md:text-lg text-md font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 md:text-lg text-md font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#489706] w-full text-white px-5 py-2 rounded-3xl flex justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200"
          >
            Sign Up
          </button>
        </div>

        <hr className="w-[50%] mx-auto my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <p className="text-center pb-10">
          Already have an account?{" "}
          <span className="text-[#489706]">
            <Link href="/sign-in">Sign In.</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
