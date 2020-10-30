const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workouts = new Schema({

    day: {
        type: Date,
    },
    exercise: [{
        type: Schema.Types.ObjectId,
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

const Workout = mongoose.model("Workout", Workouts);
module.exports = Workout;