import {Router} from 'express';
import {produccionPorCalibradorController} from '../controllers/produccionPorCalibradorController';

class ProduccionPorCalibradorRoutes{
    public router:Router=Router(); 
       
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/numero_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch',produccionPorCalibradorController.countBoxInCaliper);
        this.router.get('/registros_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch',produccionPorCalibradorController.searchRegisterCaliper);
        this.router.put('/registro_produccion_calibrador_update/:id',produccionPorCalibradorController.update);
    }
}

const produccionPorCalibradorRoute=new ProduccionPorCalibradorRoutes();
export default produccionPorCalibradorRoute.router;