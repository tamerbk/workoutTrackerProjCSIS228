
const WorkoutExercise = require("../model/WorkoutExercise")
const workout = require("../model/workout")
const sequelize = require("sequelize")
// This module provides functions to interact with the WorkoutExercise model in the database.


/**
 * Retrieves all exercises associated with a specific workout from the database.
 *
 * @async
 * @param {number} id - The ID of the workout.
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of exercise IDs associated with the specified workout.
 * @throws {Error} Throws an error if there is an issue while retrieving exercises for the workout.
 */
const getAllExercisesByWorkoutId= async(id)=>{
    try {
        const result= await WorkoutExercise.findAll({
            attributes: [ 'Exercise_id'],
            where: { workout_id:id }})
        if(result){
           console.log(result)
           
           return result 
        }
    } catch (error) {
        throw error
        
    }
}



/**
 * Checks if a specific exercise is already added to a workout.
 *
 * @async
 * @param {number} workoutId - The ID of the workout.
 * @param {number} exerciseId - The ID of the exercise.
 * @returns {Promise<number>} Returns a Promise that resolves with the count of occurrences where the specified exercise is added to the workout.
 * @throws {Error} Throws an error if there is an issue while checking if the exercise is already added to the workout.
 */
const checkIfExerciseAlreadyAdded= async(workoutId,exerciseId)=>{
    try {
        const result= await WorkoutExercise.count({
            
            where: { workout_id:workoutId ,
                     exercise_id:exerciseId,}})
        if(result){
           console.log(result)
           
           return result 
        }
    } catch (error) {
        throw error
        
    }
}

/**
 * Deletes an exercise from a workout in the database.
 *
 * @async
 * @param {number} id - The ID of the WorkoutExercise entry to delete.
 * @returns {Promise<Object|undefined>} Returns a Promise that resolves with the deleted WorkoutExercise object in JSON format if successful,
 *  or undefined if the entry is not found.
 * @throws {Error} Throws an error if there is an issue while deleting the WorkoutExercise entry.
 */
const deleteExerciseFromWorkout = async(id) =>{
    try{
        const Workout = await WorkoutExercise.findByPk(id);
        if(Workout){
            const deletedWorkout = await Workout.destroy();
            return deletedWorkout.toJSON();
        }
    }catch(error){
        console.error(error);
    }
}


/**
 * Adds an exercise to a workout in the database.
 *
 * @async
 * @param {number} workoutId - The ID of the workout.
 * @param {number} exerciseId - The ID of the exercise.
 * @returns {Promise<Object>} Returns a Promise that resolves with the created WorkoutExercise object in JSON format.
 * @throws {Error} Throws an error if there is an issue while adding the exercise to the workout.
 */
const AddExerciseToWorkout= async(workoutId, exerciseId)=>{
    try {
        const result = await WorkoutExercise.create({
             workout_id:workoutId,
             exercise_id:exerciseId,
        })
        return result.toJSON();
    } catch (error) {
        console.log('error adding exercise')
        throw error    
    }
}


module.exports={
    getAllExercisesByWorkoutId,
    AddExerciseToWorkout,
    checkIfExerciseAlreadyAdded,
    deleteExerciseFromWorkout,

}
