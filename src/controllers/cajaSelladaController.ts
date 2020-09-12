import { Request, Response } from 'express';
import pool from '../database';
class CajaSelladaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador } = req.params;
            let cajasEnLinea: any;
            if (id_calibrador != "0" && id_linea != "0") {
                cajasEnLinea = await pool.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ?', [id_linea, id_calibrador]);
            }
            
            if (cajasEnLinea.length > 0) {
                return res.status(200).json(cajasEnLinea);
            } else {
                res.status(404).json({ text: 'Sin registros de cajas en linea' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas en linea' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const cajaEnLinea = await pool.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
            if (cajaEnLinea != null) {
                console.log(cajaEnLinea);
                if (cajaEnLinea != null) {
                    if (cajaEnLinea.affectedRows > 0) {
                        res.status(200).json({ message: 'caja en línea creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear caja en línea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear caja' });
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
                userInLineSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_caja = ? AND fecha_sellado like ?', [rutSearch, "%"+fromDateSearch]);
            } else if(rutSearch && fromDateSearch && toDateSearch){
                console.log("hola");
                userInLineSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_caja = ? AND (fecha_sellado BETWEEN ? AND ?)', [rutSearch, fromDateSearch+"%", toDateSearch+"%"]);
            }
            
            if (userInLineSearch.length > 0) {
                return res.status(200).json(userInLineSearch);
            } else {
                res.status(404).json({ text: 'Sin registros de cajas en linea' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas en linea' });
        }
    }
}

export const cajaSelladaController = new CajaSelladaController();