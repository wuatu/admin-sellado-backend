import { Request, Response } from 'express';
import pool from '../database';
class MonitoreoUsuarioEnLineaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador, id_turno, nombre_linea} = req.params;
            let usuariosEnLinea: any;
            console.log("try!!!!!!!!!!!!!!!!!!!!!!!");
            console.log("id linea: "+ id_linea+ " id calibrador: "+id_calibrador+ " id_turno: "+id_turno+ "nombre linea: "+ nombre_linea);
            
            if (id_calibrador != "null" && id_linea != "null" && id_turno != "null") {
                console.log("backend!!!!!!!!!!!!!!!!!!!!!!!");
                usuariosEnLinea = await pool.query('SELECT id, id_usuario, nombre_usuario, apellido_usuario, nombre_linea, id_linea FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_termino = "" AND hora_termino = "" AND id_apertura_cierre_de_turno = ?', [id_linea, id_calibrador,id_turno]);
            }

            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                return res.status(200).json([{id: "undefine", id_usuario: "undefine", 
                    nombre_usuario: "undefine", apellido_usuario: "undefine",
                    nombre_linea: nombre_linea, id_linea: "undefine"}]);
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
        }
    }

    public async closeTurnCollaborators(req: Request, res: Response){
        console.log("closeTurnCollaborators1");
        try {
            const {id_turno, id_usuario, id_linea, fecha_termino, hora_termino } = req.params;
            
            const respuesta = await pool.query("UPDATE registro_diario_usuario_en_linea SET fecha_termino = ?, hora_termino = ? WHERE id_apertura_cierre_de_turno = ? AND id_usuario = ? AND id_linea = ? AND fecha_termino = '' AND hora_termino = '' ", [fecha_termino, hora_termino, id_turno, id_usuario, id_linea, fecha_termino, hora_termino]);
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

export const monitoreoUsuarioEnLineaController = new MonitoreoUsuarioEnLineaController();