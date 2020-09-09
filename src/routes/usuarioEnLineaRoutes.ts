import {Router} from 'express';
import {usuarioEnLineaController} from '../controllers/usuarioEnLineaController';

class UsuarioEnLineaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/usuario_en_lineas',usuarioEnLineaController.list);
        this.router.post('/usuario_en_linea',usuarioEnLineaController.create);
        this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        this.router.delete('/usuario_en_linea/:id',usuarioEnLineaController.delete);
    }
}

const registro_diario_usuario_en_lineaRoutes=new UsuarioEnLineaRoutes();
export default registro_diario_usuario_en_lineaRoutes.router;