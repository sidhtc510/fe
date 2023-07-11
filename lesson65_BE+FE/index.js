const express = require("express");
const users = require("./routes/users");

const PORT = 3333;

const app = express();

app.use(express.json())
app.use('/users', users)

app.listen(PORT, () => {
    console.log("server started on " + PORT);
});


