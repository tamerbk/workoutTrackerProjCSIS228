const {validationResult} = require("express-validator");
const { getAllWorkouts, getAllWorkoutsByClientId, insertWorkout, deleteWorkout, updateWorkout, getWorkoutById } = require("../services/workoutService");
const { getAllExercises } = require("../services/exerciseService");


/**
 * Retrieves all workouts.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object to send the retrieved workouts
 * @returns {void}
 */
const getAllWorkoutsCont= async(req,res)=>{
    try{const wokrout = await getAllWorkouts();
    res.status(200).json({wokrout});}
    catch(error){
        res.status(500).json({message:"internal error! "})
    }
}

/**
 * Retrieves all workouts associated with a specific client ID.
 * @param {Object} req - Express request object containing client ID
 * @param {Object} res - Express response object to send the retrieved workouts
 * @returns {void}
 */
const getAllWorkoutsBtClientIdCont= async(req,res)=>{
    try {
        const errors = validationResult(req)
        //console.log(req)
     
         if(!errors.isEmpty())
     {
 
         return res.status(400).json({errors: errors.array()});
     }
     const {userId} = req.query;
        const result = await getAllWorkoutsByClientId(userId);
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log("error")
        res.status(500).json(error);
    }
}

/**
 * Inserts a new workout.
 * @param {Object} req - Express request object containing details of the new workout
 * @param {Object} res - Express response object to send the result of the insertion
 * @returns {void}
 */
const insertWorkoutCont = async(req,res)=>{
    
    try {
        const errors = validationResult(req);
    console.log(req)

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    const visibility = req.body.Visibility === 'true';
    const{workoutName,imageData, client_id,workoutDesc}=req.body;
    console.log(req.query)
    const response = await insertWorkout(workoutName,visibility,imageData, client_id,workoutDesc)
    const exercises=await getAllExercises();
    const id = response.workout_id;
    res.render("selectExercises", {id,exercises})


} catch(error){ 
    res.status(500).json(error)
  }
}

/**
 * Updates an existing workout.
 * @param {Object} req - Express request object containing updated workout details
 * @param {Object} res - Express response object to send the result of the update operation
 * @returns {void}
 */
const updateWorkoutController = async (req, res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.query)
    const {id,  workoutName, Visibilty, imageData, workoutDesc} = req.query;
    console.log(id, workoutName, Visibilty, imageData, workoutDesc)
    const response = await updateWorkout(id, workoutName, Visibilty, imageData, workoutDesc);
    
    res.status(200).json({response});
}

/**
 * Deletes a workout by its ID.
 * @param {Object} req - Express request object containing workout ID
 * @param {Object} res - Express response object to send the result of the deletion
 * @returns {void}
 */
const deleteWorkoutController = async (req, res) =>{
    try{
        const {id} = req.query;
        if(!id){
            return res.status(400).json({message: "missing id"});
        }

        const response = await deleteWorkout(id);
        res.status(200).json({response});
    }catch(error){
        res.status(500).json(error);
    }
}

/**
 * Retrieves a workout by its ID.
 * @param {Object} req - Express request object containing workout ID
 * @param {Object} res - Express response object to send the retrieved workout
 * @returns {void}
 */
const getWorkoutByIdCont = async (req,res)=>{
   try {const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    const {id}= req.query
    const workout = await getWorkoutById(id)
    res.status(200).json({workout})
    return workout;}
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports=
{
    getAllWorkoutsCont,
    getAllWorkoutsBtClientIdCont,
    insertWorkoutCont,
deleteWorkoutController,
updateWorkoutController,
getWorkoutByIdCont,

}