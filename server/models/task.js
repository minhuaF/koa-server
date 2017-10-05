/**
 * Created at 20171002
 * 任务表
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema

/**
 * 任务表的结构
 */
const TaskInfoSchema = new Schema({
  'name': { type: String },       // 任务名
  'detail': { type: String },     // 任务描述
  'status': { type: String },     // 状态 （未开发，开发中，已完成）
  'onlineDate':{ type: String },  // 上线日期
  'createDate': { type: String }, // 创建日期
  'userNames': { type: String}    // 对应人员(多个名字以逗号隔开)
})

const taskInfoModel = mongoose.model('TaskInfo', TaskInfoSchema)

/**
 * add
 */
TaskInfoSchema.statics.add = (data) => {
  let insert = new taskInfoModel(data);
  return insert.save();
}
/**
 * del
 */
TaskInfoSchema.statics.remove = (data) => {
  return this.remove(data);
}
/**
 * update
 * conditions 更新条件，如{name:'张三'} 查找name=张三的记录
 * update 更新的字段和值，如{name:'李四'} 
 */
TaskInfoSchema.statics.updateTaskByName = (conditions,update) => {
  return this.update(conditions,{$set: update})
}

/**
 * select one record
 */
TaskInfoSchema.statics.getTaskByName = (name) => {
  return this.findOne(name)
}

/**
 * select all record
 */
TaskInfoSchema.statics.getUserList = () => {
  return this.find()
}

// 创建模型
module.exports = taskInfoModel