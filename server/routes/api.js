import { usersController, authController } from '../controllers'; 

export default function(Router) {
    const router = new Router({
        prefix: '/api'
    });

    router.get('/demo/getalllist', usersController.getAllList);
    router.get('/demo/getone', usersController.getOne);

    router.post('/login', authController.login);

    return router.routes();
}