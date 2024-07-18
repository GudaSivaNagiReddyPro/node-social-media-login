const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("Message")
    res.render("pages/index.js")
});

module.exports = router;
