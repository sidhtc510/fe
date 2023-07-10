const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    text: String,
    width: Number,
    height: Number,
    x: Number,
    y: Number
});