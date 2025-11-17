'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  return (
    <nav className="relative flex justify-between items-center p-4 
                    bg-slate-900 text-white 
                    dark:bg-slate-100 dark:text-slate-900">
      
      {/* Logo */}
      <div className="font-bold text-lg">Mon Portfolio</div>

      {/* BOUTON – fond basé UNIQUEMENT sur l’icône */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className={`
          p-2 rounded-full transition

          ${resolvedTheme === "light"
            ? "bg-black text-white"     // Moon → fond noir
            : "bg-yellow-300 text-yellow-900"}  // Sun → fond jaune
        `}
      >
        {resolvedTheme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md lg:hidden hover:bg-slate-800 dark:hover:bg-slate-200 transition"
        aria-label="Toggle menu"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-6">
        <Link href="/" className="hover:text-blue-400">Accueil</Link>
        <Link href="/about" className="hover:text-blue-400">À propos</Link>
        <Link href="/projects" className="hover:text-blue-400">Projets</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-3/4 h-full 
                       bg-slate-800 text-white 
                       dark:bg-slate-200 dark:text-slate-900
                       p-6 flex flex-col space-y-6
                       z-50 shadow-lg lg:hidden"
          >
            <Link href="/" onClick={toggleMenu} className="text-lg hover:text-blue-400">
              Accueil
            </Link>
            <Link href="/about" onClick={toggleMenu} className="text-lg hover:text-blue-400">
              À propos
            </Link>
            <Link href="/projects" onClick={toggleMenu} className="text-lg hover:text-blue-400">
              Projets
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="text-lg hover:text-blue-400">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
