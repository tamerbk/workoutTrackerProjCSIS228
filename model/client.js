
const DataTypes = require('sequelize')

const sequelize = require('../Database/config');
const workout = require('./workout');
//const Exercise = require('./exercise');


const Client = sequelize.define('Client', {
    client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    client_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    client_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_gender: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    client_dob: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        //defaultValue: DataTypes.NOW,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Set default value to current date and time
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    

}, {
    tableName: "Client",
  
}
);
Client.associate = () => {
    Client.hasMany(workout,{ foreignKey: 'client_id'});
}
Client.associate = () => {
    Client.hasMany(Exercise,{ foreignKey: 'client_id'});
}
module.exports = Client 