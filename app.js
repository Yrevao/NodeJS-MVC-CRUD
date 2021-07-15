const express = require('express');
const routes = require('./lib/routes');
const app = express();
const port = 3123;

app.use('/', routes);

app.listen(port);