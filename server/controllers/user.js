import { userModels } from '../models'

/**
 * 
 * @param {String} ctx 
 * @param {*} next
 * 
 * context封装了node中的request和response，koa2.x使用ctx来访问context
 */
export const addUser = async (ctx, next) => {
    let result = await userModels.addUser({ "name": "Miwa", "type": "内部人员", 'createDate': new Date() });
    console.log("result", result)
}

export const getOne = async (ctx, next) => { 
    try {
        let user = await userModels.getUserByName({ name: 'Miwa' });
        ctx.body = {
            'user': user
        }
    } catch (e) {
        ctx.body = {
            error: 'error'
        };
    }
}

export const getUserAll = async (ctx, next) => {
    try {
        const users = await userModels.getUserAll();
        ctx.body = {
            'users': users
        };
    } catch (e) {
        console.log(e);
        ctx.body = {
            error: 'error',
            1: e
        };
    }
}

export const deleteUserByName = async (ctx, next) => {
    try {
        const users = await userModels.removeUser({ name: 'Miwa' });
        ctx.body = {
            'users': users
        };
    } catch (e) {
        ctx.body = {
            error: e,
        };
    }
}


// const usersController = {

//     addUser: async function (ctx, next) {
//         let result = await userModels.addUser({"name":"Miwa", "type":"内部人员", "createDate": new Date()});
//         console.log("result", result)
//     },

//     getOne: async function (ctx, next){
//         try{
//             let user = await userModels.getUserByName({name: 'Miwa'});
//             ctx.body = {
//                 'user': user
//             }
//         }catch(e){
//             ctx.body = {
//                 error: 'error'
//             };
//         }
//     },

//     getUserAll: async function(ctx, next) {
//         try{
//             const users = await userModels.getUserAll();
//             ctx.body = {
//                 'users': users
//             };
//         }catch(e) {
//             console.log(e);
//              ctx.body = {
//                 error: 'error',
//                 1: e
//             };
//         }
//     },

//     deleteUserByName: async function(ctx, next) {
//         try{
//             const users = await userModels.removeUser({name:'Miwa'});
//             ctx.body = {
//                 'users': users
//             };
//         }catch(e) {
//              ctx.body = {
//                 error: e,
//             };
//         }
//     },
// }

// module.exports = usersController;