const Users = require("../database/models/user");
const express = require("express");

const route = express.Router();

route.post("/", (req, res) => {
    const { name, email, age } = req.body;

    (async () => {
        const user = new Users({ name, email, age });
        const savedUser = await user.save();
        res.json(savedUser);
    })();
    // res.json({ task: "create", data: { name, email, age } });
});

route.get("/all", (req, res) => {
    res.json({ task: "read" });
});

route.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ task: `read ${id}` });
});

route.put("/", (req, res) => {
    res.json({ task: "update" });
});

route.delete("/", (req, res) => {
    res.json({ task: "delete" });
});

module.exports = route;
