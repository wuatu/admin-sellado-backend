import { Request, Response } from 'express';
import pool from '../database';
class ProduccionColaboradorController {

    public async search(req: Request, res: Response) {
        try {
            const { rutSearch, fromDateSearch, toDateSearch } = req.params;            
             console.log(rutSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            
             let producctionSearch: any;
            
            if (rutSearch && fromDateSearch && toDateSearch ) {
                producctionSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado ASC', [rutSearch, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda' });
            }
            
            if (producctionSearch.length > 0) {
                return res.status(200).json(producctionSearch);
            
            } else {
                console.log("Sin registros para esta busqueda");
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }

    public async searchCount(req: Request, res: Response) {
        try {
            const { rutSearch, fromDateSearch, toDateSearch } = req.params;            
             console.log(rutSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            
             let producctionSearch: any;
            
            if (rutSearch && fromDateSearch && toDateSearch ) {
                
                producctionSearch = await pool.query('SELECT fecha_sellado, COUNT(fecha_sellado) as numero FROM registro_diario_caja_sellada  WHERE rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) GROUP BY fecha_sellado;', [rutSearch, fromDateSearch, toDateSearch]);
                console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda' });
            }
            
            if(producctionSearch.length > 0) {
                return res.status(200).json(producctionSearch);
            
            } else {
                console.log("Sin registros para esta busqueda");
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }

    public async update(req: Request, res: Response) {
        try {
            console.log("HOLA MUNDO");
            const { id } = req.params;
            
            console.log(req.body);
        
            let registerUser: any ;
            if(id){
                registerUser = await pool.query('UPDATE registro_diario_caja_sellada SET ? WHERE id = ?', [req.body, id]);
            }else{
                res.status(404).json({ text: 'id invalido' });
            }
            if (registerUser != null) {
                if (registerUser.affectedRows > 0) {
                    res.status(200).json({ message: 'Registro actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar el registro' });
                }
            }
        } catch{
            console.log("HOLA MUNDO CTM !!!!!");
            res.status(404).json({ text: 'No se pudo actualizar el registro' });
        }
    }

    
}

export const produccionColaboradorController = new ProduccionColaboradorController();