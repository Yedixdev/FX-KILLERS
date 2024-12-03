import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' },
    { name: 'Comunidad Premium', path: '/comunidad-premium' },
  ];

  return (
    <header className="w-full bg-[#4A7766] h-20 flex justify-between items-center px-8 shadow-lg">

      <div className="text-gold text-2xl font-serif italic tracking-wider">
        <Link to="/" className="hover:text-white transition duration-300">
          Rolex
        </Link>
      </div>

      <nav className="flex gap-10">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-white tracking-wide hover:text-gold transition duration-300 ${
              location.pathname === item.path ? 'border-b-2 border-gold ' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Link
      to="/contacto"
      className="bg-gold text-black px-5 py-2 rounded-full font-medium hover:bg-white transition duration-300">
         Contactanos
      </Link>
    </header>
  );
};

export default Header;
