import {Router} from 'express';
import { lectorValidadorController } from '../controllers/lectorValidadorController';

class LectorValidadorRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/lectoresValidador/:id_calibrador',lectorValidadorController.list);
        this.router.post('/lectorValidador',lectorValidadorController.create);
        this.router.get('/lectorValidador/:id',lectorValidadorController.getOne);
        this.router.put('/lectorValidador/:id',lectorValidadorController.update);
        this.router.delete('/lectorValidador/:id',lectorValidadorController.delete);
    }
}

const lectorValidadorRoutes = new LectorValidadorRoutes();
export default lectorValidadorRoutes.router;