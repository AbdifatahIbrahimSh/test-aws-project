import express from "express";

const port = 3000;
const app = express();

const posts = [
    {id: 1, title: "Post Title", content: "This is the content of the post"},
    {id: 2, title: "Hardware vs Software", content: "This is the content of the post"},
    {id: 3, title: "Artificial Intelligence", content: "This is the content of the post"}
]

app.get("/", (req, res) => {
    res.send("Hi baby, I love you 🧡. Amoun is my best women to relate.")
});

app.get("/posts", (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log("Running on port " + port);
})