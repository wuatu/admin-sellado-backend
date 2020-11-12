import {Router} from 'express';
import { codigoUnitecController } from '../controllers/codigoUnitecController';


class CodigoUnitecRoutes{
    public router:Router = Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros_cod_unitec',codigoUnitecController.list);
        this.router.get('/busqueda_cod_unitec/:code',codigoUnitecController.searchCodeBox);
        this.router.post('/registros_cod_unitec',codigoUnitecController.create);
        
      
    }
}

const codigoUnitecRoutes=new CodigoUnitecRoutes();
export default codigoUnitecRoutes.router;