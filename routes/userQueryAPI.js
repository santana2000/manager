var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var DBConfig = require('../userdb/DBConfig');

var connection =mysql.createConnection(DBConfig.mysql)

connection.connect(function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
})

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var userid = req.params.id;
    console.log(userid);
    var sqlid = 'SELECT * FROM userinfo WHERE id=?';

    connection.query(sqlid,userid,function (err,result) {
        if(err){
            res.json({
                status:'error',
                message:err})
        }else {
            res.json({
                status: 'success',
                message: result[0]
            });
            console.log(result)
        }
    })

});

module.exports = router;
