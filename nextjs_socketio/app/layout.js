import localFont from "next/font/local";
import { SocketProvider } from './SocketContext'; // Импортируем провайдер
import Link from "next/link";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-6 cursor-pointer">
          <Link href='/'>main</Link>
          <Link href='/admin'>admin</Link>
        </div>
        {/* Оборачиваем дочерние компоненты в SocketProvider */}
        <SocketProvider>
          {children}
        </SocketProvider>
      </body>
    </html>
  );
}