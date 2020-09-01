import {Router} from 'express';
import {authController} from './auth.controller';

class AuthRoutes{
    public router:Router=Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.post('/register',authController.createUser);
        this.router.post('/login', authController.loginUser);
    }
}

const authRoutes=new AuthRoutes();
export default authRoutes.router;