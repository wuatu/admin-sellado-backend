import { Request, Response } from 'express';
import pool from '../database';
class RfidRegistroColaboradorController {

    public async list(req: Request, res: Response) {
        try {
            let rfids: any;
            rfids = await pool.query('SELECT * FROM rfid_registro_colaborador');
            if (rfids.length > 0) {
                return res.status(200).json(rfids);
            } else {
                res.status(204).json({ text: 'No existen registros de rfid registro colaborador para mostrar'});
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfids registros colaborador ' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfid = await pool.query('SELECT * FROM rfid_registro_colaborador WHERE id = ?', [id]);
            if (rfid.length > 0) {
                return res.status(200).json(rfid[0]);
            }else{
                res.status(204).json({ text: 'no existen registros de rfid registro colaborador para mostar' });
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfid registro colaborador' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const rfid = await pool.query('INSERT INTO rfid_registro_colaborador SET ?', [req.body]);
            console.log(rfid);
            if (rfid != null) {
                console.log(rfid);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid registro colaborador creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear rfid registro colaborador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear rfid' });
        }
    }


    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfid = await pool.query('UPDATE rfid_registro_colaborador SET ? WHERE id = ?', [req.body, id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'rfid registro colaborador actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar rfid registro colaborador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar rfid registro colaborador' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const rfid = await pool.query('DELETE FROM rfid_registro_colaborador WHERE id = ?', [id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'rfid registro colaborador eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar rfid registro colaborador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar rfid registro colaborador' });
        }
    }
}

export const rfidRegistroColaboradorController = new RfidRegistroColaboradorController();