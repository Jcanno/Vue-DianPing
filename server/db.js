const Sequelize = require('sequelize');
const config = require('./config/dbConfig')
const sequelize = new Sequelize(`${config.db}://${config.user}:${config.password}@${config.host}:${config.port}/${config.dbname}`);

module.exports =  sequelize;