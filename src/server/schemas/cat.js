const mongoose = require('mongoose')
var category = mongoose.Schema({
    id:String,
    cname:String
}, {collection : category});
module.exports= mongoose.model("category", category);
