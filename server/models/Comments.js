const Sequelize = require('sequelize')
const sequelize = require('../db')

const Comments = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // userid: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  pics: {
    type: Sequelize.TEXT,
    allowNull: false 
  }
},{
  freezeTableName:true,
}
)

module.exports = Comments;