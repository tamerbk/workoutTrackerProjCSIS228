const Client = require("../model/client")

// This module provides functions to interact with the Client model in the database.


/**
 * Retrieves all clients from the database.
 *
 * @async
 * @returns {Promise<Array<Object>>} Returns a Promise that resolves with an array of all client objects.
 * @throws {Error} Throws an error if there is an issue while retrieving all clients.
 */

const getAllClients =async()=>{
    try{
        const client = await Client.findAll()
        return client;
    }catch(e){
        console.error(e);
    }
}


/**
 * Authenticates a client using the provided username and password.
 *
 * @async
 * @param {string} username - The username of the client.
 * @param {string} password - The password of the client.
 * @returns {Promise<{ message: string, client: Object|null }>} 
 * Returns a Promise that resolves with an authentication response containing a message and
 *  the authenticated client object if found, otherwise null.
 * @throws {Error} Throws an error if there is an issue during authentication.
 */

const authenticateClient = async (username, password) => {
  // default response message 
    let response = {
        message: "not authenticated",
        client: null,
    }
    try{
        // find if the username and password provided exists 
        const result = await Client.findOne({where: {client_username: username}});
        if(result){
            
           // change the response message if client found
            if(result.client_password == password){
                response.message = "authenticated";
                response.client = result;
            }
        }

    }catch(error){
        //catch error 
        console.error(error);
    }

    // return response 
    return response;
}


/**
 * Inserts a new client into the database.
 *
 * @async
 * @param {string} firstName - The first name of the client.
 * @param {string} lastName - The last name of the client.
 * @param {string} username - The username of the client.
 * @param {string} email - The email address of the client.
 * @param {string} password - The password of the client.
 * @param {string} gender - The gender of the client.
 * @param {Date} dob - The date of birth of the client.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created client object in JSON format.
 * @throws {Error} Throws an error if there is an issue while inserting the client.
 */

const insertClient = async(firstName,lastName, username,email,password,gender,dob)=>{

    try {
        // insert a client to database 
        // passing the necessary parameters
        const newClient= await  Client.create({
            client_first_name:firstName,
            client_last_name:lastName,
            client_username:username,
            client_password:password,
            client_email:email,
            client_dob:dob,
            client_gender:gender
        })
        // return new Client in json form 
        return newClient.toJSON();
    } catch (error) {
        // catch error
        console.error('error creating the client ',error);
        
    }
}

/**
 * 
 * @param {string} email 
 * this service method checks if the client is already existing by searching
 * the existance of email
 * @returns count of email existance 
 */
const checkAlreadyRegister = async(email)=>{
    try {
        // get the count of email existance 
        const count  = await Client.count({
            where:{client_email:email}
        })
        if (count)
        console.log(count)
    return count
        
    } catch (error) {
        throw error
    }
}

/**
 * Checks if a username is already used by a client in the database.
 * 
 * @async
 * @param {string} username - The username to check.
 * @returns {Promise<number>} Returns a Promise that resolves with the count of clients having the specified username.
 * @throws {Error} Throws an error if there is an issue while checking the username.
 */
const checkUsedUsername = async(username)=>{
    try {
        const count  = await Client.count({
            where:{client_username:username}
        })
        if (count)
        console.log(count)
    return count
        
    } catch (error) {
        throw error
    }
}


/**
 * Retrieves a client by ID from the database.
 * 
 * @async
 * @param {number} id - The ID of the client to retrieve.
 * @returns {Promise<Object|number>} Returns a Promise that resolves with the client object if found,
 *  or -1 if the client is not found.
 * @throws {Error} Throws an error if there is an issue while retrieving the client.
 */

const getClientById = async (id) =>{
    console.log("here")
    try{
        const client = await Client.findByPk(id);
        if(client){
            return client;
        }
        return -1;
    }catch(error){
        console.error(error);
    }
}






module.exports={

    getAllClients,
    authenticateClient,
    insertClient,
    getClientById,
    checkAlreadyRegister,
    checkUsedUsername,
}
