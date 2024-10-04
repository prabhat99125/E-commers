const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h4>it is working  in rout Admin</h4>");
});

module.exports = router;