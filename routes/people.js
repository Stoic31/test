module.exports = function(knex) {
  const router = require('express').Router();
  router.get('/:id', async (req, res) => {
    res.json({});
  });
  return router;
};
