"use client";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa'; 
import { MdMenuOpen } from "react-icons/md"; 
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navItems = [
    { name: 'Inicio', path: '/home' },
    { name: 'Comunidad Premium', path: '/comunidad-premium' },
    { name: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' },
  ];

  const navIcons = [
    { icon: <FaYoutube/>, href: 'https://www.youtube.com/@babyivanfx'},
    { icon: <FaInstagram/>, href: 'https://www.instagram.com/babyivanfx/'},
    { icon: <FaDiscord/>, href: '' }
  ];

  return (
    <header className="w-full bg-gradient-green h-16 flex justify-between items-center px-8 shadow-lg shadow-gray-900">
      <div className="text-gold text-3xl font-serif tracking-wider">
        <Link to="/" className=" ">
          Logo
        </Link>
      </div>

      <nav className="hidden lg:flex gap-10">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative group tracking-wide font-poppins px-2  transition-all duration-300 ease-in-out 
              ${location.pathname === item.path ? 'text-yellow-600 font-semibold' : 'text-gray-50 hover:text-yellow-600'}
            `}
            >
              {item.name}
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full
                ${location.pathname === item.path ? 'w-full' : ''}
              `}
            />
          </Link>
        ))}
      </nav>
      <div className="flex gap-6 items-center">
        <div className="hidden lg:flex gap-4 items-center">
          {navIcons.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-yellow-600 text-2xl transition duration-300 transform hover:scale-150"
            >
              {item.icon}
            </a>
          ))}
          <Link
            to="/contacto"
            className="bg-black text-gray-100 px-5 py-2 rounded-full font-medium hover:bg-yellow-600 hover:text-black transition duration-300 shadow-lg shadow-green1 hover:shadow-black transform hover:scale-110"
          >
            Contáctanos
          </Link>
        </div>

        <div className="lg:hidden">
          <MdMenuOpen 
            onClick={toggleMenu}
            className="text-yellow-600 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150 cursor-pointer"
          />
        </div>
      </div>

      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
