

const savedWokrout = require("../model/saved_wokrout");

// This module provides functions to interact with the saved_workout model in the database.


/**
 * Saves a workout for a specific client in the database.
 *
 * @async
 * @param {number} workoutId - The ID of the workout to save.
 * @param {number} clientId - The ID of the client saving the workout.
 * @returns {Promise<Object>} Returns a Promise that resolves with the saved workout object in JSON format.
 * @throws {Error} Throws an error if there is an issue while saving the workout.
 */
const saveWorkout = async(workoutId, clientId)=>{
    try {
        const save = await savedWokrout.create({
            client_id:clientId,
            workout_id:workoutId,
        })
        return save.toJSON();
    } catch (error) {
        console.log("errorrerere222")
        throw error;
    }
}


/**
 * Checks if a specific workout is already saved by a client in the database.
 *
 * @async
 * @param {number} workoutId - The ID of the workout to check if it's saved.
 * @param {number} clientId - The ID of the client.
 * @returns {Promise<number>} Returns a Promise that resolves with the count of occurrences where the specified workout is saved by the client.
 * @throws {Error} Throws an error if there is an issue while checking if the workout is already saved.
 */
const checkIfAlreadySaved= async(workoutId, clientId)=>{
    try {
        const count= await  savedWokrout.count({
            where:{client_id : clientId,
            workout_id : workoutId}
        })

        return count;
    } catch (error) {
        console.log("eorerere 123")
        throw error
    }
}


/**
 * Retrieves all saved workouts for a specific client from the database.
 *
 * @async
 * @param {number} clientId - The ID of the client.
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of saved workouts for the client.
 * @throws {Error} Throws an error if there is an issue while retrieving saved workouts.
 */
 const getAllSavedWorkouts = async(clientId)=>{
    try {
        const workouts= await savedWokrout.findAll({
            where:{client_id : clientId}
        })
        if(workouts)
        return workouts
    } catch (error) {
        console.log("erorere")
        throw error
    }
 }

 /**
 * Deletes a saved workout for a specific client from the database.
 *
 * @async
 * @param {number} workoutId - The ID of the workout to delete from saved workouts.
 * @param {number} clientId - The ID of the client.
 * @returns {Promise<Object|undefined>} Returns a Promise that resolves with the deleted saved workout object in JSON format if successful,
 *  or undefined if the workout is not found in saved workouts.
 * @throws {Error} Throws an error if there is an issue while deleting the saved workout.
 */
 const deleteSave = async(workoutId, clientId)=>{
    try{
        const Workout = await savedWokrout.findOne({where: {workout_id : workoutId,client_id:clientId}});
        console.log(Workout)
        if(Workout){
            const deletedWorkout = await Workout.destroy();
            return deletedWorkout.toJSON();
        }
    }catch(error){
        console.error(error);
    }
 }

module.exports = {
    deleteSave,
    saveWorkout,
    checkIfAlreadySaved,
    getAllSavedWorkouts,

}