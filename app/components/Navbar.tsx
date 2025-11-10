'use client';
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white">
      <div className="font-bold text-lg">Mon Portfolio</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-400">Accueil</a>
        <a href="/about" className="hover:text-blue-400">À propos</a>
        <a href="/projects" className="hover:text-blue-400">Projets</a>
        <a href="/contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
