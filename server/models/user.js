/**
 * Created at 20171002
 * 人员表
 */
import mongoose from 'mongoose'
// 加解密
// import crypto from 'crypto'

const Schema = mongoose.Schema;

/**
 * Schema 定义数据库文档结构，不直接操作文档结构，映射到表中，直接操作表？
 */
const UserSchema = new Schema({
  'name': { type: String },
  'type': { type: String },
  'createDate': { type: String },
});

// 创建模型
const UserModel = mongoose.model('users', UserSchema);

// 创建user对象
const userModels = {}

/**
 * add one record
 * 增加数据都是要想创建Entity，然后再操作Entity
 * data: json
 */
userModels.addUser = (obj) => {
  let userEntity = new UserModel(obj);
  return userEntity.save( (err, docs) => {
    if(err) console.log('addUser error:', err);
    console.log('addUser success:', docs)
  });
};

/**
 * add more record 
 * 添加多条记录 Model.insertMany
 */


/**
 * remove
 * cond: 删除的条件
 */
userModels.removeUser = (cond) => {
  return UserModel.remove(cond, (err, docs) => {
    if(err) console.log('removeUser error:', err);
    console.log('removeUser success:', docs)
  });
};
/**
 * update
 * cond : 更新条件，如{name:'张三'} 查找name=张三的记录
 * doc 更新的字段和值，如{name:'李四',type:'内部人员'} 
 * options有以下选项：
 *   safe (boolean)： 默认为true。安全模式。
 *   upsert (boolean)： 默认为false。如果不存在则创建新记录。
 *   multi (boolean)： 默认为false。是否更新多个查询记录。
 *   runValidators： 如果值为true，执行Validation验证。
 *   setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
 *   strict (boolean)： 以strict模式进行更新。
 *   overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。
 */
userModels.updateUserByName = (cond, doc, options) => {
  // return userModel.update(conditions,{$set: update});
  return UserModel.update(cond, doc, options, (err, docs) => {
    if(err) console.log('updateUserByName error:', err);
    console.log('updateUserByName success:', docs)
  });
};

/**
 * select by name
 * cond: Object { name: 'XXX' } // 查询条件
 * proj: Object { name: 'XXX' } // 控制返回的字段
 */
userModels.getUserByName = (cond, proj) => {
  return UserModel.find(cond, proj, (err, docs) => {
    if(err) console.log('getUserByName error:', err);
    console.log('getUserByName success:', docs)
  });
};

/**
 * select all record
 */
userModels.getUserAll = () => {
  return UserModel.find((err, docs) => {
    if(err) console.log('getUserAll error:', err);
    console.log('getUserAll success:', docs)
  });
};

module.exports = userModels