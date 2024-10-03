const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    imege: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgColor: String,
    panelColor: String,
    textColor: String
});

module.exports = mongoose.model("admin", ownerSchema);