import { Request, Response } from 'express';
import pool from '../database';
class CalibradorController {

    public async list(req: Request, res: Response) {
        try {
            const calibradores = await pool.query('SELECT * FROM calibrador');
            if (calibradores.length > 0) {
                console.log(calibradores);
                return res.status(200).json(calibradores);
            } else{
                res.status(204).json({ text: 'No existen registros de calibrador para mostrar' });
            }            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener calibradores' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const calibrador = await pool.query('SELECT * FROM calibrador WHERE id = ?', [id]);
            if (calibrador.length > 0) {
                return res.status(200).json(calibrador[0]);
            }else{
                res.status(204).json({ text: 'No existen registros de calibrador para mostrar' });
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener calibrador' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {  
            console.log("Entre al create de calibrador");   
            await pool.query('INSERT INTO calibrador set ?', [req.body]);
            res.status(200).json({ message: 'calibrador creada' });
        } catch{
            res.status(404).json({ text: 'No se pudo crear calibrador' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await pool.query('UPDATE calibrador set ? WHERE id = ?', [req.body, id]);
            res.status(200).json({ message: 'calibrador actualizada' });
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar calibrador' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await pool.query('DELETE FROM calibrador WHERE id = ?', [id]);
            res.status(200).json({ message: 'calibrador eliminada' });
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar calibrador' });
        }
    }
}

export const calibradorController = new CalibradorController();