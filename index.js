const express = require("express");
const app = express();
require("dotenv/config.js");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.send("Welcome on our server...");
});

app.get("/:name", (req, res) => {
    const uname = req.params.name;
    return res.send(`<h1>Hello, ${uname}</h1>`);
});

app.listen(PORT, () => {
    return console.log(`Server is running on PORT:${PORT}`);
});
