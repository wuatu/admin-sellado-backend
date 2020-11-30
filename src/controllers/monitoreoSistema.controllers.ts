import { Request, Response } from 'express';
import pool from '../database';
class MonitoreoSistemaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador, nombre_linea } = req.params;
            let usuariosEnLinea: any;
            console.log("try!!!!!!!!!!!!!!!!!!!!!!!");
            console.log("id linea: " + id_linea + " id calibrador: " + id_calibrador + "nombre linea: " + nombre_linea);

            if (id_calibrador != "null" && id_linea != "null") {
                console.log("backend!!!!!!!!!!!!!!!!!!!!!!!");
                usuariosEnLinea = await pool.query('SELECT id, id_usuario, nombre_usuario, apellido_usuario, nombre_linea, id_linea FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_termino = "" AND hora_termino = "" AND id_apertura_cierre_de_turno = id_apertura_cierre_de_turno = ( SELECT MAX(id) FROM apertura_cierre_de_turno )', [id_linea, id_calibrador]);
            }

            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                return res.status(200).json([{
                    id: "undefine", id_usuario: "undefine",
                    nombre_usuario: "undefine", apellido_usuario: "undefine",
                    nombre_linea: nombre_linea, id_linea: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
        }
    }

    public async getCollaboratorsInLine(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador, nombre_linea } = req.params;
            let usuariosEnLinea: any;
            console.log("try!!!!!!!!!!!!!!!!!!!!!!!");
            console.log("id linea: " + id_linea + " id calibrador: " + id_calibrador + "nombre linea: " + nombre_linea);

            if (id_calibrador != "null" && id_linea != "null") {
                console.log("backend!!!!!!!!!!!!!!!!!!!!!!!");
                usuariosEnLinea = await pool.query('SELECT  nombre_usuario, apellido_usuario, nombre_linea, id_linea FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_termino = "" AND hora_termino = "" AND id_apertura_cierre_de_turno = ( SELECT MAX(id) FROM apertura_cierre_de_turno )', [id_linea, id_calibrador]);
            }

            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                return res.status(200).json([{
                    nombre_usuario: "undefine", apellido_usuario: "undefine",
                    nombre_linea: nombre_linea, id_linea: id_linea
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
        }
    }

    public async getRfidInLine(req: Request, res: Response) {
        try {
            const { id_linea } = req.params;
            let rfidInLine: any;
            if (id_linea != "null") {
                rfidInLine = await pool.query('SELECT id AS id_rfid, nombre AS nombre_rfid, baudRate AS baudRate_rfid, fk_linea as id_linea, ip AS puerto_rfid FROM rfid WHERE fk_linea = ?', [id_linea]);
            }
            if (rfidInLine.length > 0) {
                return res.status(200).json(rfidInLine);
            } else {
                return res.status(200).json([{
                    id_rfid: "undefine", nombre_rfid: "undefine", baudRate_rfid: "undefine",
                    id_linea: id_linea, puerto_rfid: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener rfid en línea' });
        }
    }

    public async getLectorInLine(req: Request, res: Response) {
        try {
            const { id_linea } = req.params;
            let lectorInLine: any;
            if (id_linea != "null") {
                lectorInLine = await pool.query('SELECT id AS id_lector, nombre AS nombre_lector, baudRate AS baudRate_lector, fk_linea as id_linea, ip AS puerto_lector FROM lector WHERE fk_linea = ?', [id_linea]);
            }
            if (lectorInLine.length > 0) {
                return res.status(200).json(lectorInLine);
            } else {
                return res.status(200).json([{
                    id_lector: "undefine", nombre_lector: "undefine", baudRate_lector: "undefine",
                    id_linea: id_linea, puerto_lector: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener lector en línea' });
        }
    }
    //IP, waitingTime, registro_inicial(es un atributo nuevo de la tabla) último código leído
    public async getLectorValidatorInCaliper(req: Request, res: Response) {
        try {
            console.log("entre al getLectorValidatorInCaliper");
            const { id_calibrador } = req.params;
            let lectorInLine: any;
            if (id_calibrador != "null") {
                lectorInLine = await pool.query('SELECT id AS id_lector_validador, nombre AS nombre_lector_validador, max_wait_time, fk_calibrador as id_calibrador, ip AS ip_lector_validador, registro_inicial_lectura FROM lector_validador WHERE fk_calibrador = ?', [id_calibrador]);
            }
            if (lectorInLine.length > 0) {
                return res.status(200).json(lectorInLine);
            } else {
                return res.status(200).json([{
                    id_lector_validador: "undefine", nombre_lector_validador: "undefine", max_wait_time: "undefine",
                    id_calibrador: id_calibrador, ip_lector_validador: "undefine", registro_inicial_lectura: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener lector_validador en calibrador' });
        }
    }

    public async getRfidOutInCaliper(req: Request, res: Response) {
        try {
            const { id_calibrador } = req.params;
            let rfidOut: any;
            if (id_calibrador != "null") {
                rfidOut = await pool.query('SELECT id AS id_rfid_salida, nombre AS nombre_rfid_salida, baudRate AS baudRate_rfid_salida, fk_calibrador as id_calibrador, ip AS puerto_rfid_salida FROM rfid_salida WHERE fk_calibrador = ?', [id_calibrador]);
            }
            if (rfidOut.length > 0) {
                return res.status(200).json(rfidOut);
            } else {
                return res.status(200).json([{
                    id_rfid_salida: "undefine", nombre_rfid_salida: "undefine", baudRate_rfid_salida: "undefine",
                    id_calibrador: id_calibrador, puerto_rfid_salida: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener el ultimo codigo de rfid salida en el calibrador' });
        }
    }

    public async getLastRfidOutInCaliper(req: Request, res: Response) {
        try {
            const { id_calibrador } = req.params;
            const lastRfidSalidaInCaliper = await pool.query('SELECT id,codigo AS codigo_last_rfid_salida,fecha AS fecha_last_rfid_salida,hora AS hora_last_rfid_salida, fk_calibrador AS id_calibrador, fk_rfid_salida AS id_rfid_salida FROM rfid_salida_en_calibrador WHERE fk_calibrador = ? ORDER BY id DESC LIMIT 1', [id_calibrador]);
            if (lastRfidSalidaInCaliper.length > 0) {
                return res.status(200).json(lastRfidSalidaInCaliper);
            } else {
                return res.status(200).json([{
                    id: "undefine", codigo_last_rfid_salida: "undefine", fecha_last_rfid_salida: "undefine", hora_last_rfid_salida: "undefine",
                    id_linea: id_calibrador, id_rfid_salida: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener el último código de rifid salida en el calibrador' });
        }
    }

    public async getLastLectorValitatorIncaliper(req: Request, res: Response) {
        try {
            const { id_calibrador } = req.params;
            const lastLectorValidatorInCaliper = await pool.query('SELECT id,codigo AS codigo_last_lector_validador,fecha AS fecha_last_lector_validador,hora AS hora_last_lector_validador, fk_calibrador AS id_calibrador, fk_lector_validador AS id_lector_validador FROM lector_validador_en_calibrador WHERE fk_calibrador = ? ORDER BY id DESC LIMIT 1', [id_calibrador]);
            if (lastLectorValidatorInCaliper.length > 0) {
                return res.status(200).json(lastLectorValidatorInCaliper);
            } else {
                return res.status(200).json([{
                    id: "undefine", codigo_last_lector_validador: "undefine", fecha_last_lector_validador: "undefine", hora_last_lector_validador: "undefine",
                    id_calibrador: id_calibrador, id_lector_validador: "undefine"
                }]);
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener el último codigo de lector validador en el calibrador' });
        }
    }

}

export const monitoreoSistemaController = new MonitoreoSistemaController();