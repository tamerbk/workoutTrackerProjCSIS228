const {check} = require("express-validator")

const idValidation=[
    check('id').notEmpty().withMessage("invalid Id")
]

const insertExerciseValidation=[
    check('exerciseName').notEmpty().withMessage("exercise name cant be empty"),
    check('exerciseSets').notEmpty().withMessage("exerciseSets name cant be empty"),
    check('exerciseReps').notEmpty().withMessage("exerciseReps name cant be empty"),
    check('client_id').notEmpty().withMessage("client_id name cant be empty"),
    
]
const updateExerciseValidation=[
    check('exerciseName').notEmpty().withMessage("exercise name cant be empty"),
    check('exerciseSets').notEmpty().withMessage("exerciseSets name cant be empty"),
    check('exerciseReps').notEmpty().withMessage("exerciseReps name cant be empty"),
    check('id').notEmpty().withMessage("id  cant be empty"),
    
]

module.exports={
    idValidation,
    insertExerciseValidation,
    updateExerciseValidation,
}

