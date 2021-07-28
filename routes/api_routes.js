// const db = require("../models");
// const router = require("express").Router();


//     router.get("/api/workouts", async (req,res)=>{
//         try {
//             const findall = await db.Workout.find({});
//             res.json(findall)
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     });

//     router.post("/api/workouts",async (req,res)=>{
//         try {
//             const createone = await db.Workout.create({});
//             res.json(createone)
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     });

//     router.get("/api/workouts/range", async (req,res)=>{
//         try {
//             const range =  await db.Workout.find({});
//             res.json(range)
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     });


//     router.post("/api/workouts/range", async (req,res) => {
//         try {
//             const createrange = await db.Workout.create({});
//             res.json(createrange)
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     });

//     router.put("/api/workouts/:id", async(req,res)=>{
//         try {

//             const singleUpdate = await db.Workout.findOneAndUpdate(
//                 {
//                     _id: mongojs.ObjectID(req.params.id)
//                 },
//                 {$push:{exercises:body} }
//             );

//             res.json(singleUpdate)

//         } catch (err) {
//             res.status(500).json(err)
//         }
//     });

// module.exports = router


const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
        // console.log("ALL WORKOUTS");
        // console.log(dbWorkout);
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;

        });

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});

//create workout
router.post("/api/workouts", ({ body }, res) => {
    // console.log("WORKOUT TO BE ADDED");
    // console.log(body);

    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
        console.log("ALL WORKOUTS");
        console.log(dbWorkout);

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});


module.exports = router;
