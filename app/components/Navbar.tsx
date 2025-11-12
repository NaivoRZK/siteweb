'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  if (!mounted) return null; // évite le clignotement du dark mode

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
      {/* Logo */}
      <div className="font-bold text-lg">Mon Portfolio</div>

      {/* Bouton pour basculer clair/sombre */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition"
        aria-label="Toggle dark mode"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Menu hamburger pour mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-slate-800 dark:hover:bg-slate-200 transition"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Liens de navigation */}
      <div
        className={`${menuOpen ? 'block' : 'hidden'} lg:flex space-x-4 transition-all duration-300`}
      >
        <Link href="/" className="hover:text-blue-400">
          Accueil
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          À propos
        </Link>
        <Link href="/projects" className="hover:text-blue-400">
          Projets
        </Link>
        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}
