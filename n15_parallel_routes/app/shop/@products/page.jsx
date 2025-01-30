
export default async function ProductsPage() {

    const products = await fetchProducts();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Список товаров</h2>
            <ul className="grid grid-cols-3 gap-2 ">
                {products.map((product) => (
                    <li key={product.id} className="border border-gray-800 p-1 rounded-lg">
                        <p className="text-sm font-semibold mt-2">{product.title}</p>
                        <p className="text-gray-500">€{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function fetchProducts() {
    console.log('wait')
    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=2");
    if (!res.ok) throw new Error("Ошибка загрузки товаров");
    console.log('done')
    return res.json();
}