const Sequelize=require('sequelize');
 
const data_base=require('../config/database');

const User=data_base.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        inique:true,
        allowNull:false
    },
    mobileNo:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    password:Sequelize.STRING

});
module.exports = User;