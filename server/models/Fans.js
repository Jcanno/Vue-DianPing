const Sequelize = require('sequelize')
const sequelize = require('../db')

const Fans = sequelize.define('fans', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fanid: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},{
  timestamps:false,
  freezeTableName:true,
}
)


module.exports = Fans;