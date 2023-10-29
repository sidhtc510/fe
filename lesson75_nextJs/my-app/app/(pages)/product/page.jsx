import Container from "@/app/components/Container";
import Link from "next/link";
import s from "./s.module.css";
import Image from "next/image";

export const metadata = {
    title: "Product",
    description: "Product description",
};
export default async function Product() {
    const data = await getData();

    return (
        <Container className={s.contWrap}>
            {data.map((item) => (
                <Link key={item.id} href={`product/${item.id}`}>
                    <div className={s.itemWrap}>{item.title}</div>
                    {item.images.map((image) => (
                        <Image src={image} alt={'text'} width={500} height={500} />
                    ))}
                </Link>
                
            ))}
        </Container>
    );
}
async function getData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        next: {
            revalidate: 60,
        },
        // cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
