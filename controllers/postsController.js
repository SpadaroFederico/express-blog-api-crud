let posts = require("../data/posts"); // Importiamo l'array dei post

//  Index: Restituisce la lista di tutti i post
exports.getAllPosts = (req, res) => {
    res.json(posts);
};

//  Show: Restituisce un singolo post in base all'ID
exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) {
        return res.status(404).json({ message: "Post non trovato" });
    }
    res.json(post);
};

//  Create: Aggiunge un nuovo post
exports.createPost = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "Titolo e contenuto sono obbligatori" });
    }

    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1, // Genera ID automaticamente
        title,
        content
    };

    posts.push(newPost);
    console.log("Lista aggiornata dei post:", posts);
    
    res.status(201).json(newPost); // 201 Created
};

//  Update: Modifica un post esistente
exports.updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post non trovato" });
    }

    if (title) posts[postIndex].title = title;
    if (content) posts[postIndex].content = content;

    console.log("Lista aggiornata dei post:", posts);

    res.json(posts[postIndex]); // Ritorna il post aggiornato
};

//  Destroy: Elimina un post e stampa la lista aggiornata
exports.deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post non trovato" });
    }

    posts.splice(postIndex, 1); // Rimuove il post dall'array
    console.log("Lista aggiornata dei post:", posts);
    
    res.status(204).send(); // 204: No Content
};

// store: 
exports.storeSinglePost = (req, res) => {
    // Recupero i dati dal body della richiesta
    const { title, content, author } = req.body;

    // Controllo che i dati siano validi
    if (!title || !content || !author) {
        return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
    }

    // Creazione del nuovo post
    const newPost = {
        id: Date.now(),
        title,
        content,
        author,
        createdAt: new Date()
    };

    // Restituisco la risposta JSON
    res.status(201).json(newPost);
};
