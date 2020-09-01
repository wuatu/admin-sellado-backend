import { Request, Response } from 'express';
import pool from '../database';
class SelladoraController {

    public async list(req: Request, res: Response) {
        try {
            const selladoras = await pool.query('SELECT * FROM selladora');
            if (selladoras.length > 0) {
                console.log(selladoras);
                return res.status(200).json(selladoras);
            } else{
                res.status(404).json({ text: 'Sin registros' });
            }            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener selladoras' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const selladora = await pool.query('SELECT * FROM selladora WHERE id = ?', [id]);
            if (selladora.length > 0) {
                return res.status(200).json(selladora[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener selladora' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener selladora' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {     
            await pool.query('INSERT INTO selladora set ?', [req.body]);
            res.status(200).json({ message: 'selladora creada' });
        } catch{
            res.status(404).json({ text: 'No se pudo crear selladora' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await pool.query('UPDATE selladora set ? WHERE id = ?', [req.body, id]);
            res.status(200).json({ message: 'selladora actualizada' });
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar selladora' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await pool.query('DELETE FROM selladora WHERE id = ?', [id]);
            res.status(200).json({ message: 'selladora eliminada' });
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar selladora' });
        }
    }
}

export const selladoraController = new SelladoraController();