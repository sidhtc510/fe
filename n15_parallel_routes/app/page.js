import Link from "next/link";

export default function Home() {
  return (
    <div>Home page 
      <Link href="/parallel" className="font-bold m-2 block">Parallel</Link>
    </div>
  );
}
