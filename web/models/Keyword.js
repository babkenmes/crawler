const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const keywordSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    words: {
        type: String,
        required: true
    },
    animation_group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    device_group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    tld: {
        type: String,
        required: true
    },
    region_tag: {
        type: String,
        default: "vpn"
    },
    animation: String,
    device: String,
    hasError: {
        type: Boolean,
        default: false
    },
    running: {
        type: Boolean,
        default: false
    },
    reserved: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Number,
        default: 0
    },

    crawl: Boolean,
    links_count: Number,
    link:String,
    crawled: Boolean,

    durations: [],
    last_run: Date,
    reserved_on: Date,
    errorMessage: String,
    message: String
});
const Keyword = mongoose.model('Keyword', keywordSchema);

module.exports = Keyword