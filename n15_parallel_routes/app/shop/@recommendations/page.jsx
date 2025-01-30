import Link from "next/link";

export default function Recommendations() {
  return (
    <div  className={'bg-gray-900 p-4 min-w-80'}>
      <h2 className="text-lg font-semibold">Рекомендации</h2>
      <p>Рекомендуемые товары для вас.</p>
      <Link href={'/shop/best'}>best</Link>
    </div>
  );
}