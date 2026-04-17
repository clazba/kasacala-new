import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CasaKalaLogo from '../../assets/CasaKalaLogo';

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/menu" },
    { name: "Work", path: "/work" },
    { name: "Play", path: "/play" },
    { name: "Create", path: "/create" },
    { name: "Connect", path: "/connect" }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-8 pointer-events-none">
        <Link to="/menu" className="pointer-events-auto">
          <div className="flex items-center justify-center">
            <CasaKalaLogo className="text-on-surface h-4 md:h-6 w-auto object-contain" />
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          className="pointer-events-auto group flex flex-col justify-center items-center w-12 h-12 bg-background/80 backdrop-blur-md rounded-full border border-outline-variant/30 hover:bg-surface-variant transition-colors"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-on-surface">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-opacity duration-700 flex flex-col items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-5xl md:text-7xl font-headline font-extralight text-on-background hover:text-primary transition-colors hover:italic"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
