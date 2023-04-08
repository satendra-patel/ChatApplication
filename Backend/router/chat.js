const express = require('express');
const router = express.Router();

// const userController = require('../controllers/user');
const chatController = require('../controller/chatController');
const authenticator = require('../middleware/auth');

router.post('/addParticipant', authenticator.authenticate, chatController.addParticipant);
router.post('/nameTheGroup', authenticator.authenticate, chatController.setGroupName);
router.get('/getGroups', authenticator.authenticate, chatController.getGroups);

module.exports = router;