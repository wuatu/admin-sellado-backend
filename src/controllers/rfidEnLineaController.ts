import { Request, Response } from 'express';
import pool from '../database';
class RfidEnLineaController {
    public async getLastRfidInLine(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const rfidInLine = await pool.query('SELECT id, codigo, fecha, hora, fk_linea AS id_linea, fk_rfid AS id_rfid FROM rfid_en_linea WHERE fk_linea = ? ORDER BY id DESC LIMIT 1', [id]);
            if (rfidInLine.length > 0) {
                return res.status(200).json(rfidInLine);
            }else{
                return res.status(200).json([{id:"undefine", codigo: "undefine", fecha: "undefine", hora: "undefine",
                    id_linea: id, id_rfid:"undefine"}]);
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener rfid en linea' });
        }
    }
}
export const rfidEnLineaController = new RfidEnLineaController();