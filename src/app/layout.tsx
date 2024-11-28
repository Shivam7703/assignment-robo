import { Dancing_Script } from "next/font/google"; // Ensure you import the font properly
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
      <body className={`${cursive.variable} bg-white`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
``
