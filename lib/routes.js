const express = require('express');
const c_Cell = require('./controllers/c_Cell')
const router = express.Router();

router.get('/create', c_Cell.create);
router.get('/', c_Cell.read);
router.get('/update', c_Cell.update);
router.get('/delete', c_Cell.delete);

module.exports = router;