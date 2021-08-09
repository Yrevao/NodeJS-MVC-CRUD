const m_Cell = require('../models/m_Cell');
const v_Cell = require('../views/v_Cell')

module.exports = {
    // add new button
    create: (req, res) => {
        m_Cell.create({text: req.query.data}, (error) => {
            if(error) console.log(error);
            
            m_Cell.find((err, data) => {
                res.send(v_Cell(data));
            });
        });
    },
    // read all and display on page load
    read: (req, res) => {
        m_Cell.find((err, data) => {
            res.send(v_Cell(data));
        });
    },
    // edit text
    update: (req, res) => {
        m_Cell.findByIdAndUpdate(req.query.id, { text: req.query.data }, (error) => {
            if(error) console.log(error);
            
            m_Cell.find((err, data) => {
                res.send(v_Cell(data));
            });
        });
        
    },
    // remove from list
    delete: (req, res) => {
        m_Cell.findByIdAndDelete(req.query.id, (error) => {
            if(error) console.log(error);

            m_Cell.find((err, data) => {
                res.send(v_Cell(data));
            });
        })
    },
};