const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const animationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    group: { 
        type: Schema.Types.ObjectId, 
        ref: 'Group',
        required: true
    }
});
const Animation = mongoose.model('Animation', animationSchema);

module.exports =  Animation