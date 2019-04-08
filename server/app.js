const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const db = require('./db')
const Sequelize = require('sequelize')
const Fan = require('./models/Fans')
const User = require('./models/User')
db.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch( err => {
  console.error('数据库连接失败！',err);
})

// const User = db.define('user', {
//   userid: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// },{
//   timestamps:false,
//   freezeTableName:true,
// }
// )

// const Fan = db.define('fan', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   userid: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   fanid: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// },{
//   timestamps:false,
//   freezeTableName:true,
// }
// )



function initModels(){
  
  
  // db.drop()
  
  Fan.sync({force:true}).then(() => {
    Fan.bulkCreate([
      { userid: '1', fanid: '2', id:1 },
      { userid: '2', fanid: '1', id:2 },
      { userid: '3', fanid: '3', id:3 },
    ]).then((arr) => {
      User.sync({force:true}).then(() => {
        // User.bulkCreate([
        //   { username: 'John', password:'222', fan_id:1 },
        //   { username: 'John', password:'222', fan_id:1 },
        //   { username: 'John', password:'222', fan_id:1 },
        //   { username: 'Mike', password:'242', fan_id:2 },
        //   { username: 'Luck', password:'322', fan_id:3 },
        // ])
      User.create({ username: 'John', password:'222', fan_id:1, nickname: '王大傻' }).then(user1 => {
        // user1.addFan([arr[0],arr[1]])
      })
    })
    // const fan1 = Fan.create({ userid: '1', fanid: '2', id:1 })
    // const fan2 = Fan.create({ userid: '2', fanid: '1', id:2 })
    // const fan3 = Fan.create({ userid: '3', fanid: '3', id:3 })


    
      
  
    })
  })

}

initModels()


app.get('/getSome', (req, res) => {
  // User.findOne({where: {username: 'Mike'}}).then(data => {
  //   res.json(data)
    
  // })

  User.findAll({
    where: {username: 'John'},
    // include: [{
    //   model: Fan
    // }]
  }).then(data => {
    res.json(data)
  })
})

// 使用body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.all("*", function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next()
})

const user = require('./routes/user')

app.use('/user', user);


app.listen(port, () => {
  console.log("服务已启动，监听端口3000!");
});