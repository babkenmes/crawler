const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const containerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reset_cycle: Number,
    api: String,
    vpn_name: String,
    region_tag: String,
    geo_location: String,
    current_region: String,
    last_region_change: Date,
    has_error: Boolean,
    error_message: String
});

const Container = mongoose.model('Container', containerSchema);

module.exports = Container