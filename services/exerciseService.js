const exercise = require("../model/exercise")

// This module provides functions to interact with the exercise model in the database.

const getAllExercises=async()=>{
    try {
        const response=await exercise.findAll();
        return response;
    } catch (error) {
        
    }
}

/**
 * Retrieves all exercises for a specific client from the database.
 *
 * @async
 * @param {number} ClientId - The ID of the client whose exercises are to be retrieved.
 * @returns {Promise<Array<Object>>|undefined} Returns a Promise that resolves with an array of exercises belonging to the specified client, or undefined if no exercises are found.
 * @throws {Error} Throws an error if there is an issue while retrieving exercises.
 */
const getAllExercisesByClientId= async(ClientId)=>{
    try {
        const result= await exercise.findAll({where: {client_id: ClientId}})
        if(result){
           console.log(result)
           
           return result 
        }
    } catch (error) {
        
    }
}

/**
 * Inserts a new exercise into the database for a specific client.
 *
 * @async
 * @param {string} exerciseName - The name of the exercise.
 * @param {number} exerciseSets - The number of sets for the exercise.
 * @param {number} exerciseReps - The number of reps for the exercise.
 * @param {number} client_id - The ID of the client associated with the exercise.
 * @param {string} exerciseDesc - The description of the exercise.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created exercise object in JSON format.
 * @throws {Error} Throws an error if there is an issue while inserting the exercise.
 */

const insertExercise= async(exerciseName,exerciseSets,exerciseReps, client_id,exericseDesc)=>{
    try {
        
        const newExercise= await exercise.create({
            exercise_name:exerciseName,
            exercise_desc:exericseDesc,
            client_id : client_id,
            exercise_sets:exerciseSets,
            exercise_reps:exerciseReps,
        })
        return newExercise.toJSON();
    } catch (error) {
            console.log('error creating the exercise ', error)
        
    }
}


/**
 * Updates an existing exercise in the database.
 *
 * @async
 * @param {number} id - The ID of the exercise to update.
 * @param {string} exerciseName - The updated name of the exercise.
 * @param {number} exerciseSets - The updated number of sets for the exercise.
 * @param {number} exerciseReps - The updated number of reps for the exercise.
 * @param {string} exerciseDesc - The updated description of the exercise.
 * @returns {Promise<[number, Array<Object>]>} Returns a Promise that resolves with an array containing the number of affected rows and the updated exercise object.
 * @throws {Error} Throws an error if there is an issue while updating the exercise.
 */

const updateExercise = async (id,exerciseName,exerciseSets,exerciseReps, exerciseDesc) => {
    try{
        const updateExercise= await exercise.update({
            exercise_name:exerciseName,
            exercise_reps: exerciseReps,
            exercise_sets : exerciseSets,
            exericse_desc:exerciseDesc,

    }, {where: {exercise_id: id}});

        return updateExercise;
    }catch(error){
        console.error(error);
    }
}


/**
 * Retrieves an exercise by its ID from the database.
 *
 * @async
 * @param {number} id - The ID of the exercise to retrieve.
 * @returns {Promise<Object|string>} Returns a Promise that resolves with the exercise object if found,
 *  or a string "Exercise not found" if the exercise is not found.
 * @throws {Error} Throws an error if there is an issue while retrieving the exercise.
 */

const getExerciseById = async(id)=>{
    console.log(id)
   try{ const Exericse=await exercise.findByPk(id)
    if(Exericse)
        return Exericse;
    return "Exercise not found";} 
    catch(error){
        throw error;
    }
}


/**
 * Deletes an exercise by its ID from the database.
 *
 * @async
 * @param {number} id - The ID of the exercise to delete.
 * @returns {Promise<Object|number>} Returns a Promise that resolves with the deleted exercise object in JSON format if found and deleted,
 *  or -1 if the exercise is not found.
 * @throws {Error} Throws an error if there is an issue while deleting the exercise.
 */
const deleteExercise= async(id) =>{
    try{
        const Exercise = await exercise.findByPk(id);
        if(Exercise){
            const deletedExercise = await Exercise.destroy();
            return deletedExercise.toJSON();
        }
            return -1
    }catch(error){
        console.error(error);
    }
}







module.exports={
    getAllExercisesByClientId,
    insertExercise,
    updateExercise,
    getExerciseById,
    deleteExercise,
    getAllExercises,
}

