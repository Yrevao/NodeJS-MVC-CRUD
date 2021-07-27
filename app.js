const express = require('express');
const mongoose = require('mongoose');
const settings = require('./settings/appSettings');
const routes = require('./lib/routes');

mongoose.connect(settings.dbURL, { useNewUrlParser: true });
const app = express();

app.use('/', routes);
app.listen(settings.port);