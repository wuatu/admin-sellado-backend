import { Request, Response } from 'express';
import pool from '../database';
class ProduccionPorLineaController {
    //obtengo las lineas del calibrador
    public async countBoxByline(req: Request, res: Response) {
        try {
            const { id_caliper,id_line ,fromDateSearch, toDateSearch } = req.params;            
             console.log(id_caliper + id_line + fromDateSearch + toDateSearch);
             let searchBox: any;
            if (id_caliper && id_line) 
            {
                searchBox = await pool.query(' SELECT fecha_sellado, COUNT(fecha_sellado) as numero FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND id_linea = ? AND (fecha_sellado BETWEEN ? AND ?) GROUP BY fecha_sellado', [id_caliper, id_line , fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de cajas' });
            }
            
            if (searchBox.length > 0) {
                return res.status(200).json(searchBox);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }

    
}

export const produccionPorLineaController = new ProduccionPorLineaController();