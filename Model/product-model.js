const mongoose = require("mongoose");

const producSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    
    products : {
        type : Array,
        default : []
    },
    gstn : String,
    picture : String
});

module.exports = mongoose.model("products", producSchema);