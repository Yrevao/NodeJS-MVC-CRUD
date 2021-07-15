const express = require('express');
const c_main = require('./controllers/c_main')
const router = express.Router();

router.get('/main', c_main);

module.exports = router;