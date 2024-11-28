import { Dancing_Script, Playfair_Display } from "next/font/google"; // Ensure you import the font properly
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
// import Footer from "@/components/footer/Footer";

const cursive = Dancing_Script({
  weight: ["400"], // Adjust weights if needed
  style: ["normal"],
  subsets: ["latin"],
  variable: "--cursive", // Ensure this matches your CSS variable naming convention
  display: "swap",
});

const font1 = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"], // Weights available
  style: ["normal"], // Only normal style
  subsets: ["latin"], // Latin character set
  variable: "--font1", // CSS variable name
  display: "swap", // Font display strategy
});

export const metadata: Metadata = {
  title: "Assignment",
  description: "Online cloth store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cursive.variable} ${font1.variable} bg-white`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
``
