import {Router} from 'express';
import {lineaController} from '../controllers/lineaController';

class LineaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/lineas',lineaController.list);
        this.router.get('/lineas/:id',lineaController.list);        
        this.router.post('/linea/',lineaController.create);
        this.router.get('/linea/:id',lineaController.getOne);
        this.router.put('/linea/:id',lineaController.update);
        this.router.delete('/linea/:id',lineaController.delete);
    }
}

const lineaRoutes=new LineaRoutes();
export default lineaRoutes.router;