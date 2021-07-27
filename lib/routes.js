const express = require('express');
const c_main = require('./controllers/c_main')
const c_Cell = require('./controllers/c_Cell')
const router = express.Router();

router.get('/main', c_main);

router.get('/create', c_Cell.create);
router.get('/', c_Cell.read);
router.get('/update', c_Cell.update);
router.get('/delete', c_Cell.delete);

module.exports = router;