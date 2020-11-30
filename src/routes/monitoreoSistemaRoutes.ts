import {Router} from 'express';
import { monitoreoSistemaController } from '../controllers/monitoreoSistema.controllers';

class MonitoreoSistemaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/monitoreo_sistema_list/:id_linea/:id_calibrador/:nombre_linea', monitoreoSistemaController.list);
        this.router.get('/monitoreo_sistema_collaborators/:id_linea/:id_calibrador/:nombre_linea', monitoreoSistemaController.getCollaboratorsInLine);
        this.router.get('/monitoreo_sistema_lector/:id_linea', monitoreoSistemaController.getLectorInLine);
        this.router.get('/monitoreo_sistema_rfid/:id_linea', monitoreoSistemaController.getRfidInLine); 
        this.router.get('/monitoreo_sistema_lector_validador/:id_calibrador', monitoreoSistemaController.getLectorValidatorInCaliper);
        this.router.get('/monitoreo_sistema_rfid_out/:id_calibrador', monitoreoSistemaController.getRfidOutInCaliper); 
        this.router.get('/monitoreo_sistema_last_lector_validador/:id_calibrador', monitoreoSistemaController.getLastLectorValitatorIncaliper);
        this.router.get('/monitoreo_sistema_last_rfid_salida/:id_calibrador', monitoreoSistemaController.getLastRfidOutInCaliper);        
 
    }
}

const monitoreoSistemaRoutes=new MonitoreoSistemaRoutes();
export default monitoreoSistemaRoutes.router;