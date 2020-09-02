import {Router} from 'express';
import {selladoraController} from '../controllers/selladoraController';

class SelladoraRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/selladoras',selladoraController.list);
        this.router.post('/selladora',selladoraController.create);
        this.router.get('/selladora/:id',selladoraController.getOne);
        this.router.put('/selladora/:id',selladoraController.update);
        this.router.delete('/selladora/:id',selladoraController.delete);
    }
}

const selladoraRoutes=new SelladoraRoutes();
export default selladoraRoutes.router;