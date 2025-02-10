const notRoutes = (req, res, next) => {
    res.status(404).json({ error: "Rotta non trovata" });
  };
  
  module.exports = notRoutes;
  