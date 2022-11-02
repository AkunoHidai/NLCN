const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(require, request) {
    request.json({message: "welcum to clothes manager application"})
});

module.exports = app;