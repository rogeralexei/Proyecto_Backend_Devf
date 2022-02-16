const config=require('../database')
const Sequelize=require('sequelize')

const sequelize= new Sequelize(config.database, config.user, config.password,{
    host:config.host,
    port:config.port,
    dialect: "postgres",
    logging: false
})

module.exports=sequelize;