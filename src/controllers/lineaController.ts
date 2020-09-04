import { Request, Response } from 'express';
import pool from '../database';
class LineaController {

    public async list(req: Request, res: Response) {
        try {
            const { id } = req.params;
            let lineas;
            if (id!=null) {
                lineas = await pool.query('SELECT * FROM linea where fk_calibrador = ?', [id]);
            } else{
                lineas = await pool.query('SELECT * FROM linea');
            }
            if (lineas.length > 0) {
                return res.status(200).json(lineas);
            } else {
                res.status(404).json({ text: 'Sin registros' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener lineas' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const linea = await pool.query('SELECT * FROM linea WHERE id = ?', [id]);
            if (linea.length > 0) {
                return res.status(200).json(linea[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener linea' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener linea' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            await pool.query('INSERT INTO linea set ?', [req.body]);
            res.status(200).json({ message: 'linea creada' });
        } catch{
            res.status(404).json({ text: 'No se pudo crear linea' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await pool.query('UPDATE linea set ? WHERE id = ?', [req.body, id]);
            res.status(200).json({ message: 'linea actualizada' });
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar linea' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await pool.query('DELETE FROM linea WHERE id = ?', [id]);
            res.status(200).json({ message: 'linea eliminada' });
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar linea' });
        }
    }
}

export const lineaController = new LineaController();