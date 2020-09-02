import { Request, Response } from 'express';
import pool from '../database';
class RfidController {

    public async list(req: Request, res: Response) {
        try {
            const { id_selladora, id_linea } = req.params;
            let rfids: any;
            if (id_selladora != "0" && id_linea != "0") {
                rfids = await pool.query('SELECT DISTINCT rfid.id,rfid.nombre,rfid.ip,rfid.fk_linea FROM rfid,selladora INNER JOIN linea ON selladora.id=linea.fk_selladora WHERE selladora.id= ? AND rfid.fk_linea= ?', [id_selladora, id_linea]);
            }
            if (rfids.length > 0) {
                return res.status(200).json(rfids);
            } else {
                res.status(404).json({ text: 'Sin registros' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfid(s)' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfid = await pool.query('SELECT * FROM rfid WHERE id = ?', [id]);
            if (rfid.length > 0) {
                return res.status(200).json(rfid[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener rfid' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfid' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const rfid = await pool.query('INSERT INTO rfid set ?', [req.body]);
            if (rfid != null) {
                console.log(rfid);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear rfid' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear rfid' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfid = await pool.query('UPDATE rfid SET ? WHERE id = ?', [req.body, id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'rfid actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar rfid' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar rfid' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const rfid = await pool.query('DELETE FROM rfid WHERE id = ?', [id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'rfid eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar rfid' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar rfid' });
        }
    }
}

export const rfidController = new RfidController();