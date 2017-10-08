// 导入中间件
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
// const mount = require('mount-koa-routes');
const views = require('koa-views');
// const views = require('co-views')
// const serve = require('koa-static');
// const render = require('koa-ejs');
// const co = require('co');
const convert = require('koa-convert'); // 对以generator作为中间件的写法进行长期支持
const json = require('koa-json');
// const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')(); // 解析请求参数
const logger = require('koa-logger');

// middlewares
app.use(convert(bodyparser)); // post body 解析
app.use(convert(json()));
app.use(convert(logger()));

// 渲染的模板
app.use(views(`${__dirname }/views`, {
  extension: 'ejs'
}))

// 提供给前端请求的 api
const api = require('./routes/api');
app.use(api(Router));

module.exports = app;