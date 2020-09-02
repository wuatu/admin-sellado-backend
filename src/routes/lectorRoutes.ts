import {Router} from 'express';
import {lectorController} from '../controllers/lectorController';

class LectorController{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/lectores/:id_selladora/:id_linea',lectorController.list);
        this.router.post('/lector',lectorController.create);
        this.router.get('/lector/:id',lectorController.getOne);
        this.router.put('/lector/:id',lectorController.update);
        this.router.delete('/lector/:id',lectorController.delete);
    }
}

const lectorRoutes=new LectorController();
export default lectorRoutes.router;