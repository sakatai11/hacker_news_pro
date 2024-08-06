import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as Default from './_components/layouts/Index';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
      <Default.Header />
        {children}
      <Default.Footer />
      </body>
    </html>
  );
}
