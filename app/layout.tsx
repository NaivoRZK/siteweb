import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import theme from "./theme"; // ton fichier theme.ts dans app/
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Header
import Footer from "./sections/Footer"; // ✅ Footer ajouté

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js + Tailwind + MUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="antialiased bg-gray-50">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/*  Header global */}
            <Navbar />

            {/*  Contenu de chaque page */}
            <main className="min-h-screen">{children}</main>

            {/*  Footer global */}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
