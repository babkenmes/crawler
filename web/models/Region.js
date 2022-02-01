const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const regionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vpn_name: String,
    last_busy_time: Date,
    start_time: Date,
    priority: {
        type: Number,
        default: function () {
            return Math.floor(Math.random() * 1000)
        }
    },
    busy: {
        type: Boolean,
        required: true,
        default: 'false'
    }
});

const Region = mongoose.model('Region', regionSchema);

module.exports = Region