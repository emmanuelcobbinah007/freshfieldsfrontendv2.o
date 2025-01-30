"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

const WorkWithUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFC1070F] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-[#489706]">
        <h2 className="text-4xl font-semibold text-[#489706] text-center mb-6">
          Work With Us
        </h2>
        {success ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center text-lg font-medium"
          >
            ✅ Thank you! We'll get back to you soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-[#489706] rounded-lg focus:ring focus:ring-[#489706] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-[#489706] rounded-lg focus:ring focus:ring-[#489706] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-[#489706] rounded-lg focus:ring focus:ring-[#489706] focus:outline-none"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#489706] text-white font-semibold text-lg hover:bg-[#3a7c05] transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        )}

<hr className='w-[50%] mx-auto my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
            <p className='text-center'>Looking for a job? <span className='text-[#489706]'><Link href='/careers'>Check our openings.</Link></span></p>
          

      </div>
    </div>
  );
};

export default WorkWithUs;



