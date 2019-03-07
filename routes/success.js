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

router.get('/login', function(req, res) {

    var param = req.query || req.params;
    var username = param.username;
    var password = param.password;
    var loginsql = 'SELECT * FROM userinfo WhERE name = ?';

    connection.query(loginsql, username, function (err, result) {
        if (err) res.json({status: 'login error:', message: err})

        if (result[0].password == password) {
            res.render('success')
        } else {
            res.redirect('login')
        }
    })
});
router.get('/register', function(req, res) {
        var param = req.query || req.params;
        var username = param.username;
        var password = param.password;
        var resgistersql = 'INSERT INTO userinfo (name, password) VALUE(?, ?)';

        connection.query(resgistersql,[username,password],function (err,result) {
            if(err) res.json({status:'insert error:', message:err})

            res.send('register success!')
        })
});

//*********配置路由后要重启服务器********

module.exports = router;
