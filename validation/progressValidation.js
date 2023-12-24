const {check} = require("express-validator")

const checkCWEIdValidation=[
    check('workoutId').notEmpty().withMessage("workoutId name cant be empty"),
    check('exerciseId').notEmpty().withMessage("exerciseId name cant be empty"),
    check('clientId').notEmpty().withMessage("clientId name cant be empty"),
    
]

const checkCWValidation =[
    check('workoutId').notEmpty().withMessage("workoutId name cant be empty"),
    check('clientId').notEmpty().withMessage("clientId name cant be empty"),
    
]


const idValidation=[
    check('id').notEmpty().withMessage("invalid Id")
]

const insertProgressValidation=[
    check('workoutId').notEmpty().withMessage("workoutId name cant be empty"),
    check('exerciseId').notEmpty().withMessage("exerciseId name cant be empty"),
    check('clientId').notEmpty().withMessage("clientId name cant be empty"),
    check('weight').notEmpty().withMessage("weight name cant be empty"),
    check('sets').notEmpty().withMessage("sets name cant be empty"),
    check('reps').notEmpty().withMessage("reps name cant be empty"),
    
]


module.exports={
    idValidation,
    insertProgressValidation,
    checkCWEIdValidation,
    checkCWValidation,
}




