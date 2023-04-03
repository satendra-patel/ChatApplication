const express = require('express');

const router = express.Router();

const userController=require('../controller/userController');


router.post('/sign-up',userController.addUser);

module.exports=router;