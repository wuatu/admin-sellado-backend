import { Request, Response } from 'express';
import pool from '../database';
class ConfiguracionController {

    
    public async getMinutes(req: Request, res: Response) {
        try {
            console.log("entre a la wea");
            const minute = await pool.query('SELECT * FROM configuracion');
            if (minute.length > 0) {
                return res.status(200).json(minute[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener la configuración de minutos' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener la configuración de minutos' });
        }
    }

    

    public async updateMinutes(req: Request, res: Response) {
        try {
            const { id_minute } = req.params;
            console.log(req.body);
            const minute = await pool.query('UPDATE configuracion SET ? WHERE id = ?', [req.body, id_minute]);
            if (minute != null) {
                if (minute.affectedRows > 0) {
                    res.status(200).json({ message: 'Configuración de minutos actualizada' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar la configuración de minutos' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar la configuración de minutos' });
        }
    }

   
}

export const configuracionController = new ConfiguracionController();