const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/dbConnection");
//router
const user = require("./rauters/user");
const owner = require("./rauters/owner");
const producst = require("./rauters/products");
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
app.use("/", user);
app.use("/owner", owner);
app.use("/producst", producst)

app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});



