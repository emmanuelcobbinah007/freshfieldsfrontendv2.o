"use client";

import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute'


const Dashboard = () => {
  return (
    <ProtectedRoute>
    <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin!</p>
      </div>
    </ProtectedRoute>
  )
}

export default Dashboard