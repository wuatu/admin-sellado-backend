import {Router} from 'express';
import {produccionPorLineaController} from '../controllers/produccionPorLineaController';


class ProduccionPorLineaRoutes{
    public router:Router=Router(); 
       
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/contador_cajas_calibrador_linea/:id_caliper/:id_line/:fromDateSearch/:toDateSearch',produccionPorLineaController.countBoxByline);
        this.router.get('/registros_cajas_calibrador_linea/:id_caliper/:id_line/:fromDateSearch/:toDateSearch',produccionPorLineaController.searchRegisterLine);
        this.router.put('/registro_produccion_linea_update/:id',produccionPorLineaController.update);
    }
}

const produccionPorLineaRoute=new ProduccionPorLineaRoutes();
export default produccionPorLineaRoute.router;