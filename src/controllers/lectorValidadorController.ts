import { Request, Response } from 'express';
import pool from '../database';
class LectorValidadorController {

    public async list(req: Request, res: Response) {
        try { 
               
            const { id_calibrador } = req.params;
            let lectors_validador: any;
            if (id_calibrador !=null ) {
                lectors_validador = await pool.query('SELECT DISTINCT * FROM lector_validador WHERE fk_calibrador = ?', [id_calibrador]);
            }
            if (lectors_validador.length > 0) {
                return res.status(200).json(lectors_validador);
            } else {
                res.status(204).json({ text: 'No existen registros de lector validador para mostrar' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener lector(es) validador' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const lector_validador = await pool.query('SELECT * FROM lector_validador WHERE id = ?', [id]);
            if (lector_validador.length > 0) {
                return res.status(200).json(lector_validador[0]);
            }else{
                res.status(204).json({ text: 'No existen registros de lector validador para mostar' });
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener lector validador' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {

            console.log(req.body);
            const lector_validador = await pool.query('INSERT INTO lector_validador SET ?', [req.body]);
            if (lector_validador != null) {
                console.log(lector_validador);
                if (lector_validador != null) {
                    if (lector_validador.affectedRows > 0) {
                        res.status(200).json({ message: 'lector validador creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear lector validador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear lector validador' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const lector_validador = await pool.query('UPDATE lector_validador SET ? WHERE id = ?', [req.body, id]);
            if (lector_validador != null) {
                if (lector_validador.affectedRows > 0) {
                    res.status(200).json({ message: 'lector validador actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar lector validador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar lector validador' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const lector_validador = await pool.query('DELETE FROM lector_validador WHERE id = ?', [id]);
            if (lector_validador != null) {
                if (lector_validador.affectedRows > 0) {
                    res.status(200).json({ message: 'lector validador eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar lector validador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar lector' });
        }
    }
}

export const lectorValidadorController = new LectorValidadorController();