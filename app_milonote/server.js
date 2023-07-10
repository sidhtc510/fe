const express = require("express"); // import express from "express"
const mongoose = require("mongoose"); // import mongoose from "mongoose"
const cors = require("cors");
const bodyParser = require('body-parser');
const cardSchema = require("./schemas/card");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const Card = mongoose.model("cards", cardSchema);

app.get("/api/cards", async (req, res) => {
    const result = await Card.find().exec();
    res.send(result);
});

app.post("/api/cards", async (req, res) => {
    const card = new Card();
    const { top, left, width, height, text } = req.body;
    card.text = text;
    card.width = width;
    card.height = height;
    card.y = top;
    card.x = left;
    const { _id } = await card.save();
    res.send({ _id });
});

app.listen(port, () => {
    console.log(`Server is hosted on ${port}`);
    mongoose.connect("mongodb://127.0.0.1:27017/arbuzcards").then(() => {
        console.log("Connected to DB!");
    });
});
