const mongoose = require('mongoose');

const cellSchema = new mongoose.Schema({
    text: String
});

module.exports = mongoose.model('Cell', cellSchema);