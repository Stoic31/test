module.exports = function(knex) {
  const router = require('express').Router();
  router.get('/search', async (req, res) => {
    res.json({data: []});
  });
  router.get('/data/:imdbID', async (req, res) => {
    res.json({});
  });
  return router;
};
