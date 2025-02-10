const erroreMiddlewares = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      error: err.message || "Errore interno del server",
    });
  };
  
  module.exports = erroreMiddlewares;
  