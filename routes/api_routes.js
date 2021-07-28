const db = require("../models");
const router = require("express").Router();


    router.get("/api/workouts", async (req,res)=>{
        try {
            const findall = await db.Workout.find({});
            res.json(findall)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.post("/api/workouts",async (req,res)=>{
        try {
            const createone = await db.Workout.create({});
            res.json(createone)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.get("/api/workouts/range", async (req,res)=>{
        try {
            const range =  await db.Workout.find({});
            res.json(range)
        } catch (err) {
            res.status(500).json(err)
        }
    });


    router.post("/api/workouts/range", async (req,res) => {
        try {
            const createrange = await db.Workout.create({});
            res.json(createrange)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    router.put("/api/workouts/:id", async(req,res)=>{
        try {

            const singleUpdate = await db.Workout.findOneAndUpdate(
                {
                    _id: mongojs.ObjectID(req.params.id)
                },
                {$push:{exercises:req.body} }
            );

            res.json(singleUpdate)

        } catch (err) {
            res.status(500).json(err)
        }
    });

module.exports = router
