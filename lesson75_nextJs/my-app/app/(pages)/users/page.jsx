import Container from "@/app/components/Container";
import React from "react";

export default async function UsersPage() {
    const data = await getData();
    return (
        <Container>
            {data.map((user) => (
                <p key={user.id}> {user.name}</p>
            ))}
        </Container>
    );
}

async function getData() {
    const res = await fetch("http://localhost:3000/api/items", {
        next: {
            revalidate: 60,
        },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
