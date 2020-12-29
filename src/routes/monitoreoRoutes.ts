
import {Router} from 'express';
import { monitoreoController } from '../controllers/monitoreoController';

class MonitoreoRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        /****************************************************************************************************************************************************************************************************/

        this.router.get('/monitoreo_produccion_turno2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController.countBoxBycaliper2);
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_produccion_total_turno2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController.countTotalBoxBycaliper2);    
        /****************************************************************************************************************************************************************************************************/

        this.router.get('/monitoreo_produccion_minuto2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/:lineas_length', monitoreoController.searchAverageforMinute2);
        /****************************************************************************************************************************************************************************************************/

        /****************************************************************************************************************************************************************************************************/

        this.router.get('/monitoreo_produccion_minuto_ultima_hora2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/:lineas_length', monitoreoController.searchAverageLastHourforMinute2);        
        /****************************************************************************************************************************************************************************************************/
         
        this.router.get('/monitoreo_last_turno/:fk_calibrador',monitoreoController.getLastTurno);
    



    }
}

const monitoreoRoutes=new MonitoreoRoutes();
export default monitoreoRoutes.router;