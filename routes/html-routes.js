  
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


"/exercise"

"/index"

"/stats"
const db = require("../models")

router.get("/", (req ,res) => {
    res.sendFile("index.html")
});

router.get("/exercise", (req, res) => {
    res.sendFile("exercise.html")
});

router.get("/stats", (req, res) => {
    res.sendFile("stats.html")
});