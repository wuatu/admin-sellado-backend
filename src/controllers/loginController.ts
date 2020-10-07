import {Request,Response} from 'express';
import pool from '../database';
class LoginController{
    index(req:Request,res:Response){
        pool.query('DESCRIBE administrador');
        res.json('login');
    }

    getOne(req:Request,res:Response){
        const userData={
            rut:req.body.rut,
            password:req.body.password,
            
        }
        res.json({text:'this is a admin'+req.params.id});
        
    }
}

export const loginController=new LoginController();