const fs = require('fs');
const https = require('https');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const knex = require('knex')(require('./knexfile').development);
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Load swagger spec
const openapi = require('./swagger/openapi.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(openapi));

// Dummy routes
app.use('/movies', require('./routes/movies')(knex));
app.use('/people', require('./routes/people')(knex));
app.use('/user', require('./routes/user')(knex));

// Start HTTPS server
const PORT = process.env.PORT || 3000;
const options = {
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
};
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
