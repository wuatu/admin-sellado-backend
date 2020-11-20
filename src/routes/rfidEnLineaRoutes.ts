import {Router} from 'express';
import {rfidEnLineaController} from '../controllers/rfidEnLineaController';

class RfidEnLineaController{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        
        this.router.get('/rfid_linea/:id',rfidEnLineaController.getLastRfidInLine);
        
    }
}

const rfidEnLineaRoutes=new RfidEnLineaController();
export default rfidEnLineaRoutes.router;