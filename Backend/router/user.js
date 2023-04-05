const express = require('express');

const router = express.Router();

const userController=require('../controller/userController');


router.post('/signup',userController.addUser);

router.get('/login',userController.logUser);

module.exports=router;