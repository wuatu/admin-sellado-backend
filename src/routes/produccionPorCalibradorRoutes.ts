import {Router} from 'express';
import {produccionPorCalibradorController} from '../controllers/produccionPorCalibradorController';

class ProduccionPorCalibradorRoutes{
    public router:Router=Router(); 
       
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros_lineas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch',produccionPorCalibradorController.countBoxByCaliper);
    }
}

const produccionPorCalibradorRoute=new ProduccionPorCalibradorRoutes();
export default produccionPorCalibradorRoute.router;