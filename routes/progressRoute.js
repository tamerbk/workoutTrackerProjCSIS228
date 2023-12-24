const express = require("express");
const { getProgrssOfExerciseInWorkoutCont, getProgressOfWorkoutByDescDateCont, getClientProgressByDateCont, insertNewProgressCont } = require("../controllers/progressCont");
const { checkCWEIdValidation, checkCWValidation, insertProgressValidation } = require("../validation/progressValidation");
const { idValidation } = require("../validation/exerciseValidator");
const router = express.Router();


router.post('/getProgrssOfExerciseInWorkout',checkCWEIdValidation, getProgrssOfExerciseInWorkoutCont)
router.post('/getProgressOfWorkoutByDescDate', checkCWValidation,getProgressOfWorkoutByDescDateCont)
router.post('/getClientProgressByDate', idValidation, getClientProgressByDateCont)
router.post('/insertNewProgress',insertProgressValidation,insertNewProgressCont)

module.exports= router
