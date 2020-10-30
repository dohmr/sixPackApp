  
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const path = require("path");

// "/exercise"

// "/index"

// "/stats"


router.get("/", (req ,res) => {
    res.sendFile("/index.html")
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;