const express = require("express")
const router = express.Router()
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads')
  },
  filename: function (req, file, cb) {
    var index1 = file.originalname.lastIndexOf(".");
    var index2 = file.originalname.length;
    var type = file.originalname.substring(index1,index2);
    cb(null, file.fieldname + '-' + Date.now() + type);
  }
})
 
const upload = multer({ storage})

router.post('/upload', upload.array('file', 9), (req, res) => {
  // 文件储存路径
  let files = req.files;
  let arr = [];
  for(let file of files){
    arr.push("http://127.0.0.1:3000/upload/" + file.filename)
  }
  res.json(arr)
})

module.exports = router