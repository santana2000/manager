var mysql = require('mysql');

//配置连接信息
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'manager'
})

//使用上面的设置进行连接，返回连接状况
connection.connect(function (err) {
    if(err){
        console.log('[query]:' + err);
        return;
    }
    console.log("succeed!")
})

/*//!**插入**
var userAddSql = 'INSERT INTO userinfo(id,name,password) VALUES(?,?,?)';
var userAddSql_params = [4,'peter','789'];
connection.query(userAddSql,userAddSql_params,function (err,result) {
    if(err){
        console.log('INSERT ERROR:',err.message);
        return;
    }
    console.log('*****************INSERT******************');
    console.log('content:',result);
    console.log('*****************FINISH******************');
})*/

//**查找**
var userAddSql = 'SELECT * FROM userinfo WHERE id=?';
var userAddSql_id = 2;
connection.query(userAddSql,userAddSql_id,function (err,result) {
    if(err){
        console.log('INSERT ERROR:',err.message);
        return;
    }
    console.log('*****************SELECT******************');
    console.log('content:',result);
    console.log('*****************FINISH******************');
})
connection.end()
