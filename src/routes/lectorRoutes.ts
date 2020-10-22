import {Router} from 'express';
import {lectorController} from '../controllers/lectorController';

class LectorRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/lectores/:id_calibrador/:id_linea',lectorController.list);
        this.router.post('/lector',lectorController.create);
        this.router.get('/lector/:id',lectorController.getOne);
        this.router.put('/lector/:id',lectorController.update);
        this.router.delete('/lector/:id',lectorController.delete);
    }
}

const lectorRoutes=new LectorRoutes();
export default lectorRoutes.router;