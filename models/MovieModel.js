const sequelize = require('./connection')
const {DataTypes}=require("sequelize")

const Movie = sequelize.define('Movie',{ 
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
    },
    likes:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})


module.exports=Movie

