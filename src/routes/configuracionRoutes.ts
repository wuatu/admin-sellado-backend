import {Router} from 'express';
import {configuracionController} from '../controllers/configuracionController';

class ConfiguracionRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/minutes',configuracionController.getMinutes);
        this.router.put('/minutes_wait/:id_minute',configuracionController.updateMinutes);

    }
}

const configuracionRoutes=new ConfiguracionRoutes();
export default configuracionRoutes.router;