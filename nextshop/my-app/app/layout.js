import NavMenu from "./components/NavMenu";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NavMenu />
                {children}
            </body>
        </html>
    );
}
