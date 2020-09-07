import {Router} from 'express';
import {turnoController} from '../controllers/turnoController';

class TurnoRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/turnos',turnoController.list);
        this.router.post('/turno',turnoController.create);
        this.router.get('/turno/:id',turnoController.getOne);
        this.router.get('/turno',turnoController.getOneSinId);
        this.router.put('/turno/:id',turnoController.update);
        this.router.delete('/turno/:id',turnoController.delete);
    }
}

const turnoRoutes=new TurnoRoutes();
export default turnoRoutes.router;