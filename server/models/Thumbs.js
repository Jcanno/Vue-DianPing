const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment');

const Thumbs = sequelize.define('thumbs', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: Sequelize.INTEGER,
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


module.exports = Thumbs;