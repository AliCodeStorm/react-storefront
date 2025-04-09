import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function NavigationBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-lg w-64`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">Store</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
        <nav className="p-4">

          <Link to="/" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded">
            <i className="fas fa-home mr-3"></i> Home
          </Link>

          <Link to="/products" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded">
            <i className="fas fa-box-open mr-3"></i> Shope
          </Link>

          <Link to="/services" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded">
            <i className="fas fa-concierge-bell mr-3"></i> Services
          </Link>

          <Link to="/about" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded">
            <i className="fas fa-info-circle mr-3"></i> About Us
          </Link>

          <Link to="/contact" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded">
            <i className="fas fa-envelope mr-3"></i> Contact Us
          </Link>
        </nav>
      </div>

      <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm">
        <div className="container flex items-center justify-between p-4 mx-auto">
          <div className="flex items-center">
            <button
              className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>

            <Link to="/" className="flex items-center text-xl font-bold text-gray-900">
              <i className="fas fa-store mr-2"></i> Store
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">

            <Link to="/" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-home mr-2"></i> Home
            </Link>

            <Link to="/products" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-box-open mr-2"></i> Shope
            </Link>

            <Link to="/services" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-concierge-bell mr-2"></i> Services
            </Link>

            <Link to="/about" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-info-circle mr-2"></i> About
            </Link>

            <Link to="/contact" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-envelope mr-2"></i> Contact Us
            </Link>


          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-user mr-2"></i> Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease flex items-center"
            >
              <i className="fas fa-user-plus mr-2"></i> Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
