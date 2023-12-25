"use client";
import React, { useState } from "react";
import Card from "./components/Card";
import FormAddItem from "./components/FormAddItem";

const obj = [
    { id: 1, title: "item1", price: 20 },
    { id: 2, title: "item2", price: 22 },
    { id: 3, title: "item3", price: 23 },
];

export default function Home() {
    const [items, setItems] = useState(obj);

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const delItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <main>
            Home Page
            <FormAddItem {...{ addItem }} />
            <div style={{ display: "flex", gap: "10px", margin: "8px" }}>
                {items.map((item) => (
                    <Card key={item.id} delItem={delItem} {...item} />
                ))}
            </div>
        </main>
    );
}
