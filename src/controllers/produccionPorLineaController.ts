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
                searchBox = await pool.query('SELECT fecha_sellado, Count(fecha_sellado) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_linea = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado', [id_caliper, id_line , fromDateSearch, toDateSearch]);
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

    public async searchRegisterLine(req: Request, res: Response) {
        try {
            const { id_caliper,id_line ,fromDateSearch, toDateSearch } = req.params;            
             console.log(id_caliper + id_line + fromDateSearch + toDateSearch);
             let searchLine: any;
            if (id_caliper ) 
            {
                searchLine = await pool.query(' SELECT * FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND id_linea = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [id_caliper,id_line ,fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de la linea' });
            }
            
            if (searchLine.length > 0) {
                return res.status(200).json(searchLine);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            console.log(req.body);
        
            let registerLine: any ;
            if(id){
                registerLine = await pool.query('UPDATE registro_diario_caja_sellada SET is_verificado = ?, is_before_time = ? WHERE id_calibrador = ? AND id_linea = ? AND codigo_de_barra = ? AND fecha_sellado = ? AND hora_sellado = ?', [req.body.is_verificado, req.body.is_before_time, req.body.id_calibrador, req.body.id_linea, req.body.codigo_de_barra, req.body.fecha_sellado, req.body.hora_sellado]);
            }else{
                res.status(404).json({ text: 'id invalido' });
            }
            if (registerLine != null) {
                if (registerLine.affectedRows > 0) {
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

export const produccionPorLineaController = new ProduccionPorLineaController();