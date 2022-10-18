var express = require('express')
var router = express.Router();

router.post('/', function(req, res){
    res.send('POST route on things.');
 });
 
 module.exports = router;