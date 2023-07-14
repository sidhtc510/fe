const express = require("express");
const users = require("./routes/users");
const connect = require('./database/database')
const cors = require('cors')

const PORT = 3333;
const app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.json())

connect()

app.use('/users', users)

app.listen(PORT, () => {
    console.log("server started on " + PORT);
});


