import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-full bg-slate-700">Home page - компонент в app/page.js
      <Link href="/shop" className="font-bold m-2 block">ссылка на /shop из app/page.js</Link>
    </div>
  );
}
