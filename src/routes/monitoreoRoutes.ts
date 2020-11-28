
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
                
        /****************************************************************************************************************************************************************************************************/

        this.router.get('/monitoreo_produccion_minuto2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController.searchAverageforMinute2);
        /****************************************************************************************************************************************************************************************************/

        /****************************************************************************************************************************************************************************************************/

        this.router.get('/monitoreo_produccion_minuto_ultima_hora2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController.searchAverageLastHourforMinute2);        
        /****************************************************************************************************************************************************************************************************/
         
        this.router.get('/monitoreo_last_turno/',monitoreoController.getLastTurno);
    



    }
}

const monitoreoRoutes=new MonitoreoRoutes();
export default monitoreoRoutes.router;