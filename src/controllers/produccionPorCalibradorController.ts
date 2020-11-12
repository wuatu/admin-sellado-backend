import { Request, Response } from 'express';
import pool from '../database';
class ProduccionPorCalibradorController {
    //obtengo las lineas del calibrador
    public async countBoxInCaliper(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch } = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch);
             let numberBox: any;
            if (id_caliper ) 
            {
                numberBox = await pool.query('SELECT fecha_sellado, COUNT(DISTINCT(codigo_de_barra)) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) AND is_verificado = 1 group by fecha_sellado', [id_caliper, fromDateSearch, toDateSearch]);
                //numberBox = await pool.query('SELECT substr(fecha_sellado,1,10) as fecha_sellado2, Count(DATE_FORMAT(fecha_sellado, "%Y-%m-%d")) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado2', [id_caliper, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
            }
            
            if (numberBox.length > 0) {
                return res.status(200).json(numberBox);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    public async searchRegisterCaliper(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch } = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch);
             let searchCaliper: any;
            if (id_caliper ) 
            {
                searchCaliper = await pool.query(' SELECT * FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [id_caliper, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
            }
            
            if (searchCaliper.length > 0) {
                return res.status(200).json(searchCaliper);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    
    //Actualiza todos los colaboradores que estan en la linea
    public async update(req: Request, res: Response) {
        try {
            const { id} = req.params;
            console.log(req.body);
            let registerUser: any ;
            if(id){
                registerUser = await pool.query('UPDATE registro_diario_caja_sellada SET is_verificado = ?, is_before_time = ? WHERE id_calibrador = ? AND id_linea = ? AND codigo_de_barra = ? AND fecha_sellado = ? AND hora_sellado = ?', [req.body.is_verificado, req.body.is_before_time, req.body.id_calibrador, req.body.id_linea, req.body.codigo_de_barra, req.body.fecha_sellado, req.body.hora_sellado]);
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
            
            res.status(404).json({ text: 'No se pudo actualizar el registro' });
        }
    }

    
}

export const produccionPorCalibradorController = new ProduccionPorCalibradorController();