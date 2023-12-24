const {validationResult} = require("express-validator");
const { getAllClients, authenticateClient, insertClient, getClientById, checkAlreadyRegister, checkUsedUsername } = require("../services/clientService");
const { ValidationError } = require("sequelize");


/**
 * Retrieves all clients and sends a response with the retrieved clients.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllClientsController= async(req,res)=>{
    try{const clients = await getAllClients();
    res.status(200).json({clients});}
    catch(error){
        res.status(500).json({message:"internal error! "})
    }
}

/**
 * Authenticates a client using the provided username and password.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const authenticateClientControll = async(req, res)=>{
    try {

        // validation logic using express-validator
      
        const errors = validationResult(req)
       if(!errors.isEmpty())
    {

        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.query)
    // Extracting data from the request body or query
    const {username, password} = req.query;
    if (!username) {
        return res.status(400).json({ errors: [{ type: 'field', msg: 'Username cant be empty', path: 'username', location: 'query' }] });
    }

    if (!password) {
        return res.status(400).json({ errors: [{ type: 'field', msg: 'Password cant be empty', path: 'password', location: 'query' }] });
    }


    const response = await authenticateClient(username,password)
       console.log("hererer1 ")
    if (response.client != null) {
        let userId = response.client.client_id;
        console.log(userId)
      
        console.log("herehre2");
       


        // Redirect to another page on successful authentication
        res.render('success-page',{userId}); // Replace with your desired URL
    } else {
        res.render('index', { errorMessage: 'Authentication failed. Please check your credentials.' });
    }
    }
    

    catch (error) {
        console.log(error)
        res.status(500).json(error);
        
    }
}

/**
 * Checks if a client is already registered based on the provided email.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const checkRegister = async(req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    // Extracting data from the request body or query
    const {email} = req.query;
    const response = await checkAlreadyRegister(email);
  return   res.status(200).json({response})
    } catch (error) {
        return res.status(500).json({error})
        
    }
}

/**
 * Checks if a username is already used by a client.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const checkUsername = async(req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    // Extracting data from the request body or query
    const {username} = req.query;
    const response = await checkUsedUsername(username);
    return res.status(200).json({response})
    } catch (error) {
        return res.status(500).json({error})
        
    }
}

/**
 * Inserts a new client into the database after checking the uniqueness of the username and email.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const insertCLientControl= async(req,res)=>{
   
    try {
        const errors = validationResult(req);
    console.log(req)

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    // Extracting data from the request body or query
    const {client_first_name, client_last_name, client_username, client_password, client_email,  client_gender, client_dob} = req.body;
  
    // Checking if username and email are unique
    const checkUsername = await checkUsedUsername(client_username);
    const checkRegister = await checkAlreadyRegister(client_email);
    console.log(checkUsername , " ", checkRegister)
    
    // Handling different scenarios based on username and email uniqueness
    if(checkUsername == 0 && checkRegister == 0){
        const response = await insertClient(client_first_name, client_last_name, client_username, client_password, client_email,  client_gender, client_dob);
       res.render('index',{ errorMessage: null })}
    else if (checkRegister!=0)
        
            res.status(200).json({})
            else
        return  res.status(200).json({message: "already used username"}) 

        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
    
}

/**
 * Retrieves a client by ID from the database.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const findClient= async(req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
         // Extracting data from the request body or query
        const {id} = req.query;
        const response = await getClientById(id)
        res.status(200).json({response})
        
    } catch (error) {
        return res.status(500).json({messsage: "internal error"})
        
    }
}





module.exports={
    getAllClientsController,
    authenticateClientControll,
    insertCLientControl,
    findClient,
    checkRegister,
    checkUsername,

}