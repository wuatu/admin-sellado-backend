import {Router} from 'express';
import {administradorController} from '../controllers/administradorController';

class AdministradorRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/administradores',administradorController.list);
        this.router.get('/user_admin',administradorController.listUA);
        this.router.post('/administrador',administradorController.create);
        this.router.get('/administrador/:rut',administradorController.get);
        this.router.get('/administrador_/:id',administradorController.getOne);
        this.router.put('/administrador/:id',administradorController.update);
        
        this.router.delete('/administrador/:id',administradorController.delete);
        this.router.get('/administrador/login/:rut/:password',administradorController.login);
    }
}

const administradorRoutes = new AdministradorRoutes();
export default administradorRoutes.router;