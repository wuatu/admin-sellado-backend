import {Router} from 'express';
import { registroController } from '../controllers/registroController';

class RegistroRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros',registroController.list);
        this.router.post('/registro',registroController.create);
        
      
    }
}

const registroRoutes=new RegistroRoutes();
export default registroRoutes.router;