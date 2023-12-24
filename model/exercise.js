const DataTypes = require('sequelize')
const sequelize = require('../Database/config');
const Client = require('./client');
const workout = require('./workout');


const Exercise = sequelize.define('exercise',
{
    exercise_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    exercise_name:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    exercise_desc:{
        type: DataTypes.STRING,
        allowNull: true
    },
    exercise_sets:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    exercise_reps:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    client_id:{
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
}, {
    tableName:"exercise",
    
    
});

Exercise.associate = () => {
    Exercise.belongsTo(Client,{foreignKey:'client_id'});
}

Exercise.associate = ()=>{
Exercise.belongsToMany(workout, { through: 'WorkoutExercise' });
}
module.exports = Exercise
