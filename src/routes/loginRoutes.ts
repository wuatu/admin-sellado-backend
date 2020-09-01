import {Router} from 'express';
import {loginController} from '../controllers/loginController';

class loginRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.post('/',loginController.getOne);
    }
}

const gamesRoutes=new loginRoutes();
export default gamesRoutes.router;