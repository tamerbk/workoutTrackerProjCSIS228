const DataTypes = require("sequelize")
const sequelize = require("../Database/config");
const Client = require("./client");
const Exercise = require("./exercise");

const workout= sequelize.define( 'workout',{

    workout_id: {
        type:DataTypes.INTEGER,
          primaryKey: true ,
          autoIncrement: true,
    },
    workout_name:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    visibilty:
    {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    
    imageData: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
      },
      client_id: {
        type: DataTypes.INTEGER,
        references:{
            model:'Client',
            key:'client_id',
        }
       
    },
      workout_desc:
      {
        type:DataTypes.STRING,
        allowNull:true
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
      },},
      {
      tableName: "workout",
      
});

workout.associate = () =>{
   workout.belongsTo(Client,{ foreignKey: 'client_id'});
}
workout.associate = () =>{
workout.belongsToMany(Exercise, { through: 'WorkoutExercise' });
}
module.exports = workout