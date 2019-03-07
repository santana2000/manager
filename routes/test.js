var express = require('express');
var router = express.Router();

router.get('/a',function (req,res) {
    res.send('a');
});

router.get('/b',function (req,res) {
    res.send('b');
});

router.get('/c',function (req,res) {
    res.send('c');
});

module.exports = router;

// 路由就是如何处理HTTP请求中的路径部分，每个路径都会有对应的函数来处理
// 路由 & 路由的处理函数

// app.use(path,callback)中的callback既可以是router对象又可以是函数；
// app.get(path,callback)中的callback只能是函数；

// router代表一个由express.Router()创建的对象，在路由对象中可定义多个路由规则

// 二级路由

// 动态路由 /user/: xxx

// 应用级中间件调用路由级中间件