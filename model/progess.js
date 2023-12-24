const DataTypes = require('sequelize')
const sequelize = require("../Database/config");
const Client = require('./client');
const workout = require('./workout');
const Exercise = require('./exercise');


const progress = sequelize.define('progress',{
    progress_id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },

    workout_id:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'workout',
            key:'workout_id',
        }
    },
    exercise_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'exercise',
            key:'exercise_id',
        }
    },

    progress_rep:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
    },

    progress_set:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },

    client_id:
    {
        type:DataTypes.INTEGER,
        references:{
            model:'Client',
            key:'client_id',
        }
    },
    progress_weight:
    {
        type:DataTypes.INTEGER,
        allowNull: false,
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
   },{
    tableName:"progress",
   

   });

   progress.associate= ()=>{
    progress.hasOne(Client,{foreignKey:"client_id"})
   }
   progress.associate=()=>{
    progress.hasOne(workout,{foreignKey:"workout_id"})
}

progress.associate=()=>{
    progress.hasOne(Exercise,{foreignKey:"exercise_id"})
}

progress.beforeCreate((progress, options) => {
    // Set createdAt and updatedAt to current date and time if not provided
    if (!progress.createdAt) {
      progress.createdAt = new Date();
    }
    if (!progress.updatedAt) {
      progress.updatedAt = new Date();
    }
  });

module.exports= progress