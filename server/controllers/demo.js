const UserModel = require('../models/user');
const usersController = {

    demo: function(ctx, next){
        ctx.body = ''
    },

    getOne: async function (ctx, next){
        ctx.state = {
            title: 'demo',
            info: '条件查询 —— 查询name="rainbow2"的记录'
        };

        try{
            let user = await UserModel.findByUsername('rainbow2');
            ctx.body = {
                'user': user
            }
        }catch(e){
            ctx.body = {
                error: 'error'
            };
        }
    },

    login: async function(ctx, next){
        const body = ctx.request.body;
        const { phone, password } = body;

        try{
            let user = await UserModel.findByUsername('rainbow2');
            if( phone == user.name && password == user.password ) {
                ctx.body = {
                    state: true
                }
            }else {
                ctx.body = {
                    state: false,
                    error: '用户不存在！'
                }
            }
        }catch(e){
            ctx.body = {
                error: 'error'
            }
        }
    },

    getAllList: async function(ctx, next) {
        try{
            const users = await UserModel.findAll();
            ctx.body = {
                'users': users
            };
        }catch(e) {
             ctx.body = {
                error: 'error'
            };
        }
    },
}

module.exports = usersController;