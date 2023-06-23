import React from 'react'
import { useState } from 'react';
import './App.css'

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
       <nav className=" w-full backdrop-blur-lg shadow bg-black/30 ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="www.dezze.com">
                            <h2 className="text-2xl text-gray-100 font-bold">web name didn't decided</h2>
                        </a>
                        <div className="md:hidden">

                            <button
                                className="p-2 .text-white bg-slate-700 rounded-md outline-none focus:border-red-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-2 mt-10 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-100 hover:text-blue-600">
                                <a href="www.dezze.com/dezze">Home</a>
                            </li>
                            <li className="text-gray-100 hover:text-blue-600">
                                <a href="www.dezze.com/blog">Blog</a>
                            </li>
                            <li className="text-gray-100 hover:text-blue-600">
                                <a href="www.dezze.com/about">About US</a>
                            </li>
                            <li className="text-gray-100 hover:text-blue-600">
                                <a href="www.dezze.com/contact">Contact US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
