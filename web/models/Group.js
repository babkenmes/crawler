const mongoose = require('mongoose')

const groupnSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Animation', 'Device'],
        required: true
    }
});

groupnSchema.index({ name: 1, type: 1 }, { unique: true });

const Group = mongoose.model('Group', groupnSchema);

module.exports =  Group