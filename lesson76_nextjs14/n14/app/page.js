import Image from "next/image";

export default function Home() {
    return (
        <main>
            <h2>Home Page</h2>
            <Image 
            src='/4.avif'
            width={300}
            height={550}
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
        </main>
    );
}
