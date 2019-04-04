const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
const db = require('./db')

db.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch( err => {
  console.error('数据库连接失败！',err);
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

app.get("/test_api", (req, res) => {
  res.send(
    {a: '123'}
  );
})

app.listen(port, () => {
  console.log("服务已启动，监听端口3000!");
});