import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SortingAlgorithmProvider } from "./context/Visualizer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sorting Algorithm Visualizer",
  description: "This project is a Sorting Algorithm Visualizer, which allows users to visualize different sorting algorithms with smooth animations and customizable speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
      </body>
    </html>
  );
}
