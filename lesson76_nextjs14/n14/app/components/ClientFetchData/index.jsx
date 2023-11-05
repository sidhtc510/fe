"use client";
import React, { useEffect, useState } from "react";

export default function ClientFetchData() {
    const [state, setState] = useState([]);

    const getData = () => {
        if (state.length === 0) {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((resp) => resp.json())
                .then((data) => setState(data))
                .catch((error) => console.log("Error fetching data: ", error));
        } else {
            setState([]);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <button
                onClick={() => {
                    getData();
                }}
            >
                {state.length === 0 ? "Show data" : "Clear data"}
            </button>
            <p>
                {state.map((el) => (
                    <p key={el.id}>{el.title}</p>
                ))}
            </p>
        </div>
    );
}
