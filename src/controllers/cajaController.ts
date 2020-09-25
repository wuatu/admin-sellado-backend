import { Request, Response } from 'express';
import pool from '../database';
class CajaController {

    public async list(req: Request, res: Response) {
        try {
            let cajas: any;

            cajas = await pool.query('SELECT * FROM caja');
            
            if (cajas.length > 0) {
                return res.status(200).json(cajas);
            } else {
                res.status(404).json({ text: 'Sin registros' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const caja = await pool.query('SELECT * FROM caja WHERE id = ?', [id]);
            if (caja.length > 0) {
                return res.status(200).json(caja[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener caja' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener caja' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const caja = await pool.query('INSERT INTO caja set ?', [req.body]);
            if (caja != null) {
                console.log(caja);
                if (caja != null) {
                    if (caja.affectedRows > 0) {
                        res.status(200).json({ message: 'caja creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear caja' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear caja' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            console.log(req.body);
            const caja = await pool.query('UPDATE caja SET ? WHERE id = ?', [req.body, id]);
            if (caja != null) {
                if (caja.affectedRows > 0) {
                    res.status(200).json({ message: 'caja actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar caja' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar caja' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const caja = await pool.query('DELETE FROM caja WHERE id = ?', [id]);
            if (caja != null) {
                if (caja.affectedRows > 0) {
                    res.status(200).json({ message: 'caja eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar caja' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar caja' });
        }
    }
}

export const cajaController = new CajaController();