const express = require("express");
const { followClientCont, getAllFollowedCont, removeFollowCont } = require("../controllers/followCont");
const { idValidation, followClientValidation } = require("../validation/followValidator");
const router =express.Router();

router.post('/follow', followClientValidation,followClientCont)
router.post('/getAllFollowing', idValidation,getAllFollowedCont)
router.delete('/unfollow',idValidation,removeFollowCont)

module.exports= router