const Sequelize=require('sequelize');
 
const data_base=require('../config/database');

const Message=data_base.define('message',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    message:{
        type:Sequelize.STRING,
        allowNull:false
    }

});
module.exports = Message;