import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { Roboto } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import theme from "./theme";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";

// --- Police Roboto ---
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// --- Métadonnées ---
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
    <html lang="fr" className={roboto.variable} suppressHydrationWarning>
      <body className="antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <MUIThemeProvider theme={theme}>
              <CssBaseline />

              {/* --- Navbar globale --- */}
              <Navbar />

              {/* --- Contenu des pages --- */}
              <main className="min-h-screen pt-20 px-4 sm:px-8">
                {children}
              </main>

              {/* --- Pied de page --- */}
              <Footer />
            </MUIThemeProvider>
          </AppRouterCacheProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
