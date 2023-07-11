fetch("http://localhost:3333/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "ivan", email: "iv@gmail.com", age: 31 }),
})
    .then((resp) => resp.json())
    .then((data) => console.log(data ));
