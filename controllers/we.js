
const {validationResult} = require("express-validator");
const { getAllExercisesByWorkoutId, AddExerciseToWorkout, checkIfExerciseAlreadyAdded, deleteExerciseFromWorkout, getWorkoutsMoreFive } = require("../services/workoutExercise");


/**
 * Retrieves all exercises associated with a specific workout.
 * @param {Object} req - Express request object containing workout ID
 * @param {Object} res - Express response object to send the retrieved exercises
 * @returns {void}
 */
const getExerciseOfWorkout= async(req,res)=>{
    try {
        const errors = validationResult(req)
        console.log(req)
     
         if(!errors.isEmpty())
     {
 
         return res.status(400).json({errors: errors.array()});
     }
     const{id}= req.query;
     console.log(id)
        const result = await getAllExercisesByWorkoutId(id)
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log("error1")
        res.status(500).json(error);
    }
}

const getworkoutMoreThanfive= async(req,res)=>{
    try {
        
        const response = await getWorkoutsMoreFive();
        
        res.status(200).json({response})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

/**
 * Adds an exercise to a specific workout.
 * @param {Object} req - Express request object containing workout ID and exercise ID
 * @param {Object} res - Express response object to send the result of adding the exercise
 * @returns {void}
 */
const AddExerciseToWorkoutCont = async(req,res)=>{
    
    try {
        const errors = validationResult(req);
    console.log(req)

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    const{workoutId,exerciseId}=req.query;
    const response = await AddExerciseToWorkout(workoutId,exerciseId)
    res.status(200).json({response});


} catch(error){ 
    res.status(500).json(error)
  }
}

/**
 * Checks if an exercise is already added to a specific workout.
 * @param {Object} req - Express request object containing workout ID and exercise ID
 * @param {Object} res - Express response object to send the result of the check
 * @returns {void}
 */
const checkIfExerciseAlreadyAddedCont= async (req,res)=>
{
    try {
        const errors = validationResult(req);
    console.log(req)

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    const {workoutId, exerciseId} = req.query;
    const response = await checkIfExerciseAlreadyAdded(workoutId,exerciseId)
    res.status(200).json({response})

    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * Deletes an exercise from a workout by its ID.
 * @param {Object} req - Express request object containing exercise ID
 * @param {Object} res - Express response object to send the result of the deletion
 * @returns {void}
 */
const deleteExerciseFromWorkoutController = async (req, res) =>{
    try{
        const {id} = req.query;
        if(!id){
            return res.status(400).json({message: "missing id"});
        }

        const response = await deleteExerciseFromWorkout(id);
        res.status(200).json({response});
    }catch(error){
        res.status(500).json(error);
    }
}

module.exports={
    getExerciseOfWorkout,
    AddExerciseToWorkoutCont,
    checkIfExerciseAlreadyAddedCont,
    deleteExerciseFromWorkoutController,
    getworkoutMoreThanfive,

}