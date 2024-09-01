"use client";
import { useState } from 'react';

export default function ProfileDropdown({ darkMode, toggleDarkMode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
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
  );
}
