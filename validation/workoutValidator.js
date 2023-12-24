const {check} = require("express-validator")

const insertWorkoutValidation=[
    check('workoutName').notEmpty().withMessage("workoutName name cant be empty"),
   
    check('client_id').notEmpty().withMessage("client_id name cant be empty"),
    
]

const updateWorkoutValidation=[
    check('workoutName').notEmpty().withMessage("workoutName name cant be empty"),
    check('Visibilty').notEmpty().withMessage("Visibilty name cant be empty").isBoolean().withMessage('Visibility must be a boolean value'),
    check('id').notEmpty().withMessage("id name cant be empty"),
    
]

module.exports={
    updateWorkoutValidation,
    insertWorkoutValidation,
}