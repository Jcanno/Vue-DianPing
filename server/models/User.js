const Sequelize = require('sequelize')
const sequelize = require('../db')
const Fans = require('./Fans')

const User = sequelize.define('user', {
  userid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue: 'http://127.0.0.1:3000/static/hashiqi1.jpg'
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},{
  timestamps:false,
  freezeTableName:true,
}
)

User.hasMany(Fans)

module.exports = User;