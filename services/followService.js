const follow = require('../model/follow')

// This module provides functions to interact with the follow model in the database.



/**
 * Follows a client by creating a follow relationship between two clients in the database.
 *
 * @async
 * @param {number} client1Id - The ID of the client following.
 * @param {number} client2Id - The ID of the client being followed.
 * @returns {Promise<Object|string>} Returns a Promise that resolves with the created follow relationship in JSON format if successful,
 *  or a string "message: already following" if the relationship already exists.
 * @throws {Error} Throws an error if there is an issue while following the client.
 */
const followClient =async(client1Id,Client2Id)=>{
    try {

        const result =await follow.findOne({where:{followed_id:Client2Id,
            follower_id:client1Id,}})
            console.log(result) 
            if(!result){
        const followClient = await follow.create({
            followed_id:Client2Id,
            follower_id:client1Id,
        })
        return followClient.toJSON();}
        else {
            return "message: already following"
        }
    } catch (error) {
      
      
        throw error;
    }
}




/**
 * Removes a follow relationship between two clients in the database.
 *
 * @async
 * @param {number} client1Id - The ID of the client following.
 * @param {number} client2Id - The ID of the client being followed.
 * @returns {Promise<Object|undefined>} Returns a Promise that resolves with the deleted follow relationship in JSON format if successful,
 *  or undefined if the relationship does not exist.
 * @throws {Error} Throws an error if there is an issue while removing the follow relationship.
 */

const removeFollow = async(client1Id, client2Id)=>{
try {
    const result = await follow.findOne({where:{followed_id:client2Id,
        follower_id:client1Id,}}) 

        if(result){
            const deletedFollow = await result.destroy();
        return deletedFollow.toJSON();
        }
} catch (error) {
    throw error;
}
}

/**
 * Retrieves all clients being followed by a specific client from the database.
 *
 * @async
 * @param {number} ClientId - The ID of the client to retrieve followed clients.
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of clients being followed by the specified client.
 * @throws {Error} Throws an error if there is an issue while retrieving followed clients.
 */
const 
getAllFollowed= async(ClientId)=>{
    try {
        const following =await follow.findAll({where:{follower_id: ClientId}})
        return following;
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports={
    getAllFollowed,
    removeFollow,
    followClient,
}