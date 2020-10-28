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
                res.status(204).json({ text: 'No existen registros de usuarios en línea para mostrar'});
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
        }
    }


    public async create(req: Request, res: Response) {
        try { 
            console.log("USUARIO EN LINEA") ; 
            console.log(req.body);         
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

    public async validateCollaborator(req: Request, res: Response) {
        try {
            const { id_turno, id_usuario, id_linea } = req.params;
            console.log("validateCollaborator!!!!!!  " + id_turno + id_usuario);
            const validacion = await pool.query("SELECT COUNT(registro_diario_usuario_en_linea.id) AS enTurno FROM registro_diario_usuario_en_linea WHERE id_apertura_cierre_de_turno = ? AND id_usuario = ? AND id_linea = ? AND fecha_termino = '' AND hora_termino = ''", [id_turno, id_usuario, id_linea]);
            if (validacion != null) {
                console.log("ENTRE AL IF DIFERENTE DE NULL");
                console.log("VALIDACION : "+ validacion[0].enTurno);
                if (validacion[0].enTurno >= 0) {
                    console.log("entre al if ");
                    return res.status(200).json(validacion);
                } else {
                    console.log("entre al else ");
                    res.status(404).json({ text: 'No se pudo realizar la validación' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la validación' });
        }
    }
    public async closeTurnCollaborators(req: Request, res: Response){
        console.log("closeTurnCollaborators1");
        try {
            const {id_turno, id_usuario, id_linea, fecha_termino, hora_termino } = req.params;
            console.log("closeTurnCollaborators2");
            const respuesta = await pool.query("UPDATE registro_diario_usuario_en_linea SET fecha_termino = ?, hora_termino = ? WHERE id_apertura_cierre_de_turno = ? AND id_usuario = ? AND id_linea != ? AND fecha_termino = '' AND hora_termino = '' ", [fecha_termino, hora_termino, id_turno, id_usuario, id_linea, fecha_termino, hora_termino]);
            if (respuesta != null) {
                if (respuesta.affectedRows > 0) {
                    res.status(200).json({ message: 'Turno cerrado correctamente a colaborador' });
                } else {
                    res.status(404).json({ text: 'No se pudo cerrar correctamente el turno al colaborador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo cerrar correctamente el turno a los colaboradores'  });
        }
    }
}

export const usuarioEnLineaController = new UsuarioEnLineaController();