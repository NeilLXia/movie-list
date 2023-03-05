const express = require('express');
const app = express();
module.exports.app = app;

const PORT = 3000 || process.env.PORT;

// Middleware
const cors = require('cors');
const router = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', router);
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})