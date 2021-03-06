const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercises = new Schema({
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

const Exercise = mongoose.model("Exercise", Exercises);
module.exports = Exercise;