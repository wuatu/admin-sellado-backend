import {Router} from 'express';
import { usuarioEnLineaController } from '../controllers/usuarioenlineaController';



class UsuarioEnLineaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/usuarios_en_linea/:id_linea/:id_calibrador',usuarioEnLineaController.list);
        this.router.post('/usuario_en_linea',usuarioEnLineaController.create);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        //this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
      
    }
}

const usuarioEnLineaRoutes=new UsuarioEnLineaRoutes();
export default usuarioEnLineaRoutes.router;