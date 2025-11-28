
const express = require("express");


const app = express();
const PORT =  3000;

app.use(express.json());


const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

app.get("/", (req, res) => {
  res.send("Mock server is running");
});

app.get("/about", (req, res) => {
  res.send("Mock server is running About");
});

app.get("/posts", (req, res) => {
  const { id } = req.query;

  if (id) {
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.json(post);
  }

  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { name, title, content } = req.body;

  if ( !name|| !title || !content) {
    return res.status(400).json({ error: "Name and Title and content are required" });
  }

  const newPost = {
    id: posts.length + 1,
    name,
    title,
    content,
  };

  posts.push(newPost);

  res.status(201).json({
    message: "Post created successfully",
  });
});

app.use((req, res) => {
  res.status(404).send("Can not find");
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});