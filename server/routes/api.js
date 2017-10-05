/**
 * Created at 20171002
 * 服务器端api路由地址
 */

 
import { usersController, taskInfoController } from '../controllers'; 

export default function(Router) {
    // 所有api前面加前缀
    const router = new Router({
        prefix: '/api'
    });
    
    router.get('/user/getalllist', usersController.getUserAll);
    router.get('/user/addUser', usersController.addUser);
    router.get('/user/getone', usersController.getOne);
    router.get('/user/deleteUserByName', usersController.deleteUserByName);
    
    router.get('/task/getalllist', taskInfoController.getAllList);
    router.get('/task/getone', taskInfoController.getOne);
    router.get('/task/addTask', taskInfoController.add);

    return router.routes();
}