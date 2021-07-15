const v_main = require('../views/v_main');
const date = new Date();

module.exports = (req, res) => {
    res.send(v_main(date.getSeconds()));
};