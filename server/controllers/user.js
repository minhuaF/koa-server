import { userModels } from '../models'

/**
 * 
 * @param {String} ctx
 * @param {function} next
 * 
 * context封装了node中的request和response，koa2.x使用ctx来访问context
 * next: function next(){return dispatch(i+1)}，用户执行下一个中间件（同步异步的情况）
 */
export const addUser = async (ctx, next) => {
  let result = await userModels.addUser({
    "name": "Miwa",
    "type": "内部人员",
    "createDate": new Date()
  });
  next()
  console.log("result", result)
}

export const getOne = async (ctx, next) => {
  try {
    let user = await userModels.getUserByName({ name: 'Miwa' });
    ctx.body = {
      'user': user
    }
  }
  catch (e) {
    ctx.body = {
      error: 'error'
    };
    // 继续抛出异常，让外层中间件logger处理日志
    throw e
  }
  next()
}

export const getUserAll = async (ctx, next) => {
  try {
    const users = await userModels.getUserAll();
    // ctx.body = {
    //     'users': users
    // };
    ctx.state = {
      allUsers: users
    }
    await ctx.render('user', {})
  }
  catch (e) {
    console.log(e);
    ctx.body = {
      error: 'error',
      1: e
    };
    // 继续抛出异常，让外层中间件logger处理日志
    throw e
  }
  next()
}

export const deleteUserByName = async (ctx, next) => {
  try {
    const users = await userModels.removeUser({ name: 'Miwa' });
    ctx.body = {
      'users': users
    };
  }
  catch (e) {
    ctx.body = {
      error: e,
    };
    // 继续抛出异常，让外层中间件logger处理日志
    throw e
  }
  next()
}