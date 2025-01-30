import Link from 'next/link';
import React from 'react'

export default async function ProductPage({params}) {
    const { id } = await params
    const product = await fetchProduct(id);
    return (
        <div>
            <h2><Link href="/shop">back</Link></h2>
            {product.title}</div>
    )
}

async function fetchProduct(id) {
    // console.log('wait')
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    if (!res.ok) throw new Error("Ошибка загрузки товарa");
    // console.log('done')
    return res.json();
}
