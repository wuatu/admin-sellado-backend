import { Request, Response } from 'express';
import pool from '../database';
class RegistroDevController {

    public async list(req: Request, res: Response) {
        try {
            let registrosDev: any;
            registrosDev = await pool.query('SELECT * FROM registro_dev ORDER BY id desc');
            if (registrosDev.length > 0) {
                return res.status(200).json(registrosDev);
            } else {
                res.status(204).json({ text: 'No existen registros dev para mostrar' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener el registro dev ' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const registroDev = await pool.query('INSERT INTO registro_dev set ?', [req.body]);            
            if (registroDev != null) {
                if (registroDev.affectedRows > 0) {
                    res.status(200).json({ message: 'registro dev creado' });
                }
            } else {
                res.status(404).json({ text: 'No se pudo crear registro dev el registro' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear el registro dev' });
        }
    }

    
}

export const registroDevController = new RegistroDevController();