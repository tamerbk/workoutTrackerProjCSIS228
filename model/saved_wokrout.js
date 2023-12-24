const DataTypes = require('sequelize')
const sequelize = require("../Database/config");
const { foreignKey } = require('inflection');
const Client = require('./client');
const workout = require('./workout');

const saved_workout= sequelize.define( 'saved_workout',{
  save_id:
  {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  workout_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'workout',
      key:'workout_id',
  }
  },
  client_id:
  {
    type:DataTypes.INTEGER,
    references:{
      model:'Client',
      key:'client_id',
  }
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
    tableName:"saved_workout",
   
});

saved_workout.associate= ()=>{
    saved_workout.hasOne(Client,{foreignKey:"client_id"})
}

saved_workout.associate=()=>{
    saved_workout.hasOne(workout,{foreignKey:"workout_id"})
}

module.exports= saved_workout

