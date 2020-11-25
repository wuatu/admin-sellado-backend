import {Router} from 'express';
import {usuarioController} from '../controllers/usuarioController';

class UsuarioRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/usuarios',usuarioController.list);
        this.router.post('/usuario',usuarioController.create);
        this.router.get('/usuario/:id',usuarioController.getOne);
        this.router.get('/registro_rfid',usuarioController.getRegisterRfid);
        this.router.delete('/registro_rfid',usuarioController.deleteRegisterRfid);
        this.router.put('/usuario/:id',usuarioController.update);
        this.router.delete('/usuario/:id',usuarioController.delete);
    }
}

const usuarioRoutes=new UsuarioRoutes();
export default usuarioRoutes.router;