const Workout = require("../models")

const workoutAPI = (app) => {
    app.get("/api/workouts", async function(req,res){
        try {
            const findall = await Workout.find();
            res.json(findall)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    app.post("/api/workouts",async function (req,res){
        try {
            const createone = Workout.create({});
            res.json(createone)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    app.get("/api/workouts/range", async function(req,res){
        try {
            const range = Workout.find();
            res.json(range)
        } catch (err) {
            res.status(500).json(err)
        }
    });


    app.post("/api/workouts/range",function (req,res){
        try {
            const createrange = Workout.create({});
            res.json(createrange)
        } catch (err) {
            res.status(500).json(err)
        }
    });

    app.put("/api/workouts/:id", async (req,res)=>{
        try {

            const singleUpdate = Workout.update(
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

module.exports = workoutAPI
