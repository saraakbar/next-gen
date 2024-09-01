"use client";
import { useState, useEffect } from 'react';
import ProfileDropdown from '@/components/Profile';
import TopNavbar from '@/components/Navbar';
import { useDarkMode } from '@/context/DarkModeContext'; // Adjust the path as necessary

export default function Advertisement() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen flex">
      <TopNavbar/>
    <div className="flex-grow flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Advertisement Section */}
      <section className="flex flex-col items-center justify-center mt-8  w-full">
        <div className="flex flex-row  justify-between w-full">
        <h2 className="text-xl font-semibold mb-8 ml-20">Advertisements</h2>
        <div className="mr-20">
        <ProfileDropdown darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl px-4">
            {/* Fan-created work */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-64 mb-2"></div>
              <p className="text-lg font-semibold mt-2">fan-created work</p>
            </div>

            {/* new sports around us */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-32 mb-2"></div>
              <div className="text-lg font-semibold">new sports around us</div>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-32 mt-2"></div>
            </div>

            {/* sports products */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg font-semibold">sports products</div>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-32 m-2"></div>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-32 m-2"></div>
            </div>

            {/* Games & Equipment */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-40 m-2"></div>
              <div className="text-lg font-semibold">games & equipment</div>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full h-24 m-2"></div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="flex flex-col items-center justify-center w-full mt-8 px-4">
          <p className="text-center font-semibold text-lg">next gen sports</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2">
            <a href="#" className="text-gray-500 dark:text-gray-400">
              <p className="underline text-center md:text-left">Promote your work/sport</p>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400">
              <p className="underline text-center md:text-left">Promote on nextgen IG</p>
            </a>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mt-2">
            <a href="#" className="text-zinc-900 dark:text-gray-400">
              <img src={darkMode ? "/tiktok-w.png" : "/tiktok.png"} className="w-6 h-6 rounded-md" alt="TikTok Icon" /> {/* TikTok Icon */}
            </a>
            <a href="#" className="text-zinc-900 dark:text-gray-400">
              <img src="/insta.png" className="w-6 h-6" alt="Instagram Icon" /> {/* Instagram Icon */}
            </a>
            <a href="#" className="text-zinc-900 dark:text-gray-400">
              <img src="/youtube.png" className="w-6 h-6 bg-white rounded-md" alt="YouTube Icon" /> {/* YouTube Icon */}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
