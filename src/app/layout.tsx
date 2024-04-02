import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google'
import "./globals.css";

const ubuntu = Ubuntu({ weight: [ '300', '400', '500' , '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Fabricio Ramirez",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ 'bg-shark-950 min-h-screen ' + ubuntu.className }>{children}</body>
    </html>
  );
}
