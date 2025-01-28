"use client"

import { useCartStore } from './store';

export default function Home() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: 'Продукт', price: 100 };
    addItem(newItem);
  };

  return (
    <div>
      <h1>Корзина</h1>
      <button onClick={handleAddItem}>Добавить товар</button>
      <button onClick={clearCart}>Очистить корзину</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} — {item.price} ₽
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>

      {/* <div className='pt-4'>
        <Link href={`/test/${article}?id=222`}>Test link with qp </Link>
      </div> */}
    </div>
  );
}

