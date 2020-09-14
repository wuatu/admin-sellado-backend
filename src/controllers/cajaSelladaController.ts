import { Request, Response } from 'express';
import pool from '../database';
class CajaSelladaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador } = req.params;
            let usuariosEnLinea: any;
            if (id_calibrador != "0" && id_linea != "0") {
                usuariosEnLinea = await pool.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ?', [id_linea, id_calibrador]);
            }
            
            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                res.status(404).json({ text: 'Sin registros de seguimiento de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener registro de seguimiento de cajas' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const registroSegimientoCaja = await pool.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
            if (registroSegimientoCaja != null) {
                console.log(registroSegimientoCaja);
                if (registroSegimientoCaja != null) {
                    if (registroSegimientoCaja.affectedRows > 0) {
                        res.status(200).json({ message: 'registro de seguimiento de cajas creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajasssssss' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajas' });
        }
    }

    public async search(req: Request, res: Response) {
        try {
            const { rutSearch, fromDateSearch, toDateSearch } = req.params;            
             console.log(rutSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            let userInLineSearch: any;
            if (rutSearch && fromDateSearch && !toDateSearch) {
                userInLineSearch = await pool.query(' SELECT DISTINCT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND fecha_sellado like ?', [rutSearch, "%"+fromDateSearch]);
            } else if(rutSearch && fromDateSearch && toDateSearch){
                console.log("hola");
                userInLineSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?)', [rutSearch, fromDateSearch+"%", toDateSearch+"%"]);
            }
            
            if (userInLineSearch.length > 0) {
                return res.status(200).json(userInLineSearch);
            } else {
                res.status(404).json({ text: 'Sin registros de seguimiento de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener el seguimiento de cajas' });
        }
    }
}

export const cajaSelladaController = new CajaSelladaController();