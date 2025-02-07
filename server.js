const express = require("express");
const app = express();

app.use(express.json()); // Middleware per gestire JSON

// Importiamo le rotte dei post
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Avviamo il server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
