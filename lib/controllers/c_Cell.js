const m_Cell = require('../models/m_Cell');
const v_Cell = require('../views/v_Cell')

module.exports = {
    // add new button
    create: (req, res) => {
        m_Cell.create({text: req.query.data});
    },
    // read all and display on page load
    read: (req, res) => {
        m_Cell.find((err, data) => {
            res.send(v_Cell.refresh(data));
        });
    },
    // edit text
    update: (req, res) => {

    },
    // remove from list
    delete: (req, res) => {

    },
};