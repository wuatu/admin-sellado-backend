import {Router} from 'express';
import {rfidController} from '../controllers/rfidController';

class RfidRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/rfids/:id_calibrador/:id_linea',rfidController.list);
        this.router.post('/rfid',rfidController.create);
        this.router.get('/rfid/:id',rfidController.getOne);
        this.router.put('/rfid/:id',rfidController.update);
        this.router.delete('/rfid/:id',rfidController.delete);
    }
}

const rfidRoutes=new RfidRoutes();
export default rfidRoutes.router;