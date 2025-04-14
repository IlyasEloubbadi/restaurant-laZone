import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-blue-800 text-white w-64 fixed h-full">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-8">
          <Link to="/dash" className="block py-2 px-4 hover:bg-blue-700">
            Dashboard
          </Link>
          <Link to="/users" className="block py-2 px-4 hover:bg-blue-700">
            Users
          </Link>
          <Link to="/products" className="block py-2 px-4 hover:bg-blue-700">
            Products
          </Link>
          <Link to="/orders" className="block py-2 px-4 hover:bg-blue-700">
            Orders
          </Link>
          <Link to="/settings" className="block py-2 px-4 hover:bg-blue-700">
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Admin Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stats Cards */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-medium">Total Users</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-medium">Total Products</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-medium">Pending Orders</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="mt-8">
            <h3 className="font-medium mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Order ID</th>
                    <th className="py-2 px-4 border-b">Customer</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                    <th className="py-2 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">#12345</td>
                    <td className="py-2 px-4 border-b">John Doe</td>
                    <td className="py-2 px-4 border-b">250 DH</td>
                    <td className="py-2 px-4 border-b">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;