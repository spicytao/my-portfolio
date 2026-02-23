// app/layout.js
import "./globals.css";
import React from "react";
import { Noto_Sans, Noto_Sans_SC } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
  weight: ["200", "300", "400", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata = {
  title: "Shengtao.Space",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body className={`${notoSans.variable} ${notoSansSC.variable}`}>
        {children}
      </body>
    </html>
  );
}
