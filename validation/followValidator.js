const {check} = require("express-validator")

const followClientValidation= [
    check('client1Id').notEmpty().withMessage("client1Id name cant be empty"),
    check('client2Id').notEmpty().withMessage("client2Id name cant be empty"),
    
]

const idValidation=[
    check('id').notEmpty().withMessage("invalid Id")
]


module.exports={
    followClientValidation,
    idValidation,
}
