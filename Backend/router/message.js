const express = require('express');
const router = express.Router();

const messageController = require('../controller/messageController');
const authenticator = require('../middleware/auth');

router.post('/send', authenticator.authenticate, messageController.saveMessage);
router.get('/fetch', authenticator.authenticate,messageController.fetchMessage);

module.exports = router;