const mongoose = require('mongoose')
var userschema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password:String,
    cpassword:String
}, {collection : 'user'});
var user = mongoose.model("user", userschema);

module.exports = user