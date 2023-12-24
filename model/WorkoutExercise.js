const DataTypes = require("sequelize")
const sequelize = require('../Database/config');
const workout = require("./workout");
const { foreignKey } = require("inflection");
const Exercise = require("./exercise");


const WorkoutExercise = sequelize.define('workout_exerice',
{
    we_id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    workout_id:{
        type:DataTypes.INTEGER,
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
    },},
    {
        tableName:"workout_exercise",
        createdAt: false,
        updatedAt:false,
    });

    WorkoutExercise.associate =()=>{
        WorkoutExercise.hasOne(workout,{ foreignKey: 'workout_id',foreignKeyConstraint:true});
    }

    WorkoutExercise.associate =()=>{
        WorkoutExercise.hasOne(Exercise,{ foreignKey: 'exercise_id',foreignKeyConstraint:true});
    }

    module.exports = WorkoutExercise