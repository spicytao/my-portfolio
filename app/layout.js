// app/layout.js
import './globals.css'; 
import React from 'react';

export const metadata = {
  title: 'Shengtao Space',
  description: 'Welcome to Shengtao.space',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
