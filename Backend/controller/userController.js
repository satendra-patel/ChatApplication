const User=require('../model/user');
const dotenv = require('dotenv');
dotenv.config();


const bcrypt=require('bcrypt');
const saltRounds=10;

exports.addUser = (req, res) => {
    const {email ,name,  mobileNo , password} = req.body;


    if(name.length > 0 && email.length > 0 && password.length > 0 && mobileNo.length > 0) {
        bcrypt.hash(password, saltRounds, function(error, hash) {
            User.create(
                {
                     
                    email: email,
                    name: name,
                    mobileNo:mobileNo, 
                    password: hash
                })
                .then(() => {
                    res.status(200).send({success: true, message: 'new user created'});
                })
                .catch(err => {
                    console.log(err);
                    if(err.name === 'SequelizeUniqueConstraintError'){
                        return res.status(400).json({success: false, message: err});
                    };
                    res.status(500).json({success: false, message: err});
                });
        });
    } else {
        res.status(400).json({success: false, message: 'bad parameters'});
    }
};
exports.logUser = (req, res) => {
    const {email, password} = req.body;

    if(email.length > 0 && password.length > 0) {
        User.findAll({where: {email: email}})
            .then(users => {
                
                const user = users[0];
                if(!user) {
                    return res.status(404).json({success: false, message: 'user does not exist'});
                }

                bcrypt.compare(password, user.password, function(error, result) {
                    if(error) {
                        return res.status(500).json({success: false, message: err});
                    }
                    if(result == true) {
                        const token = jwt.sign({userId: user.id, name: user.name},process.env.SecretKey);
                        res.status(200).json({
                            success: true, 
                            message: 'user found',
                            token: token
                        });
                    } else {
                        res.status(401).json({success: false, message: 'password is incorrect'});
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({success: false, message: err});
            });
    } else {
        res.status(400).json({success: false, message: 'bad parameters'});
    }
};