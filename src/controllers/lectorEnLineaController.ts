import { Request, Response } from 'express';
import pool from '../database';
class LectorEnLineaController {

    public async getLastLectorInLine(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const lectorInLine = await pool.query('SELECT id, codigo, fecha, hora, fk_linea AS id_linea, fk_lector AS id_lector FROM lector_en_linea WHERE fk_linea = ? ORDER BY id DESC LIMIT 1', [id]);
            if (lectorInLine.length > 0) {
                return res.status(200).json(lectorInLine);
            }else{
                return res.status(200).json([{id:"undefine", codigo: "undefine", fecha: "undefine", hora: "undefine",
                    id_linea: id, id_lector:"undefine"}]);
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener lector en linea' });
        }
    }

}

export const lectorEnLineaController = new LectorEnLineaController();