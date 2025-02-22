"use client";

import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProtectedRoute from "../components/ProtectedRoute";
import { RiAdminLine } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";

const Dashboard = () => {

  const { products } = useProducts();

  return (
    <ProtectedRoute>
      <div className="bg-[#FFC1070F] min-h-screen">
        <div className="w-[90%] mx-auto">
          <h1 className="text-xl font-semibold text-center py-5">
            Admin Dashboard
          </h1>
          <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/dashboard/add-admin" passHref>
          <button className="bg-[#489706] text-white px-5 mt-0 py-2 flex rounded-lg justify-center items-center hover:bg-[#FFC1070F] hover:font-semibold hover:text-[#489706] hover:border hover:border-[#489706] duration-200">
              <RiAdminLine className="text-lg mx-1" />
              New Admin
            </button>
          </Link>
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

          <div className="w-full overflow-x-auto mt-10">
            <h2 className="text-lg font-semibold mb-5 text-center">
              All Products
            </h2>
            <table className="w-full mt-2">
              <thead>
                <tr className="bg-[#489706] text-white">
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Product Name</th>
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id} className="text-center">
                      <td className="py-2 px-4">{product.category}</td>
                      <td className="py-2 px-4">{product.name}</td>
                      <td className="py-2 px-4">{product.description}</td>
                      <td className="py-2 px-4">${product.price}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-4">
                      No products available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Uncomment and update the following section if you want to display recent orders */}
          {/* <div className="w-full overflow-x-auto mt-10">
            <h2 className="text-lg font-semibold mb-5 text-center">Recent Orders</h2>
            <table className="w-full mt-2">
              <thead>
                <tr className="bg-[#489706] text-white">
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Customer Name</th>
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">Apple</td>
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">Pending</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">Jane Doe</td>
                  <td className="py-2 px-4">Banana</td>
                  <td className="py-2 px-4">10</td>
                  <td className="py-2 px-4">Delivered</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">Sam Smith</td>
                  <td className="py-2 px-4">Orange</td>
                  <td className="py-2 px-4">8</td>
                  <td className="py-2 px-4">Pending</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;