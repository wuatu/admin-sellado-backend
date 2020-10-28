import {Router} from 'express';
import { registroProduccionController } from '../controllers/registroProduccionController';

class RegistroProduccionRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros_produccion',registroProduccionController.list);
        this.router.post('/registro_produccion',registroProduccionController.create);
        
      
    }
}

const registroProduccionRoutes=new RegistroProduccionRoutes();
export default registroProduccionRoutes.router;