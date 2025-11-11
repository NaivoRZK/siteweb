'use client';

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      {/* === En-tête === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Contactez-moi
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
          Une idée de projet, une collaboration ou une simple question ?  
          N’hésitez pas à m’envoyer un message — je vous répondrai rapidement.
        </p>
      </motion.div>

      {/* === Formulaire === */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 sm:p-10 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Merci pour votre message ! ✅");
        }}
      >
        {/* Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ex : Andry Rakoto"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="exemple@email.com"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Votre message..."
            rows={5}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Bouton */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
        >
          Envoyer le message
        </motion.button>
      </motion.form>
    </section>
  );
}
