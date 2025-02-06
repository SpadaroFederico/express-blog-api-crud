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
