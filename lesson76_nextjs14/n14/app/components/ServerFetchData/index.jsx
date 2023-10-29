import React from "react";

async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos",{
        next:{
            revalidate:60
        }
    });
    if (!data.ok) {
        throw new Error("getData error");
    }
    return data.json();
}

export default async function ServerFetchData() {
    const data = await getData();

    return <div>
        {data.map(el=><p key={el.id}>{el.title}</p>)}
    </div>;
}
