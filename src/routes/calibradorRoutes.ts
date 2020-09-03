import {Router} from 'express';
import {calibradorController} from '../controllers/calibradorController';

class CalibradorRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/calibradores',calibradorController.list);
        this.router.post('/calibrador',calibradorController.create);
        this.router.get('/calibrador/:id',calibradorController.getOne);
        this.router.put('/calibrador/:id',calibradorController.update);
        this.router.delete('/calibrador/:id',calibradorController.delete);
    }
}

const calibradorRoutes=new CalibradorRoutes();
export default calibradorRoutes.router;