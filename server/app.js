const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const db = require('./db')
const path = require('path')
db.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch( err => {
  console.error('数据库连接失败！',err);
})

db.sync({force: true});

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