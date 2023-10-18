import Link from "next/link";
import Container from "../components/container";

export const metadata = {
    title: "Product",
    description: "Product description",
};
export default async function Product() {
    const data = await getData();

    return (
        <Container>
            {data.map((item) => (
                <div key={item.id}>
                    <p>
                        <Link href={`product/${item.id}`}>{item.title}</Link>
                    </p>
                </div>
            ))}
        </Container>
    );
}
async function getData() {
    // const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=5&offset=1"); // при таком варианте некст кэширует данные  
    const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=5&offset=1",{
        // revalidate: 60,
        cache: 'no-store'
    }); // при таком варианте некст кэширует данные  
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
