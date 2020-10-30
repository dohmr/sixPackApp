const router = require("express").Router();
const db = require("../models");

// GET workouts from schema
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// PUT exercise into current workout. save by ID
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findOneAndUpdate({ _id: params.id },
        { $push: { excercises: body } },
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// CREATE new workout, remove old data?
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// DELETE  current workout and start a new
router.delete("/api/workouts", ({ body }, res) => {
    db.Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;