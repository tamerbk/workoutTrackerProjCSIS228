const express = require('express');
const { getAllClientsController, authenticateClientControll, insertCLientControl, findClient, checkRegister, checkUsername } = require('../controllers/clientCont');
const { insertClientValidation, authenticationValidation, idValidation } = require('../validation/clientValidator');
const router = express.Router();

router.get('/getAllClients',getAllClientsController)
router.get('/authenticate',authenticationValidation, authenticateClientControll)
router.post('/createClient', insertCLientControl)
router.post('/getClient',idValidation ,findClient)
module.exports = router;