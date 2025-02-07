// definizione degli exports
exports.getAllPosts = (req, res) => {
    res.send("Lista di tutti i post");
};

exports.getPostById = (req, res) => {
    res.send(`Dettaglio del post con ID ${req.params.id}`);
};

exports.deletePost = (req, res) => {
    res.send(`Post con ID ${req.params.id} eliminato`);
};

let posts = require("../data/posts"); // Importiamo l'array di post

// Index: lista di tutti i post
exports.getAllPosts = (req, res) => {
    res.json(posts);
};

// Show: singolo post in base all'ID
exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) {
        return res.status(404).json({ message: "Post non trovato" });
    }
    res.json(post);
};

// Destroy: Elimina un post  
exports.deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post non trovato" });
    }
    
    // Rimuovo il post dall'array
    posts.splice(postIndex, 1);
    console.log("Lista aggiornata dei post:", posts);
    
    // 204: No Content
    res.status(204).send(); 
};
