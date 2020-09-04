import {Router} from 'express';
import {administradorController} from '../controllers/administradorController';

class AdministradorRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/administradores',administradorController.list);
        this.router.post('/administrador',administradorController.create);
        this.router.get('/administrador/:id',administradorController.getOne);
        this.router.put('/administrador/:id',administradorController.update);
        this.router.delete('/administrador/:id',administradorController.delete);
    }
}

const administradorRoutes=new AdministradorRoutes();
export default administradorRoutes.router;