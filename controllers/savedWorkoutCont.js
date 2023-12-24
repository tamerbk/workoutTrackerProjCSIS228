/**
 * Controllers for handling saved workouts related operations.
 * @module SavedWorkoutControllers
 */

const {validationResult}= require("express");
const { getAllSavedWorkouts, saveWorkout, checkIfAlreadySaved, deleteSave } = require("../services/SavedWorkoutService");

/**
 * Retrieves all saved workouts for a specific client.
 * @param {Object} req - Express request object containing client ID
 * @param {Object} res - Express response object to send the retrieved workouts
 * @returns {void}
 */
const getAllsavedWorkoutsCont= async(req, res)=>{
    console.log("here1")
    try {

     const {clientId}= req.query;
     console.log(clientId)
     const result = await getAllSavedWorkouts(clientId)
    return  res.status(200).json({result})

        
    } catch (error) {
       return res.status(500).json({error})
    }
}

/**
 * Saves a workout for a specific client.
 * @param {Object} req - Express request object containing workout and client IDs
 * @param {Object} res - Express response object to send the result of the save operation
 * @returns {void}
 */
const saveWorkoutCont= async(req, res)=>{
    try {
        

     const {workoutId, clientId}= req.query;
     const result = await saveWorkout(workoutId, clientId)
     return res.status(200).json({result})
    } catch (error) {
        console.log("erroreree")
       return res.status(500).json({error}) 
    }
}

/**
 * Checks if a workout is already saved by a specific client.
 * @param {Object} req - Express request object containing workout and client IDs
 * @param {Object} res - Express response object to send the result of the check
 * @returns {void}
 */
const checkSavedCont = async(req,res)=>{
    try {
        console.log(req.query)
     const {workoutId,clientId}= req.query
     const result= await checkIfAlreadySaved(workoutId,clientId)
     return res.status(200).json({result})
    } catch (error) {
        console.log("errorr")
        res.status(500).json({error})
    }
}

/**
 * Deletes a saved workout for a specific client.
 * @param {Object} req - Express request object containing workout and client IDs
 * @param {Object} res - Express response object to send the result of the deletion
 * @returns {void}
 */
const deleteSaveCont =async(req,res)=>{
    try {
       

        console.log(req.query)
     const {workoutId,clientId}= req.query
     const result = await deleteSave(workoutId,clientId)
     res.status(200).json({result})
    } catch (error) {
        console.log("ereoe here ")
        res.status(500).json({error})
    }
}

module.exports={
    deleteSaveCont,
    saveWorkoutCont,
    checkSavedCont,
    getAllsavedWorkoutsCont,
}