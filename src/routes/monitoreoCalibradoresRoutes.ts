import {Router} from 'express';
import { monitoreoCalibradoresController } from '../controllers/monitoreoCalibradoresController';


class MonitoreoCalibradoresRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/monitoreo_calibrador_produccion_turno/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController.countBoxBycaliper);
        this.router.get('/monitoreo_calibrador_produccion_minuto/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController.searchAverageforMinute);
        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController.searchAverageLastHourforMinute);

        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoCalibradoresController.searchAverageLastHourforMinute2);
        this.router.get('/monitoreo_calibrador_produccion_minuto2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/', monitoreoCalibradoresController.searchAverageforMinute2);

        this.router.get('/monitoreo_calibrador_last_turno/',monitoreoCalibradoresController.getLastTurno);
        //this.router.get('/monitoreo_calibrador_production_line/:id_caliper/:id_line/:name_line/:date/:time/:option/:fecha_actual/', monitoreoCalibradoresController.getProductionLineTurno);
        this.router.get('/monitoreo_calibrador_production_line/:id_caliper/:id_line/:name_line/:date/:time/:fecha_actual/', monitoreoCalibradoresController.searchAverageLastMinuteByLine);
        //this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        //this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}


const monitoreoCalibradoresRoutes=new MonitoreoCalibradoresRoutes();
export default monitoreoCalibradoresRoutes.router;