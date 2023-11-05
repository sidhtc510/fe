import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "NextJS + MongoDB | CRUD",
    description: "Crud",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased` } >
                <Header />
                {children}
            </body>
        </html>
    );
}
