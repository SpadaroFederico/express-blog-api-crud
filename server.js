const express = require("express");
const app = express();

app.use(express.json()); // Middleware per gestire JSON

// Importo le rotte dei post
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
