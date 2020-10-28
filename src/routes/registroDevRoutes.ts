import {Router} from 'express';
import { registroDevController } from '../controllers/registroDevController';

class RegistroDevRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros_dev',registroDevController.list);
        this.router.post('/registro_dev',registroDevController.create);
        
      
    }
}

const registroDevRoutes=new RegistroDevRoutes();
export default registroDevRoutes.router;