import { Request, Response } from 'express';
import pool from '../database';
class ProduccionPorCalibradorController {
    //obtengo las lineas del calibrador
    public async countBoxByCaliper(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch } = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch);
             let searchLine: any;
            if (id_caliper ) 
            {
                searchLine = await pool.query(' SELECT fecha_sellado, COUNT(fecha_sellado) as numero FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) GROUP BY fecha_sellado', [id_caliper, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de lineas' });
            }
            
            if (searchLine.length > 0) {
                return res.status(200).json(searchLine);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }

    
}

export const produccionPorCalibradorController = new ProduccionPorCalibradorController();