"use client";
import { useState, useEffect } from 'react';
import ProfileDropdown from '@/components/Profile';
import { useDarkMode } from '@/context/DarkModeContext'; // Adjust the path as necessary
import TopNavbar from '@/components/Navbar';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.toLocaleDateString('en-GB', { weekday: 'long' })}, ${today.getDate()} ${today.toLocaleDateString('en-GB', { month: 'long' })} ${today.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="min-h-screen flex">
      <TopNavbar/>
      <div className="flex-grow flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-4">
        {/* Navbar/Header */}
        <header className="w-full flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={darkMode ? "/logo-w.png" : "/logo.png"}
              alt="Logo"
              className="w-40 h-auto"
            />
          </div>

          {/* Centered Date and Time Machine Button */}
          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold">{currentDate}</p>
            <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm md:text-base">
              Time Machine
            </button>
          </div>

          {/* Profile Icon, Feature Button, and Dropdown */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm md:text-base border border-orange-500">
              Feature
            </button>

            {/* Profile Dropdown Component */}
            <ProfileDropdown darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </header>

        {/* First Section: Content */}
        <section className="flex flex-col items-center justify-center w-full mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl px-4">
            {/* Sport of the Day */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
                <img src="https://adrhnpvddyoawfkkodnz.supabase.co/storage/v1/object/public/images/diskgolf.png"
                 alt="Sport of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Sport of the Day */}
              </div>
              <p className="text-lg font-semibold">sport of the day</p>
            </div>

            {/* Kit of the Day */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
                <img src="https://adrhnpvddyoawfkkodnz.supabase.co/storage/v1/object/public/images/kit.png" alt="Kit of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Kit of the Day */}
              </div>
              <p className="text-lg font-semibold">kit of the day</p>
            </div>

            {/* Venue of the Day */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
                <img src="https://adrhnpvddyoawfkkodnz.supabase.co/storage/v1/object/public/images/wembley.jpg" alt="Venue of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Venue of the Day */}
              </div>
              <p className="text-lg font-semibold">venue of the day</p>
            </div>

            {/* Athlete of the Day */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
                <img src="https://adrhnpvddyoawfkkodnz.supabase.co/storage/v1/object/public/images/kohli.jpg" alt="Athlete of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Athlete of the Day */}
              </div>
              <p className="text-lg font-semibold">athlete of the day</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}