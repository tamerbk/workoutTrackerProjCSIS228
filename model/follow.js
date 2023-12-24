const DataTypes = require('sequelize')
const sequelize = require("../Database/config");
const Client = require('./client');
const { foreignKey } = require('inflection');


const follow =  sequelize.define('follow',
{
    follow_id:
    {
        type:DataTypes.INTEGER
        ,primaryKey:true,
        autoIncrement: true,
    },
    follower_id:
    {
        type:DataTypes.INTEGER,
        references:{
            model:'Client',
            key:'client_id',
        }
    },
    followed_id:
    {
        type:DataTypes.INTEGER,
        references:{
            model:'Client',
            key:'client_id',
        }
    }
},
{
    tableName:"follow",
    createdAt:false,
    updatedAt:false,
}
);

follow.associate = () =>{
    follow.hasOne(Client,{foreignKey:"client_id"})
}

follow.associate =()=>{
     follow.hasOne(Client,{foreignKey:"client_id"})
}

module.exports= follow