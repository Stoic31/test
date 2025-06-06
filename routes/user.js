module.exports = function(knex) {
  const router = require('express').Router();
  const auth = require('../middleware/auth');
  const jwt = require('jsonwebtoken');

  router.post('/register', async (req, res) => {
    res.status(201).json({});
  });

  router.post('/login', async (req, res) => {
    res.json({});
  });

  router.post('/refresh', async (req, res) => {
    res.json({});
  });

  router.post('/logout', async (req, res) => {
    res.json({});
  });

  router.get('/:email/profile', auth, async (req, res) => {
    res.json({});
  });

  router.put('/:email/profile', auth, async (req, res) => {
    res.json({});
  });

  return router;
};
