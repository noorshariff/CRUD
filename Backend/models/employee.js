const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    name :{
        type:String
    },
    position : {
        type:Number
    },
    office : {
        type:String
    },
    salary :{
        type:Number
    }
})

module.exports = mongoose.model('Employee',employeeSchema)