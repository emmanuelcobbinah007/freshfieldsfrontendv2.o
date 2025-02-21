"use client";

import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { RiAdminLine } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="bg-[#FFC1070F]">
        <div className="w-[90%] mx-auto">
          <h1 className="text-xl font-semibold text-center py-5">
            Admin Dashboard
          </h1>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#489706] text-white px-5 mt-0 py-2 flex rounded-lg justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200">
              <RiAdminLine className="text-lg mx-1" />
              New Admin
            </button>
            <Link href="/dashboard/add-product" passHref>
              <button className="bg-[#489706] text-white px-5 mt-0 py-2 flex rounded-lg justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200">
                <GiFruitBowl className="text-lg mx-1" /> Add Product
              </button>
            </Link>

            <button className="bg-[#489706] text-white px-5 mt-0 py-2 flex rounded-lg justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200">
              <IoBagOutline className="text-lg mx-1" />
              View Orders
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
