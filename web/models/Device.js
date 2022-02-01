const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_agent: {
        type: String,
        required: true
    },
    window_size: {
        type: String,
        required: true
    },
    mobile: {
        type: Boolean,
        default: false
    },
    group: { 
        type: Schema.Types.ObjectId, 
        ref: 'Group',
        required: true
    }
});
const Device = mongoose.model('Device', deviceSchema);

module.exports =  Device