const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workouts = new.Schema("Workout", {

    day: {
        type: Date,
    },
    exercise: [{
        ref: "Exercise"
    }],
    duration: {
        type: Number
    }


});

// day: new Date().setDate(new Date().getDate()-7),
// exercises: [
//   {
//     type: "cardio",
//     name: "Running",
//     duration: 25,
//     distance: 4

const Workout = mongoose.model(Workouts);
module.exports = Workout;