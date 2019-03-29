const express = require("express")
const app = express()
const port = process.env.PORT || 3000


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