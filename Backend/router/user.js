const express = require('express');

const router = express.Router();

const userController=require('../controller/userController');


router.post('/sign-up',userController.addUser);

router.get('/login',userController.logUser);

module.exports=router;