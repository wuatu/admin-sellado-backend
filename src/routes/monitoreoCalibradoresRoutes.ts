import {Router} from 'express';
import { monitoreoCalibradoresController } from '../controllers/monitoreoCalibradoresController';


class MonitoreoCalibradoresRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        /****************************************************************************************************************************************************************************************************/
        //this.router.get('/monitoreo_calibrador_produccion_turno/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController.countBoxBycaliper);
        this.router.get('/monitoreo_calibrador_produccion_turno2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/', monitoreoCalibradoresController.countBoxBycaliper2);
        /****************************************************************************************************************************************************************************************************/   
        this.router.get('/monitoreo_calibrador_cajas_por_linea/:id_calibrador/:id_turno', monitoreoCalibradoresController.getCajasPorLinea);
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_calibrador_produccion_minuto2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/:lineas_length/', monitoreoCalibradoresController.searchAverageforMinute2);
         /****************************************************************************************************************************************************************************************************/
         
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/:lineas_length', monitoreoCalibradoresController.searchAverageLastHourforMinute2);
        /****************************************************************************************************************************************************************************************************/


        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_calibrador_last_turno/',monitoreoCalibradoresController.getLastTurno);
        this.router.get('/monitoreo_calibrador_production_line2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/:id_line/:name_line', monitoreoCalibradoresController.searchAverageLastMinuteByLine2);
        /****************************************************************************************************************************************************************************************************/


    }
}


const monitoreoCalibradoresRoutes=new MonitoreoCalibradoresRoutes();
export default monitoreoCalibradoresRoutes.router;