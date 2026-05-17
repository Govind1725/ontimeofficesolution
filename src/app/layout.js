import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Pattern Breaking - Fast Fashion's Dirty Tricks",
  description:
    "Discover the manipulative dark patterns ultra-fast fashion brands use on their websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
