const express = require('express');
const cors = require('cors');

const validatorRouter = require('./routes/validator/validator.router');
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(validatorRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;