const express = require("express");
const { getExerciseOfWorkout, AddExerciseToWorkoutCont, checkIfExerciseAlreadyAddedCont, deleteExerciseFromWorkoutController } = require("../controllers/we");
const { idValidation } = require("../validation/exerciseValidator");
const { addExersiceToWokroutValidation } = require("../validation/workoutExercise");

const router = express.Router();

router.post('/getExercisesOfWorkout',idValidation, getExerciseOfWorkout)
router.post('/addExerciseToWorkout',addExersiceToWokroutValidation,AddExerciseToWorkoutCont)
router.post('/check', addExersiceToWokroutValidation,checkIfExerciseAlreadyAddedCont)
router.delete("/deleteExerciseFromWorkout", idValidation,deleteExerciseFromWorkoutController);

module.exports= router;