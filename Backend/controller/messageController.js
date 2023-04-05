const Message = require('../model/message');

exports.saveMessage = async (req, res) => {
    try {
        const message = req.body.message;
        if(isValidMessage(message)){
            await req.user.createMessage({
                message: message
            });
            res.status(200).json({message: 'msg saved to database'});
        } else {
            throw new Error('invalid message format');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'something went wrong'});
    }
};

exports.fetchMessage = async (req, res, next) => {
    try {
        const messages = await Message.findAll();
        res.status(200).json({messages: messages});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'could not fetch messages'});
    }
}

function isValidMessage(message) {
    if(typeof message === 'string' && message.length > 0){
        return true;
    } else {
        return false;
    }
}