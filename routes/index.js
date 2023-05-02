var express = require('express');
const sql = require("mssql");
var router = express.Router();
var config = require('../utils/connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.connect(config, function (err) {
    
    if (err) {
      res.send(err);
    } 
    else{
      res.send('connected')
    }
  });
  // const getConnection = sql.connect(config);
  // res.json({ title: getConnection });
});

module.exports = router;
