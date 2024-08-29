"use client"; // Mark this as a client component
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar/Header */}
      <header className="w-full flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={darkMode ? "/logo-w.png" : "/logo.png"}
            alt="Logo"
            className="w-40 h-auto"
          /> {/* Adjust size as needed */}
        </div>

        {/* Centered Date and Time Machine Button */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-semibold">{currentDate}</p>
          <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm md:text-base">
            Time Machine
          </button>
        </div>

        {/* Profile Icon, Feature Button, and Dropdown */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm md:text-base border border-orange-500">
            Feature
          </button>
          <div className="relative">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#6c7932] text-white rounded-md shadow-lg z-50" onMouseLeave={closeDropdown}>
                <button className="block w-full text-left px-4 py-2 hover:bg-zinc-900 hover:rounded-md">Log in / Log out</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-zinc-900 hover:rounded-md">Upgrade to Pro</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-zinc-900 hover:rounded-md">Bookmarks</button>
                <div className="px-4 py-2">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        className="sr-only"
                      />
                      <div className={`block bg-gray-600 w-10 h-6 rounded-full ${darkMode ? 'bg-green-400' : 'bg-gray-600'}`}></div>
                      <div
                        className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${darkMode ? 'transform translate-x-full' : ''}`}
                      ></div>
                    </div>
                    <span className="ml-3">Dark Mode</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center w-full mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl px-4">
          {/* Sport of the Day */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
              <img src="/diskgolf.png" alt="Sport of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Sport of the Day */}
            </div>
            <p className="text-lg font-semibold">sport of the day</p>
          </div>

          {/* Kit of the Day */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
              <img src="/kit.png" alt="Kit of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Kit of the Day */}
            </div>
            <p className="text-lg font-semibold">kit of the day</p>
          </div>

          {/* Venue of the Day */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
              <img src="/wembley.jpg" alt="Venue of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Venue of the Day */}
            </div>
            <p className="text-lg font-semibold">venue of the day</p>
          </div>

          {/* Athlete of the Day */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-52 h-48 mb-2">
              <img src="/kohli.jpg" alt="Athlete of the Day" className="w-52 h-40 object-cover rounded-md" /> {/* Image for Athlete of the Day */}
            </div>
            <p className="text-lg font-semibold">athlete of the day</p>
          </div>
        </div>
      </section>
    </div>
  );
}
