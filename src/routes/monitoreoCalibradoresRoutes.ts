import {Router} from 'express';
import { monitoreoCalibradoresController } from '../controllers/monitoreoCalibradoresController';


class MonitoreoCalibradoresRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/monitoreo_calibrador_produccion_turno/:id_caliper/:date/:time/:option', monitoreoCalibradoresController.countBoxBycaliper);
        this.router.get('/monitoreo_calibrador_produccion_minuto/:id_caliper/:date/:time/:option', monitoreoCalibradoresController.searchAverageforMinute);
        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora/:id_caliper/:date/:time/:option', monitoreoCalibradoresController.searchAverageLastHourforMinute);
        this.router.get('/monitoreo_calibrador_last_turno/',monitoreoCalibradoresController.getLastTurno);
                            
        this.router.get('/monitoreo_calibrador_production_line/:id_caliper/:id_line/:name_line/:date/:time/:option', monitoreoCalibradoresController.getProductionLineTurno);
        //this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        //this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}

const monitoreoCalibradoresRoutes=new MonitoreoCalibradoresRoutes();
export default monitoreoCalibradoresRoutes.router;