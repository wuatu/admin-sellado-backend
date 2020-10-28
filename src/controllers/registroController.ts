import { Request, Response } from 'express';
import pool from '../database';
class RegistroController {

    public async list(req: Request, res: Response) {
        try {
            let registros: any;
            registros = await pool.query('SELECT * FROM registro ORDER BY fecha, hora ASC');
            if (registros.length > 0) {
                return res.status(200).json(registros);
            } else {
                res.status(204).json({ text: 'No existen registros para mostrar' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener el registro' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            //console.log(req.body);
            const registro = await pool.query('INSERT INTO registro set ?', [req.body]);            
            if (registro != null) {
                if (registro.affectedRows > 0) {
                    res.status(200).json({ message: 'registro creado' });
                }
            } else {
                res.status(404).json({ text: 'No se pudo crear el registro' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear el registro' });
        }
    }

    
}

export const registroController = new RegistroController();