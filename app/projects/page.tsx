'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  // Exemple de projets — tu pourras les remplacer par les tiens
  const projects = [
    {
      title: "Magasin POS",
      description:
        "Application de gestion de magasin (inventaire, facturation, statistiques) développée avec Laravel, PostgreSQL et Docker.",
      image: "/projects/pos.jpg",
      link: "#",
      tags: ["Laravel", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "CuizApp",
      description:
        "Plateforme web de partage de recettes modernes, avec authentification, API et interface mobile-friendly.",
      image: "/projects/cuizapp.jpg",
      link: "#",
      tags: ["Vue.js", "Laravel API", "TailwindCSS"],
    },
    {
      title: "GMAO – Maintenance industrielle",
      description:
        "Système complet de gestion de maintenance préventive, diagrammes UML et intégration d’un module planification.",
      image: "/projects/gmao.jpg",
      link: "#",
      tags: ["React", "Node.js", "MySQL", "Lucidchart"],
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-20 transition-colors duration-500">
      {/* === En-tête === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Mes Projets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
          Une sélection de mes réalisations récentes — du design à la mise en
          production, avec passion et précision.
        </p>
      </motion.div>

      {/* === Liste des projets === */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="
              group relative overflow-hidden rounded-2xl 
              bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl 
              border border-gray-200 dark:border-gray-800 
              transition-all duration-300
            "
          >
            {/* Image du projet */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
