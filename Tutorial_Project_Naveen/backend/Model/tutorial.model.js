const mongoose = require('mongoose');

const tutorialSchema = mongoose.Schema({
    title:{type : String,required:false},
    description:{type : String,required:false},
    status:{type: String,required:false}
});


const Tutorial = mongoose.model('Model',tutorialSchema,'tutorial');

module.exports = Tutorial;