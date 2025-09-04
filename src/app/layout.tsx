import type { Metadata } from "next";
import {  Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({

  subsets: ["latin"],
  weight: ["400", "500","700"],
});

export const metadata: Metadata = {
  title: "SuperSort",
  description: "SuperSort chrome extension",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/logo.png" />
      </head>
      <body
        className={`${alexandria.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
