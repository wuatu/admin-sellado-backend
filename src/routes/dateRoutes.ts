import {Router} from 'express';
import {dateController} from '../controllers/dateController';

class DateRoutes{
    public router:Router=Router();    
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/get_date',dateController.getDate);
    }
}

const dateRoutes=new DateRoutes();
export default dateRoutes.router;