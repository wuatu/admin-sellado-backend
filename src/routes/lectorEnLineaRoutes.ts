import {Router} from 'express';
import { lectorEnLineaController } from '../controllers/lectorEnLineaController';


class LectorEnLineaController{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        
        this.router.get('/lector_linea/:id',lectorEnLineaController.getLastLectorInLine);
        
    }
}

const lectorEnLineaRoutes=new LectorEnLineaController();
export default lectorEnLineaRoutes.router;