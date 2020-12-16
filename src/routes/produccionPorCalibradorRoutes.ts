import {Router} from 'express';
import {produccionPorCalibradorController} from '../controllers/produccionPorCalibradorController';

class ProduccionPorCalibradorRoutes{
    public router:Router=Router(); 
       
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/get_turnos_calibrador/:id_caliper/:fromDateSearch/:toDateSearch',produccionPorCalibradorController.getTurnos);
        this.router.get('/get_produccion_colaborador_turno/:id_turno',produccionPorCalibradorController.getProduccionColaborador);
        this.router.get('/get_promedio_cajas_por_minuto_turno/:id_calibrador/:id_turno/:fecha_inicio/:hora_inicio/:fecha_termino/:hora_termino',produccionPorCalibradorController.getPromedioCajasPorMinutoTurno);
        this.router.get('/get_produccion_linea_turno/:id_calibrador/:id_turno',produccionPorCalibradorController.getProduccionLineaCalibrador);
        this.router.get('/numero_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch/:id_turno',produccionPorCalibradorController.countBoxInCaliper);
        this.router.get('/numero_cajas_calibrador2/:id_caliper/:fromDateSearch/:toDateSearch',produccionPorCalibradorController.countBoxInCaliper2);
        this.router.get('/registros_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch/:id_turno',produccionPorCalibradorController.searchRegisterCaliper);
        this.router.get('/registros_cajas_calibrador2/:id_caliper/:fromDateSearch/:toDateSearch',produccionPorCalibradorController.searchRegisterCaliper2);
        this.router.put('/registro_produccion_calibrador_update/:id',produccionPorCalibradorController.update);
    }
}

const produccionPorCalibradorRoute=new ProduccionPorCalibradorRoutes();
export default produccionPorCalibradorRoute.router;