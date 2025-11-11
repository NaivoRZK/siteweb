import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Roboto } from "next/font/google";
import theme from "./theme"; // 🎨 Ton thème MUI (light/dark + palette perso)
import "./globals.css"; // 🧩 Tes styles Tailwind + CSS custom
import Navbar from "./components/Navbar"; // 🧭 Header global
import Footer from "./sections/Footer";   // ⚓ Footer global

// --- Importation de la police Roboto via Next.js Fonts API ---
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// --- Métadonnées du site ---
export const metadata: Metadata = {
  title: "Portfolio – Andry",
  description: "Développeur Full Stack | React, Next.js, TailwindCSS & MUI",
};

// --- Layout principal ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${roboto.variable}`}>
      <body className="antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        {/* MUI + Next.js App Router intégration */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* Reset global de MUI (marge, typo, couleurs par défaut) */}
            <CssBaseline />

            {/*  Barre de navigation */}
            <Navbar />

            {/*  Contenu des pages */}
            <main className="min-h-screen pt-20 px-4 sm:px-8">{children}</main>

            {/*  Pied de page */}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
