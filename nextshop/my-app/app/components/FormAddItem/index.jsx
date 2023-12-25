import React from "react";

export default function FormAddItem({ addItem }) {
    const handler = (e) => {
        e.preventDefault();
        addItem({
            id: Date.now(),
            title: e.target.title.value,
            price: e.target.price.value,
        });
    };

    return (
        <form onSubmit={handler}>
            <input type="text" name="title" placeholder="title" />
            <input type="number" name="price" placeholder="price" />
            <button>Add item</button>
        </form>
    );
}
