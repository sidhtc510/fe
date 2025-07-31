import Link from "next/link";

export default function Home() {
  const mockItems = [
    { id: '1', title: 'Товар 1', description: 'Описание товара 1' },
    { id: '2', title: 'Товар 2', description: 'Описание товара 2' },
  ]

  return (
    <div className="flex flex-col gap-4">

      {
        mockItems.map((el) => (
          <Link key={el.id} href={`/items/${el.id}`} passHref>
            {el.title}
          </Link>
        ))
      }
    </div>
  );
}
