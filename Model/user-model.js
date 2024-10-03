const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const userSchme = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    isAdmin : Boolean,
    odear : {
        type : Array,
        default : []
    },
    contect : Number,
    picture : String
});

module.exports = mongoose.model("users", userSchme);