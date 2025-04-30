import "./../styles/globals.css"; // questo importa il CSS con i font
import { Inter } from 'next/font/google';

export const metadata = {
  title: "ANIMAE",
  description: "Custodi dell’identità emozionale nel Web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
