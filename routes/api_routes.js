const db = require("../models");
const router = require("express").Router();

const workoutAPI = (app) => {
    router.get("/api/workouts", async function(req,res){
        try {
            const findall = await db.Workout.find();
            res.json(findall)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.post("/api/workouts",async function (req,res){
        try {
            const createone = db.Workout.create({});
            res.json(createone)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.get("/api/workouts/range", async function(req,res){
        try {
            const range = db.Workout.find();
            res.json(range)
        } catch (err) {
            res.status(500).json(err)
        }
    });


    router.post("/api/workouts/range",function (req,res){
        try {
            const createrange = db.Workout.create({});
            res.json(createrange)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.put("/api/workouts/:id", async (req,res)=>{
        try {

            const singleUpdate = db.Workout.findOneAndUpdate(
                {
                    _id: mongojs.ObjectID(req.params.id)
                },
                {$push:{exercises:body} }
            );

            res.json(singleUpdate)

        } catch (err) {
            res.status(500).json(err)
        }
    });
};

module.exports = router
