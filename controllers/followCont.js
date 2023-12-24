

/**
 * Follow Controllers
 *
 * These controllers handle client following and unfollowing functionalities.
 * They interact with the follow service methods for managing client relationships.
 */

const { followClient, removeFollow, getAllFollowed } = require("../services/followService");

/**
 * Controller for following a client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const followClientCont = async(req, res)=>{
    try {
        const {client1Id, client2Id} = req.query;
        const result = await followClient(client1Id,client2Id)
        return res.status(200).json({result})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

/**
 * Controller for unfollowing a client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const removeFollowCont =async(req,res)=>{
    try {
        const {client1Id, client2Id} = req.query;
        const result = await removeFollow(client1Id,client2Id);
        return res.status(200).json({result}); 
    } catch (error) {
        return res.status(500).json({error});
    }
}

/**
 * Controller to get all followed clients by a particular client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getAllFollowedCont= async (req,res)=>
{
    try {

        const {client1Id}= req.query;
        const result = await getAllFollowed(client1Id);
        return res.status(200).json({result}); 
        
    } catch (error) {
        return res.status(500).json({error});
    }
}

module.exports={
    getAllFollowedCont,
    followClientCont,
    removeFollowCont,
}