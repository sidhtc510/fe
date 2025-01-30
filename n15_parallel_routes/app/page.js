import Link from "next/link";

export default function Home() {
  return (
    <div>Home page 
      <Link href="/shop" className="font-bold m-2 block">shop</Link>
    </div>
  );
}
