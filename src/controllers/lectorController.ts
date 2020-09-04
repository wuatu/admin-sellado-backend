import { Request, Response } from 'express';
import pool from '../database';
class LectorController {

    public async list(req: Request, res: Response) {
        try {    
            const { id_calibrador, id_linea } = req.params;
            let lectors: any;
            if (id_calibrador != "0" && id_linea != "0") {
                lectors = await pool.query('SELECT DISTINCT lector.id,lector.nombre,lector.ip,lector.fk_linea FROM lector,calibrador INNER JOIN linea ON calibrador.id=linea.fk_calibrador WHERE calibrador.id= ? AND lector.fk_linea= ?', [id_calibrador, id_linea]);
            }
            if (lectors.length > 0) {
                return res.status(200).json(lectors);
            } else {
                res.status(404).json({ text: 'Sin registros' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener lector(es)' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const lector = await pool.query('SELECT * FROM lector WHERE id = ?', [id]);
            if (lector.length > 0) {
                return res.status(200).json(lector[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener lector' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener lector' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const lector = await pool.query('INSERT INTO lector set ?', [req.body]);
            if (lector != null) {
                console.log(lector);
                if (lector != null) {
                    if (lector.affectedRows > 0) {
                        res.status(200).json({ message: 'lector creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear lector' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear lector' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const lector = await pool.query('UPDATE lector SET ? WHERE id = ?', [req.body, id]);
            if (lector != null) {
                if (lector.affectedRows > 0) {
                    res.status(200).json({ message: 'lector actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar lector' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar lector' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const lector = await pool.query('DELETE FROM lector WHERE id = ?', [id]);
            if (lector != null) {
                if (lector.affectedRows > 0) {
                    res.status(200).json({ message: 'lector eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar lector' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar lector' });
        }
    }
}

export const lectorController = new LectorController();