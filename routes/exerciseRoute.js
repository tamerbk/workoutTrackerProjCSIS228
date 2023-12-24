
const express = require("express");
const { deleteExerciseController,getAllExericsesBtClientIdCont, insertExerciseCont, updateExerciseController, getExerciseByIdCont, } = require("../controllers/exerciseCont");
const { insertExerciseValidation, idValidation, updateExerciseValidation } = require("../validation/exerciseValidator");
const router = express.Router();



router.post('/getAllExericsesById',idValidation,getAllExericsesBtClientIdCont)
router.post('/insertExercise',insertExerciseValidation,insertExerciseCont)
router.delete("/deleteExercise",idValidation, deleteExerciseController);
router.put('/updateExercise',updateExerciseValidation,updateExerciseController)
router.post('/findWorkoutById',idValidation,getExerciseByIdCont)
module.exports= router


