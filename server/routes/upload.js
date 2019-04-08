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
// const upload = multer({ dest: 'server/uploads/'})

router.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body);
  
  // 文件储存路径
  let file = req.file;
  res.json({url: "http://127.0.0.1:3000/uploads" + file.filename});
})

module.exports = router