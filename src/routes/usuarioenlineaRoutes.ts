import {Router} from 'express';
import { usuarioEnLineaController } from '../controllers/usuarioenlineaController';

class UsuarioEnLineaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/usuarios_en_linea/:id_linea/:id_calibrador/:rutSearch/:fromDateSearch/:toDateSearch',usuarioEnLineaController.list);
        this.router.post('/usuario_en_linea',usuarioEnLineaController.create);
        //this.router.get('/usuario_en_linea/:rutSearch/:fromDateSearch/:toDateSearch',usuarioEnLineaController.search);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
        this.router.get('/usuarios_en_linea/:id_turno/:id_usuario/:id_linea',usuarioEnLineaController.validateCollaborator);
        this.router.put('/usuarios_en_linea/:id_turno/:id_usuario/:id_linea/:fecha_termino/:hora_termino',usuarioEnLineaController.closeTurnCollaborators);
    }
}

const usuarioEnLineaRoutes=new UsuarioEnLineaRoutes();
export default usuarioEnLineaRoutes.router;