const express = require("express");
const app = express();

app.use(express.json()); // Middleware per gestire JSON

// Importo le rotte dei post
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

const notRoutes = require("./middlewares-routes/notRoutes");
app.use(notRoutes); // Prima del middleware per gli errori

const erroreMiddlewares = require("./middlewares-error/erroreMiddlewares");
app.use(erroreMiddlewares); // Deve essere l'ultimo middleware

const notFound = require('./middlewares-routes/notRoutes');

const errorHandler = require('./middlewares-error/erroreMiddlewares');

// Middleware per le rotte non trovate (404)
app.use(notFound);  // Dovrebbe essere dopo tutte le route

// Middleware per la gestione degli errori (500)
app.use(errorHandler);  // Deve essere l'ultimo middleware



// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
