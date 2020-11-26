import {Router} from 'express';
import { rfidRegistroColaboradorController } from '../controllers/rfidRegistroColaboradorController';

class RfidRegistroColaboradorRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/rfids_registro_colaborador/',rfidRegistroColaboradorController.list);
        this.router.post('/rfid_registro_colaborador/',rfidRegistroColaboradorController.create);
        this.router.get('/rfid_registro_colaborador/:id',rfidRegistroColaboradorController.getOne);
        this.router.put('/rfid_registro_colaborador/:id',rfidRegistroColaboradorController.update);
        this.router.delete('/rfid_registro_colaborador/:id',rfidRegistroColaboradorController.delete);
    }
}

const rfidRegistroColaboradorRoutes=new RfidRegistroColaboradorRoutes();
export default rfidRegistroColaboradorRoutes.router;