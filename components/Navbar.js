"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faRectangleAd } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname(); // Get current path

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-10 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="relative flex justify-center items-center space-x-8 bg-gray-800 p-2 rounded-b-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { icon: faHome, name: 'home', href: '/' },
              { icon: faNewspaper, name: 'newsletter', href: '/newsletter' },
              { icon: faRectangleAd, name: 'advertisements', href: '/advertisement' },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`relative flex flex-col items-center cursor-pointer px-4 py-2 transition-colors duration-300 ${
                  pathname === item.href ? 'text-orange-500' : 'text-white'
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-2xl transition-colors duration-300`}
                />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
