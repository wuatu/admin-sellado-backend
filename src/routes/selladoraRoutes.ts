import {Router} from 'express';
import {selladoraController} from '../controllers/selladoraController';

class SelladoraRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/',selladoraController.list);
        this.router.post('/',selladoraController.create);
        this.router.get('/:id',selladoraController.getOne);
        this.router.put('/:id',selladoraController.update);
        this.router.delete('/:id',selladoraController.delete);
    }
}

const selladoraRoutes=new SelladoraRoutes();
export default selladoraRoutes.router;