const express = require("express")
const router = express.Router()
const multer  = require('multer')

// multer存储对象
// 通过转化格式文件名
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

// 实例化multer对象
const upload = multer({ storage})

/**
 * 多选上传接口  最多上传9个文件
 * 文件存储路径为  `server/uploads`
 */
router.post('/upload', upload.array('file', 9), (req, res) => {
  // 文件储存路径
  let files = req.files;
  let results = [];
  for(let file of files){
    results.push("http://127.0.0.1:3000/upload/" + file.filename);
  }
  res.status(201).json(results);
})

router.post('/uploadSingle', upload.single('file'), (req, res) => {
  // 文件储存路径
  let file = req.file;
  res.status(201).json({url: "http://127.0.0.1:3000/upload/" + file.filename});
})


module.exports = router