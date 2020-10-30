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
router.get("/api/workouts/range", ({ query }, res) => {
    db.Workout.find({ day: { $gte: query.start, $lte: query.end } })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
// PUT exercise into current workout. save by ID
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findOneAndUpdate({ _id: params.id },
        { $push: { excercises: body } },
    )
        .then(updatedWorkout => {
            res.json(updatedWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// CREATE new workout, remove old data?
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})

        .then(addWorkout => {
            res.json(addWorkout);
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