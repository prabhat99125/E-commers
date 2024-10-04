const mongoose = require("mongoose");
require("dotenv").config()

const dblink = process.env.dbConnection;

mongoose.connect(`${dblink}/ecom`)
.then(() => {
    console.log("db is conected");
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose.connection