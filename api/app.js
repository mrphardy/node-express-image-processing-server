const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');

const app = express();

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
});

module.exports = app;