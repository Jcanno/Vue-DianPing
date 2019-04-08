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

// const fans = Fans.sync({force: true}).then(() => {
//   console.log('创建了表');
  
// })

module.exports = Followers;