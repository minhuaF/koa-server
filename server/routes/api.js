/**
 * Created at 20171002
 * 服务器端api路由地址
 */


import { usersController } from '../controllers';

export default function(Router) {
  // 所有api前面加前缀
  const router = new Router({
    prefix: '/api'
  });

  router.get('/user/getalllist', usersController.getUserAll);
  router.get('/user/addUser', usersController.addUser);
  router.get('/user/getone', usersController.getOne);
  router.get('/user/deleteUserByName', usersController.deleteUserByName);

  return router.routes();
}