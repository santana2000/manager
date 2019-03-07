var createError = require('http-errors');
var express = require('express');
// 本质上来说，一个 Express 应用就是在调用各种中间件。
var path = require('path');

// 解析Cookie的工具，通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userQueryAPI');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var successRouter = require('./routes/success');
var testRouter = require('./routes/test');

// 生成一个express实例 app。
var app = express();

// view engine setup
// __dirname 为全局变量,存储当前正在执行的脚本所在的目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 日志中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 挂载路由到应用
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/success', successRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 导出app实例供其他模块调用。
module.exports = app;
