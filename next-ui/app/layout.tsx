import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const poppins = Poppins({
  variable: "--font-poppins", // Custom CSS variable for Poppins
  subsets: ["latin"], // Specify the subsets you need (e.g., "latin")
  weight: ["400", "500", "600", "700"], // Add weights you require
  display: "swap", // Improves performance by using fallback fonts while loading
});

export const metadata: Metadata = {
  title: "Alien UI",
  description: "Prebuilt Nativewind components",
  keywords: "UI, Nativewind, components, react native, expo, Alien UI",
  authors: [{ name: "AlienUI Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
