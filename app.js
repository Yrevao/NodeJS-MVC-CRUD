const express = require('express');
const mongoose = require('mongoose');
const settings = require('./settings/appSettings');
const routes = require('./lib/routes');

// attempt to connect to locally hosted database
mongoose.connect(settings.dbURL, { useNewUrlParser: true, useFindAndModify: false }).
    catch(error => {
        console.log(`ERROR: cannot connect to database, check URL! \n ${error}`);
    });
const app = express();

app.use('/', routes);
app.listen(settings.port);