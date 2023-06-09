const express = require('express');
const router = express.Router();


const chatController = require('../controller/chatController');
const authenticator = require('../middleware/auth');

router.post('/addParticipant', authenticator.authenticate, chatController.addParticipant);
router.post('/nameTheGroup', authenticator.authenticate, chatController.setGroupName);
router.get('/getGroups', authenticator.authenticate, chatController.getGroups);
router.get('/getMembers', authenticator.authenticate, chatController.getMembers);
router.post('/upload', chatController.uploadFile);

module.exports = router;