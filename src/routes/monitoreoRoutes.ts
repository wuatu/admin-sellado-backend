
import {Router} from 'express';
import { monitoreoController } from '../controllers/monitoreoController';

class MonitoreoRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/monitoreo_produccion_turno/:id_caliper/:date/:time/:option', monitoreoController.countBoxBycaliper);
        this.router.get('/monitoreo_produccion_minuto/:id_caliper/:date/:time/:option', monitoreoController.searchAverageforMinute);
        this.router.get('/monitoreo_produccion_minuto_ultima_hora/:id_caliper/:date/:time/:option', monitoreoController.searchAverageLastHourforMinute);
        this.router.get('/monitoreo_last_turno/',monitoreoController.getLastTurno);
        //this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        //this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}

const monitoreoRoutes=new MonitoreoRoutes();
export default monitoreoRoutes.router;