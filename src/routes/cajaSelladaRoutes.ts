import {Router} from 'express';
import { cajaSelladaController } from '../controllers/cajaSelladaController';

class UsuarioEnLineaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/cajas_selladas/:id_linea/:id_calibrador',cajaSelladaController.list);
        this.router.post('/caja_sellada',cajaSelladaController.create);
        this.router.get('/caja_sellada/:rutSearch/:fromDateSearch/:toDateSearch',cajaSelladaController.search);
        this.router.get('/cajas_selladas_turno/:id_turno/:id_calibrador',cajaSelladaController.searchTotal);
        this.router.get('/cajas_selladas_promedio_por_minuto/:id_turno/:id_calibrador',cajaSelladaController.searchAverageforMinute);
        this.router.get('/cajas_selladas_promedio_ultima_hora_por_minuto/:id_turno/:id_calibrador',cajaSelladaController.searchAverageLastHourforMinute);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        //this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
      
    }
}

const usuarioEnLineaRoutes=new UsuarioEnLineaRoutes();
export default usuarioEnLineaRoutes.router;