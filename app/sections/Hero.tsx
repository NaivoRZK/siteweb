'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center text-center 
        min-h-screen px-6 overflow-hidden 
        bg-gradient-to-br from-indigo-50 via-white to-purple-50 
        dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
        transition-colors duration-500
      "
    >
      {/* === Contenu principal === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* 👋 Titre principal */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight
            text-gray-800 dark:text-gray-100 tracking-tight
          "
        >
          Salut, je suis <span className="text-gradient">Andry</span>
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">
            Développeur Full Stack & Designer Web
          </span>
        </h1>

        {/* 💬 Texte descriptif */}
        <p
          className="
            text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 
            max-w-2xl mx-auto mb-10 leading-relaxed
          "
        >
          Je conçois des applications web modernes, performantes et
          esthétiques avec{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Next.js
          </span>
          ,{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Tailwind CSS
          </span>{" "}
          et{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            TypeScript
          </span>
          . Mon objectif : une expérience utilisateur fluide sur tous les
          appareils.
        </p>

        {/* 🎯 Boutons d’action */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="
              px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white 
              rounded-xl font-semibold shadow-lg hover:shadow-indigo-300/40 
              transition duration-300
            "
          >
            Voir mes projets
          </Link>

          <Link
            href="/contact"
            className="
              px-8 py-3 border-2 border-indigo-600 text-indigo-600 
              dark:border-indigo-400 dark:text-indigo-400 rounded-xl 
              font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/40 
              transition duration-300
            "
          >
            Me contacter
          </Link>
        </div>
      </motion.div>

      {/* === Décor lumineux === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -bottom-32 right-16 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute -top-24 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
      />
    </section>
  );
}
