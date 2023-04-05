const jwt = require('jsonwebtoken');
const User = require('../model/user');
const dotenv=require('dotenv');
dotenv.config();

exports.authenticate = (req, res, next) => {
    
    try {
        const token = req.header('Authorization');

        const tokenUser = jwt.verify(token, process.env.SecretKey);

        User.findByPk(tokenUser.userId)
            .then(user => {
                req.user = user;
                next();
            })
            .catch(error => {
                throw new Error(error);
            });
    } catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
};