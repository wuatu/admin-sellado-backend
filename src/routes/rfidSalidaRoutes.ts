import {Router} from 'express';
import {rfidSalidaController} from '../controllers/rfidSalidaController';

class RfidSalidaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/rfids_salida/:id_calibrador',rfidSalidaController.list);
        this.router.post('/rfid_salida',rfidSalidaController.create);
        this.router.get('/rfid_salida/:id',rfidSalidaController.getOne);
        this.router.put('/rfid_salida/:id',rfidSalidaController.update);
        this.router.delete('/rfid_salida/:id',rfidSalidaController.delete);
    }
}

const rfidSalidaRoutes=new RfidSalidaRoutes();
export default rfidSalidaRoutes.router;