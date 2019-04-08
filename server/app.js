const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const db = require('./db')
const Fan = require('./models/Fans')
const Comment = require('./models/Comment')
const User = require('./models/User')
const bcrypt = require("bcrypt")
const path = require('path')
db.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch( err => {
  console.error('数据库连接失败！',err);
})



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
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash('123', salt, function(err, hash) {
              // Store hash in your password DB.
              if(err) throw err;
              User.create({
                username: 'Mike',
                password: hash,
                nickname: 'Mike'
              }).then(() => {
                Comment.sync({force: true})
              })
          });
        });
      })
    })
  })

}
// db.sync()
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
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  // res.header("Content-Type", "application/json;charset=utf-8");
  next()
})

const user = require('./routes/user');
const comment = require('./routes/comment');
const upload = require('./routes/upload');
app.use('/', upload);
app.use('/user', user);
app.use('/', comment);


app.use('/static', express.static(path.join(__dirname, 'files')))
app.use('/upload', express.static(path.join(__dirname, 'uploads')))

app.listen(port, () => {
  console.log("服务已启动，监听端口3000!");
});