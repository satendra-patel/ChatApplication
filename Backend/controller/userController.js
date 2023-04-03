const User=require('../model/user');


const bcrypt=require('bcrypt');
const saltRounds=10;

exports.addUser = (req, res) => {
    const {name, email,mobileNo, password} = req.body;


    if(name.length > 0 && email.length > 0 && password.length > 0) {
        bcrypt.hash(password, saltRounds, function(error, hash) {
            User.create(
                {
                    name: name, 
                    email: email,
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
