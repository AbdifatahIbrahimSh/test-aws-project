import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hi baby, I love you 🧡. Amoun is my best women to relate.")
});

app.listen(port, () => {
    console.log("Running on port " + port);
})