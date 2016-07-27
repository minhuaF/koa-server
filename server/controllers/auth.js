const UserModel = require('../models/user');
// const moment = require('moment');
// const webtoken = require('jsonwebtoken');

const authController = {
     login: async function(ctx, next){
        const body = ctx.request.body;
        const { phone, password } = body;

        try{
            const user = await UserModel.findByUsername('rainbow2');
            if( phone != user.name && password != user.password ) {
                ctx.body = {
                    state: false,
                    error: '用户不存在！'
                }
                this.status = 403;
                return;
            }
            const playload = {
                user: user
            };
            // const expires = moment().add(3, 'minutes').valueof();
            // const token = webtoken.sign(playload, 'keys', {
            //     issuer: user._id,
            //     expiresIn: expires
            // });
            ctx.body = {
                state: false,
                msg: '登录成功！'
            };

        }catch(e){
            ctx.body = {
                error: 'error'
            }
        }
    },
}

module.exports = authController;