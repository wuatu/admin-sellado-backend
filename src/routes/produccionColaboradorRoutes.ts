import {Router} from 'express';
import {produccionColaboradorController} from '../controllers/produccionColaboradorController';

class ProduccionColaboradorRoutes{
    public router:Router=Router(); 
       
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/registros_produccion_colaborador/:rutSearch/:fromDateSearch/:toDateSearch',produccionColaboradorController.search);
        this.router.get('/registros_produccion_colaborador_cajas_diarias/:rutSearch/:fromDateSearch/:toDateSearch',produccionColaboradorController.searchCount);
        this.router.put('/registro_produccion_colaborador_update/:id',produccionColaboradorController.update);
        //this.router.post('/usuario',produccionColaboradorController.create);
        //this.router.get('/usuario/:id',produccionColaboradorController.getOne);
        //this.router.delete('/usuario/:id',produccionColaboradorController.delete);
    }
}

const produccionColaboradorRoute=new ProduccionColaboradorRoutes();
export default produccionColaboradorRoute.router;