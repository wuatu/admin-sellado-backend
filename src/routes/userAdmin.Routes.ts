import {Router} from 'express';
import { userAdminController } from '../controllers/userAdminController';

class UserAdminRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/user_admin',userAdminController.list);
        this.router.post('/user_admin',userAdminController.create);
        this.router.get('/user_admin/:rut',userAdminController.get);
        this.router.get('/user_admin_/:id', userAdminController.getOne);
        this.router.put('/user_admin/:id',userAdminController.update);
        this.router.delete('/user_admin/:id', userAdminController.delete);
        
    }
}

const userAdminRoutes=new UserAdminRoutes();
export default userAdminRoutes.router;