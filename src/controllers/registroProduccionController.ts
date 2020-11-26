import { Request, Response } from 'express';
import pool from '../database';
class RegistroProduccionController {

    public async list(req: Request, res: Response) {
        try {
            let registrosProduccion: any;
            registrosProduccion = await pool.query('SELECT * FROM registro_produccion ORDER BY fecha, hora DESC');
            if (registrosProduccion.length > 0) {
                return res.status(200).json(registrosProduccion);
            } else {
                res.status(204).json({ text: 'No existen registros producción para mostrar' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener el registro Producción' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            //console.log(req.body);
            const registro = await pool.query('INSERT INTO registro_produccion set ?', [req.body]);            
            if (registro != null) {
                if (registro.affectedRows > 0) {
                    res.status(200).json({ message: 'registro producción creado' });
                }
            } else {
                res.status(404).json({ text: 'No se pudo crear el registro producción' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear el registro Producción' });
        }
    }

    
}

export const registroProduccionController = new RegistroProduccionController();