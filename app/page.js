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
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

    // Manually constructing the date string
    const formattedDate = `${today.toLocaleDateString('en-GB', { weekday: 'long' })}, ${today.getDate()} ${today.toLocaleDateString('en-GB', { month: 'long' })} ${today.getFullYear()}`;

    setCurrentDate(formattedDate);
  }, []);

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

      {/* First Section: Content */}
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

      {/* Content Section */}


      <section className="flex flex-col items-center justify-center h-full w-full mt-24">
        <h2 className="text-xl font-semibold mb-8">Advertisements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-5xl px-4">
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
      <section className="flex flex-col items-center justify-center w-full mt-8 mb-20 px-4">
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
    <a href="#" className="text-gray-500 dark:text-gray-400">
      <img src="/tiktok.png" className="w-6 h-6 object-scale-down" /> {/* TikTok Icon */}
    </a>
    <a href="#" className="text-gray-500 dark:text-gray-400">
      <img src="/insta.png" className="w-6 h-6 object-scale-down" /> {/* Instagram Icon */}
    </a>
    <a href="#" className="text-gray-500 dark:text-gray-400">
      <img src="/youtube.png" className="w-6 h-6 object-scale-down" /> {/* YouTube Icon */}
    </a>
  </div>
</section>

    </div>
  );
}
