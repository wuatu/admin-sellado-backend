import { Request, Response } from 'express';
import pool from '../database';
class RfidSalidaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_calibrador, id_linea } = req.params;
            let rfids: any;
            if (id_calibrador != "0" && id_linea != "0") {
                rfids = await pool.query('SELECT DISTINCT rfid_salida.id, rfid_salida.nombre, rfid_salida.ip, rfid_salida.baudRate, rfid_salida.parity, rfid_salida.stopBits, rfid_salida.dataBits, rfid_salida.fk_linea FROM rfid_salida, calibrador INNER JOIN linea ON calibrador.id = linea.fk_calibrador WHERE calibrador.id = ? AND rfid_salida.fk_linea = ?', [id_calibrador, id_linea]);
            }
            if (rfids.length > 0) {
                return res.status(200).json(rfids);
            } else {
                res.status(204).json({ text: 'No existen registros de rfid salida para mostrar'});
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfid(s) de salida' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfid = await pool.query('SELECT * FROM rfid_salida WHERE id = ?', [id]);
            if (rfid.length > 0) {
                return res.status(200).json(rfid[0]);
            }else{
                res.status(204).json({ text: 'no existen registros de rfid salida para mostar' });
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfid salida' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const rfid = await pool.query('INSERT INTO rfid_salida SET ?', [req.body]);
            console.log(rfid);
            if (rfid != null) {
                console.log(rfid);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid salida creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear rfid salida' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear rfid salida' });
        }
    }

    

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfid = await pool.query('UPDATE rfid_salida SET ? WHERE id = ?', [req.body, id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'rfid salida salida actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar rfid salida' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar rfid salida' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const rfid = await pool.query('DELETE FROM rfid_salida WHERE id = ?', [id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'rfid eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar rfid salida' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar rfid salida' });
        }
    }
}

export const rfidSalidaController = new RfidSalidaController();