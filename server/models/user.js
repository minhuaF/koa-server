
const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//type:字段类型，包括String,Number,Date,Buffer,Boolean,Mixed,ObjectId,Array
//index:是否索引，注意唯一索引unique的写法
//default:默认值
const UserSchema = new Schema({
    "name": { type: String, index: true},
    "password": { type: String, index: true},
});



//使用setter，将用户输入的明文密码sha1之后存储
// UserSchema.path('password').set(function(v){
//     let shasum = crypto.createHash('sha1');
//     shasum.update(v);
//     return shasum.digest('hex');
// });

//使用middleware，每次保存都记录一下最后更新时间
// UserSchema.pre('save', function(next){
//     this.updated = Date.now();
//     next();
// });

//静态方法，按用户名查找，因为username加了唯一索引，
//所以这里用的是findOne，只查询一条数据
UserSchema.statics.findByUsername = function(username){
    return this.findOne({name: username});
};

// 查询所有用户数据
UserSchema.statics.findAll = function(){
    return this.find();
};


// 保存数据

//创建模型
const userModel = mongoose.model('users', UserSchema); 

module.exports = userModel;