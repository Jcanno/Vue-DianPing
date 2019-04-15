const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const db = require('./db')
const Fan = require('./models/Fans')
const Comments = require('./models/Comments')
const User = require('./models/User')
const Discusses = require('./models/Discusses')
const Thumbs = require('./models/Thumbs')
const bcrypt = require("bcrypt")
const path = require('path')
db.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch( err => {
  console.error('数据库连接失败！',err);
})



function initModels(){

  Fan.sync({force:true}).then(() => {
      User.sync({force:true}).then(() => {
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash('123', salt, function(err, hash) {
              // Store hash in your password DB.
              if(err) throw err;
              User.bulkCreate([
                { username: 'Mike', password:hash, nickname: 'Mike' },
                { username: 'John', password:hash, nickname: 'John' },
                { username: 'Jay', password:hash, nickname: 'Jay' },
                { username: 'Lucy', password:hash, nickname: 'Lucy' },
              ]).then((users) => {
                Comments.sync({force: true}).then(() => {
                  Comments.bulkCreate([
                    { title: 'abc', content: 'hahahsss', pics: 'http://127.0.0.1:3000/static/hashiqi1.jpg', userid:1 },
                    { title: 'def', content: 'hahahdsada', pics: 'http://127.0.0.1:3000/static/hashiqi1.jpg', userid:2 },
                    { title: 'ghi', content: 'hahahffadfad', pics: 'http://127.0.0.1:3000/static/hashiqi1.jpg', userid:3 },
                    { title: 'jkl', content: 'hahahdfadf', pics: 'http://127.0.0.1:3000/static/hashiqi1.jpg', userid:4 },
                  ]).then(comments => {
                    Discusses.sync({force: true}).then(() => {
                      Thumbs.sync({force: true}).then(() => {
                        Thumbs.bulkCreate([
                          { userid:1, commentId:2 },
                          { userid:3, commentId:2 }
                        ]).then((thumbs) => {
                          // comments[1].addThumb([thumb])
                        })
                      })
                    })
                  })
                })
              })
          });
        });
      // })
    })
  })

}

initModels()

// 使用body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.all("*", function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  next()
})

const user = require('./routes/user');
app.use('/', user);
const comment = require('./routes/comment');
app.use('/', comment);
const upload = require('./routes/upload');
app.use('/', upload);
const fan = require('./routes/fan');
app.use('/', fan);
const discuss = require('./routes/discuss');
app.use('/', discuss);
const thumbUp = require('./routes/thumbUp');
app.use('/', thumbUp);

// 访问静态文件
app.use('/static', express.static(path.join(__dirname, 'files')))
app.use('/upload', express.static(path.join(__dirname, 'uploads')))

app.listen(port, () => {
  console.log("服务已启动，监听端口3000!");
});