const {check} = require("express-validator")


const saveWorkoutValidation=[
    check('workoutId').notEmpty().withMessage("invalid workoutId"),
    check('clientId').notEmpty().withMessage("invalid clientId")

]

module.exports={
    saveWorkoutValidation,
}

