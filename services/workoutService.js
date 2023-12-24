
const workout = require("../model/workout");

// This module provides functions to interact with the workout model in the database.


/**
 * Retrieves all workouts from the database.
 *
 * @async
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of all workout objects.
 * @throws {Error} Throws an error if there is an issue while retrieving all workouts.
 */
const getAllWorkouts=async()=>{
try{
    const Workout = await workout.findAll()
    console.log("here")
    return Workout;
}catch(e){
    console.error(e);
}
}


/**
 * Retrieves all workouts associated with a specific client from the database.
 *
 * @async
 * @param {number} ClientId - The ID of the client.
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of workout objects associated with the specified client.
 * @throws {Error} Throws an error if there is an issue while retrieving workouts for the client.
 */
const getAllWorkoutsByClientId= async(ClientId)=>{
try {
    const result= await workout.findAll({where: {client_id: ClientId}})
    if(result){
        console.log(result)
        
        return result 
    }
} catch (error) {
    throw error
}
}

/**
 * Inserts a new workout into the database.
 *
 * @async
 * @param {string} workoutName - The name of the workout.
 * @param {string} Visibilty - The visibility of the workout.
 * @param {string} imageData - The image data of the workout.
 * @param {number} client_id - The ID of the client associated with the workout.
 * @param {string} workoutDesc - The description of the workout.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created workout object in JSON format.
 * @throws {Error} Throws an error if there is an issue while inserting the workout.
 */
const insertWorkout= async(workoutName,Visibilty,imageData, client_id,workoutDesc)=>{
try {
    
    const newWorkout= await workout.create({
        workout_name:workoutName,
        workout_desc:workoutDesc,
        client_id : client_id,
        visibilty:Visibilty,
        imageData:imageData,
    })
    return newWorkout.toJSON();
} catch (error) {
        console.log('error creating the workout ', error)
        
    
}
}

/**
 * Deletes a workout from the database.
 *
 * @async
 * @param {number} id - The ID of the workout to delete.
 * @returns {Promise<Object|undefined>} Returns a Promise that resolves with the deleted workout object in JSON format if successful,
 *  or undefined if the workout is not found.
 * @throws {Error} Throws an error if there is an issue while deleting the workout.
 */
const deleteWorkout = async(id) =>{
try{
    const Workout = await workout.findByPk(id);
    if(Workout){
        const deletedWorkout = await Workout.destroy();
        return deletedWorkout.toJSON();
    }
}catch(error){
    console.error(error);
}
}

/**
 * Updates a workout in the database.
 *
 * @async
 * @param {number} id - The ID of the workout to update.
 * @param {string} workoutName - The updated name of the workout.
 * @param {string} Visibilty - The updated visibility of the workout.
 * @param {string} imageData - The updated image data of the workout.
 * @param {string} workoutDesc - The updated description of the workout.
 * @returns {Promise<Object>} Returns a Promise that resolves with the updated workout object.
 * @throws {Error} Throws an error if there is an issue while updating the workout.
 */
const updateWorkout = async (id, workoutName, Visibilty, imageData, workoutDesc) => {
try{
    const updateWorkout= await workout.update({
        workout_name:workoutName,
        workout_desc : workoutDesc,
        visibilty : Visibilty,
        imageDate:imageData,

}, {where: {workout_id: id}});

    return updateWorkout;
}catch(error){
    console.error(error);
}
}

/**
 * Retrieves a workout by ID from the database.
 *
 * @async
 * @param {number} id - The ID of the workout to retrieve.
 * @returns {Promise<Object|string>} Returns a Promise that resolves with the workout object if found,
 *  or a string "workout not found" if the workout is not found.
 * @throws {Error} Throws an error if there is an issue while retrieving the workout.
 */
const getWorkoutById = async(id)=>{
console.log(id)
try{ const Workout=await workout.findByPk(id)
if(Workout)
    return Workout;
return "workout not found";} 
catch(error){
    throw error;
}
}


module.exports =
{
getAllWorkouts,
getAllWorkoutsByClientId,
insertWorkout,
deleteWorkout,
updateWorkout,
getWorkoutById,

}