const Sequelize = require('sequelize')
const sequelize = require('../db')

const Followers = sequelize.define('followers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  userid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  followerid: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},{
  timestamps:false,
  freezeTableName:true,
}
)


module.exports = Followers;