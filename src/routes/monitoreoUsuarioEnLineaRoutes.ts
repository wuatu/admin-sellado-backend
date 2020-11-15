import {Router} from 'express';
import { monitoreoUsuarioEnLineaController } from '../controllers/monitoreoUsuarioEnLineaController';

class MonitoreoUsuarioEnLineaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        console.log("routes!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.router.get('/monitoreo_usuarios_en_linea/:id_linea/:id_calibrador/:id_turno/:nombre_linea', monitoreoUsuarioEnLineaController.list);        
        this.router.put('/monitoreo_usuarios_en_linea/:id_turno/:id_usuario/:id_linea/:fecha_termino/:hora_termino',monitoreoUsuarioEnLineaController.closeTurnCollaborators);
    }
}

const monitoreoUsuarioEnLineaRoutes=new MonitoreoUsuarioEnLineaRoutes();
export default monitoreoUsuarioEnLineaRoutes.router;