const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment');


const Discusses = sequelize.define('discusses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  discuss: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    get() {
        return moment(this.getDataValue('createdAt')).format('M月DD日 HH:mm');
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
    }
  }
},{
  freezeTableName:true,
}
)

module.exports = Discusses;