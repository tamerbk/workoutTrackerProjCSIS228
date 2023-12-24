const progress = require("../model/progess");

// This module provides functions to interact with the progress model in the database.



/**
 * Retrieves the latest progress of a specific exercise in a workout for a client from the database.
 *
 * @async
 * @param {number} workoutId - The ID of the workout.
 * @param {number} exerciseId - The ID of the exercise.
 * @param {number} clientId - The ID of the client.
 * @returns {Promise<Object|null>} Returns a Promise that resolves with the latest progress object of the specified exercise in the workout for the client if found,
 *  or null if no progress is found.
 * @throws {Error} Throws an error if there is an issue while retrieving the progress.
 */
const getProgrssOfExerciseInWorkout= async(wokroutId, exerciseId, clientId)=>{
try {
const LatestProgress = await progress.findOne({
        where:{workout_id:wokroutId,
                exercise_id:exerciseId,
                client_id: clientId,
             },
             order: [['createdAt', 'DESC']], // Order by createdAt in descending order
             limit: 1,

    })
    console.log(LatestProgress)
    
    return LatestProgress
} catch (error) {
    console.log(error)
    return error
}
}


/**
 * Inserts new progress data for an exercise in a workout for a client into the database.
 *
 * @async
 * @param {number} workoutId - The ID of the workout.
 * @param {number} exerciseId - The ID of the exercise.
 * @param {number} clientId - The ID of the client.
 * @param {number} weight - The weight of the exercise progress.
 * @param {number} sets - The sets of the exercise progress.
 * @param {number} reps - The reps of the exercise progress.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created progress object.
 * @throws {Error} Throws an error if there is an issue while inserting the progress.
 */
const insertNewProgress = async(workoutId, exerciseId, clientId,weight, sets, reps)=>{
 try {
    const newProgress = await progress.create({
        workout_id: workoutId,
        exercise_id:exerciseId,
        client_id:clientId,
        progress_weight:weight,
        progress_set: sets,
        progress_rep:reps,
    })
   console.log(newProgress)
    return newProgress;
 } catch (error) {
    console.log(error)
    throw error
 }
}

/**
 * Retrieves all progress of a specific workout for a client from the database sorted by descending date.
 *
 * @async
 * @param {number} workoutId - The ID of the workout.
 * @param {number} ClientId - The ID of the client.
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of progress objects of the specified workout for the client.
 * @throws {Error} Throws an error if there is an issue while retrieving the progress.
 */
const getProgressOfWorkoutByDescDate=async(workoutId,ClientId)=>{
    try {
        const workouts = await progress.findAll({
            where:{workout_id:workoutId,
            client_id : ClientId,},
            order: [['createdAt', 'DESC']], // Order by createdAt in descending order
           

        })

console.log(workouts)
        return workouts
    } catch (error) {
        console.log(error)
        throw error
    }
}


/**
 * Retrieves all progress of a specific client from the database sorted by descending date.
 *
 * @async
 * @param {number} clientId - The ID of the client.
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of progress objects of the specified client.
 * @throws {Error} Throws an error if there is an issue while retrieving the progress.
 */
const getClientProgressByDate= async(clientId)=>{
    try {
        const clientProgess = await progress.findAll({
            where:{client_id:clientId,},
            order: [['createdAt', 'DESC']], // Order by createdAt in descending order
          


        })

        return clientProgess;
    } catch (error) {
        console.log(error)
        throw error
    }
}



module.exports={
getProgrssOfExerciseInWorkout,
getClientProgressByDate,
getProgressOfWorkoutByDescDate,
insertNewProgress,
}

