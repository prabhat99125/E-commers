const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom")
.then(() => {
    console.log("db is conected");
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose.connection