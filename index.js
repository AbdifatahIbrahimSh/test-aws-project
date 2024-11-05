import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hi baby, I love you 🧡")
});

app.listen(port, () => {
    console.log("Running on port " + port);
})