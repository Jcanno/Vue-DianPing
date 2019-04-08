const Sequelize = require('sequelize')
const sequelize = require('../db')

const Fans = sequelize.define('fans', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  userid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
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

// const fans = Fans.sync({force: true}).then(() => {
//   console.log('创建了表');
  
// })

module.exports = Fans;