const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

//env envair ments
const env = require("dotenv").config()
const PORT = process.env.PORT || 8080;


//use
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

//raout
app.get("/", (req, res) => {
    res.send("<h3>hey</h3>")
});

app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});



