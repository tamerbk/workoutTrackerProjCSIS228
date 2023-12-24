const express = require("express");
const { getAllWorkoutsCont, getAllWorkoutsBtClientIdCont, insertWorkoutCont, deleteWorkoutController, updateWorkoutController, getWorkoutByIdCont } = require("../controllers/workoutCont");
const { idValidation } = require("../validation/exerciseValidator");
const { insertWorkoutValidation, updateWorkoutValidation } = require("../validation/workoutValidator");
const router = express.Router();


router.get('/getAllWorkouts',getAllWorkoutsCont)
router.post('/getAllWorkoutsByCId',idValidation,getAllWorkoutsBtClientIdCont)
router.post('/insertWorkout',insertWorkoutValidation,insertWorkoutCont)
router.delete("/deleteWorkout",idValidation, deleteWorkoutController);
router.put('/updateWorkout',updateWorkoutValidation,updateWorkoutController)
router.post('/findWorkoutById',idValidation,getWorkoutByIdCont)
module.exports= router