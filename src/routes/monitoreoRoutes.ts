
import {Router} from 'express';
import { monitoreoController } from '../controllers/monitoreoController';

class MonitoreoRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/monitoreo_turno/:id_calibrador',monitoreoController.searchTotal);
        this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}

const monitoreoRoutes=new MonitoreoRoutes();
export default monitoreoRoutes.router;