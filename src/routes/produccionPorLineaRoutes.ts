import {Router} from 'express';
import {produccionPorLineaController} from '../controllers/produccionPorLineaController';


class ProduccionPorLineaRoutes{
    public router:Router=Router(); 
       
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros_lineas_calibrador/:id_caliper/:id_line/:fromDateSearch/:toDateSearch',produccionPorLineaController.countBoxByline);
    }
}

const produccionPorLineaRoute=new ProduccionPorLineaRoutes();
export default produccionPorLineaRoute.router;