const {check} = require("express-validator")


const addExersiceToWokroutValidation=[
    check('workoutId').notEmpty().withMessage("workoutId name cant be empty"),
    check('exerciseId').notEmpty().withMessage("exerciseId name cant be empty"),

]


module.exports={
    addExersiceToWokroutValidation,
    
}