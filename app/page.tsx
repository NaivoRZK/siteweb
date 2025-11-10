'use client';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Hero />
    </main>
  );
}
