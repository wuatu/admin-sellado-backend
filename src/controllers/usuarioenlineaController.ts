import { Request, Response } from 'express';
import pool from '../database';
class UsuarioEnLineaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador, rutSearch, fromDateSearch, toDateSearch } = req.params;
            let usuariosEnLinea: any;
            
            if (id_calibrador != "null" && id_linea != "null" && rutSearch == "null" && fromDateSearch == "null" && toDateSearch == "null") {
               
                usuariosEnLinea = await pool.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ?', [id_linea, id_calibrador]);
            }else if (id_calibrador != "null" && id_linea != "null" && rutSearch == "null" && fromDateSearch !="null" && toDateSearch == "null") {
                
                usuariosEnLinea = await pool.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_inicio like ?', [id_linea, id_calibrador, fromDateSearch]);
            }else if (id_calibrador != "null" && id_linea != "null" && rutSearch != "null" && fromDateSearch =="null" && toDateSearch == "null") {
                
                usuariosEnLinea = await pool.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND usuario_rut = ?', [id_linea, id_calibrador, rutSearch]);
            }else if (id_calibrador != "null" && id_linea != "null" && rutSearch == "null" && fromDateSearch  !="null" && toDateSearch  !="null") {
                
                usuariosEnLinea = await pool.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND (fecha_inicio BETWEEN ? AND ?)', [id_linea, id_calibrador, fromDateSearch , toDateSearch]);
            }
            else if (id_calibrador != "null" && id_linea != "null" && rutSearch  !="null" && fromDateSearch  !="null" && toDateSearch == "null") {
               
                usuariosEnLinea = await pool.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND usuario_rut = ? AND fecha_inicio like ?', [id_linea, id_calibrador, rutSearch, fromDateSearch]);
            }
            else if (id_calibrador != "null" && id_linea != "null" && rutSearch != "null" && fromDateSearch != "null" && toDateSearch != "null") {
                
                usuariosEnLinea = await pool.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND usuario_rut = ? AND (fecha_inicio BETWEEN ? AND ?)', [id_linea, id_calibrador, rutSearch, fromDateSearch, toDateSearch]);
            }

            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                res.status(404).json({ text: 'Sin registros de usuarios en linea' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuarios en linea' });
        }
    }


    public async create(req: Request, res: Response) {
        try {            
            const usuarioEnLinea = await pool.query('INSERT INTO registro_diario_usuario_en_linea set ?', [req.body]);
            if (usuarioEnLinea != null) {
                console.log(usuarioEnLinea);
                if (usuarioEnLinea != null) {
                    if (usuarioEnLinea.affectedRows > 0) {
                        res.status(200).json({ message: 'usuario en línea creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear usuario en línea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear usuario' });
        }
    }

    
    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioEnLinea = await pool.query('UPDATE registro_diario_usuario_en_linea SET ? WHERE id = ?', [req.body, id]);
            if (usuarioEnLinea != null) {
                if (usuarioEnLinea.affectedRows > 0) {
                    res.status(200).json({ message: 'registro_diario_usuario_en_linea actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar registro_diario_usuario_en_linea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar registro_diario_usuario_en_linea' });
        }
    }


}

export const usuarioEnLineaController = new UsuarioEnLineaController();