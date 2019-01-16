'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the task'
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);