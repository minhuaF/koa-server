## koa2-server
> koa2 + mongoose 搭建的服务器端，package.json 中有很多多余的模块，我是准备用于整合redux的，这个代码是备忘使用的，所以会package.json会有点乱，后期会慢慢整理。

## Install Dependencies
`npm install`

## Start
`npm start`

## mongodb 数据库
#### 启动数据库
1. 进入mongodb的安装路径 bin下；（我的路径是的 `D:\mongodb\mongodb\bin`）
1. 执行启动命令 `mongod --dbpath D:\mongodb\data`（此路径为数据库路径）；此时数据库已经启动；

#### 命令行操作数据库
1. 进入mongodb的安装路径 bin下；（我的路径是的 `D:\mongodb\mongodb\bin`）
1. 执行命令 `mongo` 即可进入命令行操作命令；

## 项目结构

## TODOLIST
1. mongoose中间件，处理error；
1. koa中间件， 处理error以及response；
1. 构造方法继承父类（处理错误）；
1. 抽离 config 文件夹；
1. 添加日志管理；

## LOG
#### 20171002 
1. 项目基本搭建；
1. 创建人员表，任务表；
1. 对表的基本增删改查；

#### 20171005
1. 优化代码结构；
1. README.md 文档；
1. 添加ejs模板，服务器端直接渲染（但不是同构项目，类似jsp）；
1. 添加模板文件；

## 参考资料
- [mongoDB与mongoose](http://www.cnblogs.com/web-fengmin/p/6435681.html)
- [Mongoose中的关联表查询 && 聚合查询](http://nodeclass.com/articles/411724)
- [Mongoose增查改删学习笔记](https://segmentfault.com/a/1190000008245062)
- [「新手向」koa2从起步到填坑](http://www.jianshu.com/p/6b816c609669)
- [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

    