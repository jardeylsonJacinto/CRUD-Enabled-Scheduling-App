const bodyParser = require('body-parser');
const { routes } = require('./routes');
const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = { origin: 'http://localhost:3333'};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = { app };