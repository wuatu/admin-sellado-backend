import {Router} from 'express';
import {cajaController} from '../controllers/cajaController';

class CajaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/cajas',cajaController.list);
        this.router.post('/caja',cajaController.create);
        this.router.get('/caja/:id',cajaController.getOne);
        this.router.get('/caja_search/:criterio',cajaController.searchBox);
        this.router.put('/caja/:id',cajaController.update);
        this.router.delete('/caja/:id',cajaController.delete);
    }
}

const cajaRoutes=new CajaRoutes();
export default cajaRoutes.router;