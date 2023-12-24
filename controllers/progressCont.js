/**
 * Progress Controllers
 *
 * These controllers manage progress tracking functionalities and interact with progress service methods.
 */
const { getProgrssOfExerciseInWorkout, getProgressOfWorkoutByDescDate, getClientProgressByDate, insertNewProgress } = require("../services/progressService");


/**
 * Controller to get progress of a specific exercise in a workout for a client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getProgrssOfExerciseInWorkoutCont = async(req,res)=>{
    try {
        const{workoutId,exerciseId,clientId} = req.query;
        const result = await getProgrssOfExerciseInWorkout(workoutId,exerciseId,clientId);
        res.status(200).json({result})
    } catch (error) {
        res.status(500).json({error})
    }
}

/**
 * Controller to get progress of a workout by description and date for a client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getProgressOfWorkoutByDescDateCont = async(req,res)=>{
    try {
        const{workoutId,clientId}= req.query;
        const result = await getProgressOfWorkoutByDescDate(workoutId,clientId);
        return res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error})
    }

}


/**
 * Controller to get client's progress by date
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getClientProgressByDateCont= async(req,res)=>
{
    try {
        const {clientId}= req.query
        const result = await getClientProgressByDate(clientId)
       return  res.status(200).json({result});
        
        
    } catch (error) {
        res.status(500).json({error})
    }
}

/**
 * Controller to insert new progress for a workout's exercise by a client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const insertNewProgressCont = async(req,res)=>
{
    try {
        const {workoutId, exerciseId, clientId,weight, sets, reps} = req.query;
        const result = await insertNewProgress(workoutId, exerciseId, clientId,weight, sets, reps);
        return res.status(200).json({result});
        
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    insertNewProgressCont,
    getClientProgressByDateCont,
    getProgressOfWorkoutByDescDateCont,
    getProgrssOfExerciseInWorkoutCont,
}