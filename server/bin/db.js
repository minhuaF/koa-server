/**
 * Created at 20160627
 * auth by Miwa
 */
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// 以下MongoDB连接相关代码页可以独立出去，这里偷懒了
// 连接MongoDB, 在生产环境应该禁用autoIndex，因为会造成性能问题
const connString = 'mongodb://localhost:27017/koa';
mongoose.connect(connString, { /*config: { autoIndex: false }*/ });

// MongoDB连接成功后回调，这里仅输出一行日志
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + connString);
});

// MongoDB连接出错后回调，这里仅输出一行日志
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// MongoDB连接断开后回调，这里仅输出一行日志
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// 当前进程退出之前关闭MongoDB连接
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;