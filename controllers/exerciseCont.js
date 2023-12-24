
/**
 * Exercise Controllers
 *
 * This file contains controllers for handling exercise-related operations.
 * It includes functionalities such as fetching exercises by client ID,
 * inserting, updating, and deleting exercises.
 */

const {validationResult} = require("express-validator");
const { getAllExercisesByClientId, insertExercise, getExerciseById, deleteExercise, updateExercise } = require("../services/exerciseService");


/**
 * Get all exercises by client ID controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getAllExericsesBtClientIdCont= async(req,res)=>{
    try {

        // validation logic using express-validator
        const errors = validationResult(req)
      
     
         if(!errors.isEmpty())
     {
 
         return res.status(400).json({errors: errors.array()});
     }
         // Extracting data from the request body or query
     const{id}= req.query;
        const result = await getAllExercisesByClientId(id)
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log("error")
        res.status(500).json(error);
    }
}



/**
 * Delete exercise controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */

const deleteExerciseController = async (req, res) =>{
    try{
         // Extracting data from the request body or query
        const {id} = req.query;
        if(!id){
            return res.status(400).json({message: "missing id"});
        }

        const response = await deleteExercise(id);
        res.status(200).json({response});
    }catch(error){
        res.status(500).json(error);
    }
}



/**
 * Update exercise controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const updateExerciseController = async (req, res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.query)
    const {id,exerciseName,exerciseSets,exerciseReps, exerciseDesc} = req.query;
    console.log(id,exerciseName,exerciseSets,exerciseReps, exerciseDesc)
    const response = await updateExercise(id,exerciseName,exerciseSets,exerciseReps, exerciseDesc);
    
    res.status(200).json({response});
}


/**
 * Controller for inserting a new exercise
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const insertExerciseCont = async(req,res)=>{
    
    try {
        const errors = validationResult(req);
    console.log(req)

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    const{exerciseName,exerciseSets,exerciseReps, client_id,exericseDesc}=req.query;
    const response = await insertExercise(exerciseName,exerciseSets,exerciseReps, client_id,exericseDesc)
    res.status(200).json({response});


} catch(error){ 
    res.status(500).json(error)
  }
}

/**
 * Get exercise by ID controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getExerciseByIdCont = async (req,res)=>{
    try {const errors = validationResult(req);
     if(!errors.isEmpty())
     {
         return res.status(400).json({errors: errors.array()});
     }
     const {id}= req.query
     const exercise = await getExerciseById(id)
     res.status(200).json({exercise})
     return exercise;}
     catch(error){
         console.log(error)
         res.status(500).json(error)
     }
 }
 


module.exports={
    getAllExericsesBtClientIdCont,
    insertExerciseCont,
    getExerciseByIdCont,
    updateExerciseController,
    deleteExerciseController,
}