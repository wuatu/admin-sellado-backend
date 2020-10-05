import {Router} from 'express';
import { cajaSelladaController } from '../controllers/cajaSelladaController';

class CajaSelladaRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/cajas_selladas/:id_linea/:id_calibrador',cajaSelladaController.list);
        this.router.post('/caja_sellada',cajaSelladaController.create);
        //this.router.get('/caja_sellada_search/:criterionSearch/:toSearch/:fromDateSearch/:toDateSearch',cajaSelladaController.search);
        this.router.get('/caja_sellada_search_line_caliper/:criterionSearch/:toSearch/:fromDateSearch/:toDateSearch/:idLine/:idCaliper',cajaSelladaController.searchLineAndCaliper);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        //this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
      
    }
}

const cajaSelladaRoutes=new CajaSelladaRoutes();
export default cajaSelladaRoutes.router;