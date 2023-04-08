const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Group = sequelize.define('group', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
});

module.exports = Group;