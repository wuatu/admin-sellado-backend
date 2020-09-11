import { Request, Response } from 'express';
import pool from '../database';
class UsuarioEnLineaController {

    public async list(req: Request, res: Response) {
        try {
            let registro_diario_usuario_en_lineas: any;

            registro_diario_usuario_en_lineas = await pool.query('SELECT * FROM registro_diario_usuario_en_linea');
            
            if (registro_diario_usuario_en_lineas.length > 0) {
                return res.status(200).json(registro_diario_usuario_en_lineas);
            } else {
                res.status(404).json({ text: 'Sin registros' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener registro_diario_usuario_en_lineas' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const registro_diario_usuario_en_linea = await pool.query('SELECT * FROM registro_diario_usuario_en_linea WHERE id = ?', [id]);
            if (registro_diario_usuario_en_linea.length > 0) {
                return res.status(200).json(registro_diario_usuario_en_linea[0]);
            }
            res.status(404).json({ text: 'No se pudo obtener registro_diario_usuario_en_linea' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener registro_diario_usuario_en_linea' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const registro_diario_usuario_en_linea = await pool.query('INSERT INTO registro_diario_usuario_en_linea set ?', [req.body]);
            
            if (registro_diario_usuario_en_linea != null) {
                console.log(registro_diario_usuario_en_linea);
                if (registro_diario_usuario_en_linea != null) {
                    if (registro_diario_usuario_en_linea.affectedRows > 0) {
                        res.status(200).json({ message: 'registro_diario_usuario_en_linea creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear registro_diario_usuario_en_linea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear registro_diario_usuario_en_linea' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const registro_diario_usuario_en_linea = await pool.query('UPDATE registro_diario_usuario_en_linea SET ? WHERE id = ?', [req.body, id]);
            if (registro_diario_usuario_en_linea != null) {
                if (registro_diario_usuario_en_linea.affectedRows > 0) {
                    res.status(200).json({ message: 'registro_diario_usuario_en_linea actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar registro_diario_usuario_en_linea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar registro_diario_usuario_en_linea' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const registro_diario_usuario_en_linea = await pool.query('DELETE FROM registro_diario_usuario_en_linea WHERE id = ?', [id]);
            if (registro_diario_usuario_en_linea != null) {
                if (registro_diario_usuario_en_linea.affectedRows > 0) {
                    res.status(200).json({ message: 'registro_diario_usuario_en_linea eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar registro_diario_usuario_en_linea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar registro_diario_usuario_en_linea' });
        }
    }
}

export const usuarioEnLineaController = new UsuarioEnLineaController();