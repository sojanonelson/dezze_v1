import React from 'react';
import "./App.css"

const Navbar = () => {
  return (
    <div>
    <nav class="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href='https://google.com' class="text-white text-2xl font-bold">Dezze Mp3 </a>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a  href='https://google.com' class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">More Downloads</a>
            <a href='https://github.com/sojanonelson' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">About Us</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar