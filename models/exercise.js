const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercises = new.Schema("Excercise", {
    type: String,
    name: String,    
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
});

// type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4

const Exercise = mongoose.model(Exercises);
module.exports = Exercise;