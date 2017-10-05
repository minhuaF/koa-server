const TaskModel = require('../models/task');
const taskController = {

    demo: function(ctx, next){
        ctx.body = ''
    },

    add: async function (ctx, next) {
        // let result = await UserModel.add({"name":"test", "type":"内部人员", "createDate": "2016-10-02 14:31:00"});
        let result = await TaskModel.add();
        console.log("result",result)
    },

    getOne: async function (ctx, next){
        ctx.state = {
            title: 'demo',
            info: '条件查询 —— 查询name="rainbow2"的记录'
        };

        try{
            let task = await TaskModel.getTaskByName('rainbow2');
            ctx.body = {
                'user': task
            }
        }catch(e){
            ctx.body = {
                error: 'error'
            };
        }
    },

    getAllList: async function(ctx, next) {
        try{
            const tasks = await TaskModel.findAll();
            ctx.body = {
                'users': tasks
            };
        }catch(e) {
             ctx.body = {
                error: 'error'
            };
        }
    },
}

module.exports = taskController;