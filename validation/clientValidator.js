const {check} = require("express-validator")

const insertClientValidation=[
    check('client_first_name').notEmpty().withMessage("first name is required"),
    check('client_last_name').notEmpty().withMessage("Last Name is required"),
    check('client_password').isLength({min: 6}).withMessage("Your password is too short"),
    check('client_password').isStrongPassword().withMessage("Use a combination of lowercase/uppercase numbers and special characters for your pwd"),
    check('client_email').isEmail().withMessage('Invalid email format'),
    check('client_gender').notEmpty().withMessage('Gender is required'),
    check('client_dob').isISO8601().withMessage('Invalid date format, use ISO8601 format (YYYY-MM-DD)'),
    check('client_username').notEmpty().withMessage('Username is required'),
];

const authenticationValidation =[
    check('password').notEmpty().withMessage("Password cant be empty"),
    check('username').notEmpty().withMessage('Username cant be empty'),
     
];

const idValidation=[
    check('id').notEmpty().withMessage("invalid Id")
]

module.exports ={
    insertClientValidation,
    authenticationValidation,
    idValidation,
}