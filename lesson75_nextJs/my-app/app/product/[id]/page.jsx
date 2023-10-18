import Container from "@/app/components/container";

export async function generateMetadata({ params }) {
    const data = await getData(params.id);

    return {
        title: `Title: ${data.title}`,
        description: `Descr:  ${data.description}`,
    };
}

export default async function IndividualProduct({ params }) {
    const data = await getData(params.id);
    return (
        <Container>
            <h1 className="text-2xl">{data.title}</h1>
        </Container>
    );
}

async function getData(id) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
