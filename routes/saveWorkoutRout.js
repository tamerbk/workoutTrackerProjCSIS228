

const express = require("express");
const { getAllsavedWorkoutsCont, saveWorkoutCont, deleteSaveCont, checkSavedCont } = require("../controllers/savedWorkoutCont");
const { idValidation } = require("../validation/exerciseValidator");
const {saveWorkoutValidation} =require("../validation/saveValidation")
const router = express.Router();

router.post('/getAllSavedWorkouts',idValidation,getAllsavedWorkoutsCont)
router.post('/saveWorkout',saveWorkoutValidation,saveWorkoutCont)
router.delete('/unsaveWorkout',saveWorkoutValidation,deleteSaveCont)
router.post('/check',saveWorkoutValidation,checkSavedCont)

module.exports= router