const mongoose = require ('mongoose');

const suggestionSchema = new mongoose.Schema({
    title:{type:String,lowercase:true, unique:true},
    
})