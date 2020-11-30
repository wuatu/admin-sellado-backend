"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoreoSistemaController = void 0;
const database_1 = __importDefault(require("../database"));
class MonitoreoSistemaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea, id_calibrador, nombre_linea } = req.params;
                let usuariosEnLinea;
                console.log("try!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("id linea: " + id_linea + " id calibrador: " + id_calibrador + "nombre linea: " + nombre_linea);
                if (id_calibrador != "null" && id_linea != "null") {
                    console.log("backend!!!!!!!!!!!!!!!!!!!!!!!");
                    usuariosEnLinea = yield database_1.default.query('SELECT id, id_usuario, nombre_usuario, apellido_usuario, nombre_linea, id_linea FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_termino = "" AND hora_termino = "" AND id_apertura_cierre_de_turno = id_apertura_cierre_de_turno = ( SELECT MAX(id) FROM apertura_cierre_de_turno )', [id_linea, id_calibrador]);
                }
                if (usuariosEnLinea.length > 0) {
                    return res.status(200).json(usuariosEnLinea);
                }
                else {
                    return res.status(200).json([{
                            id: "undefine", id_usuario: "undefine",
                            nombre_usuario: "undefine", apellido_usuario: "undefine",
                            nombre_linea: nombre_linea, id_linea: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
            }
        });
    }
    getCollaboratorsInLine(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea, id_calibrador, nombre_linea } = req.params;
                let usuariosEnLinea;
                console.log("try!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("id linea: " + id_linea + " id calibrador: " + id_calibrador + "nombre linea: " + nombre_linea);
                if (id_calibrador != "null" && id_linea != "null") {
                    console.log("backend!!!!!!!!!!!!!!!!!!!!!!!");
                    usuariosEnLinea = yield database_1.default.query('SELECT  nombre_usuario, apellido_usuario, nombre_linea, id_linea FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_termino = "" AND hora_termino = "" AND id_apertura_cierre_de_turno = ( SELECT MAX(id) FROM apertura_cierre_de_turno )', [id_linea, id_calibrador]);
                }
                if (usuariosEnLinea.length > 0) {
                    return res.status(200).json(usuariosEnLinea);
                }
                else {
                    return res.status(200).json([{
                            nombre_usuario: "undefine", apellido_usuario: "undefine",
                            nombre_linea: nombre_linea, id_linea: id_linea
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
            }
        });
    }
    getRfidInLine(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea } = req.params;
                let rfidInLine;
                if (id_linea != "null") {
                    rfidInLine = yield database_1.default.query('SELECT id AS id_rfid, nombre AS nombre_rfid, baudRate AS baudRate_rfid, fk_linea as id_linea, ip AS puerto_rfid FROM rfid WHERE fk_linea = ?', [id_linea]);
                }
                if (rfidInLine.length > 0) {
                    return res.status(200).json(rfidInLine);
                }
                else {
                    return res.status(200).json([{
                            id_rfid: "undefine", nombre_rfid: "undefine", baudRate_rfid: "undefine",
                            id_linea: id_linea, puerto_rfid: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid en línea' });
            }
        });
    }
    getLectorInLine(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea } = req.params;
                let lectorInLine;
                if (id_linea != "null") {
                    lectorInLine = yield database_1.default.query('SELECT id AS id_lector, nombre AS nombre_lector, baudRate AS baudRate_lector, fk_linea as id_linea, ip AS puerto_lector FROM lector WHERE fk_linea = ?', [id_linea]);
                }
                if (lectorInLine.length > 0) {
                    return res.status(200).json(lectorInLine);
                }
                else {
                    return res.status(200).json([{
                            id_lector: "undefine", nombre_lector: "undefine", baudRate_lector: "undefine",
                            id_linea: id_linea, puerto_lector: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lector en línea' });
            }
        });
    }
    //IP, waitingTime, registro_inicial(es un atributo nuevo de la tabla) último código leído
    getLectorValidatorInCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("entre al getLectorValidatorInCaliper");
                const { id_calibrador } = req.params;
                let lectorInLine;
                if (id_calibrador != "null") {
                    lectorInLine = yield database_1.default.query('SELECT id AS id_lector_validador, nombre AS nombre_lector_validador, max_wait_time, fk_calibrador as id_calibrador, ip AS ip_lector_validador, registro_inicial_lectura FROM lector_validador WHERE fk_calibrador = ?', [id_calibrador]);
                }
                if (lectorInLine.length > 0) {
                    return res.status(200).json(lectorInLine);
                }
                else {
                    return res.status(200).json([{
                            id_lector_validador: "undefine", nombre_lector_validador: "undefine", max_wait_time: "undefine",
                            id_calibrador: id_calibrador, ip_lector_validador: "undefine", registro_inicial_lectura: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lector_validador en calibrador' });
            }
        });
    }
    getRfidOutInCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador } = req.params;
                let rfidOut;
                if (id_calibrador != "null") {
                    rfidOut = yield database_1.default.query('SELECT id AS id_rfid_salida, nombre AS nombre_rfid_salida, baudRate AS baudRate_rfid_salida, fk_calibrador as id_calibrador, ip AS puerto_rfid_salida FROM rfid_salida WHERE fk_calibrador = ?', [id_calibrador]);
                }
                if (rfidOut.length > 0) {
                    return res.status(200).json(rfidOut);
                }
                else {
                    return res.status(200).json([{
                            id_rfid_salida: "undefine", nombre_rfid_salida: "undefine", baudRate_rfid_salida: "undefine",
                            id_calibrador: id_calibrador, puerto_rfid_salida: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener el ultimo codigo de rfid salida en el calibrador' });
            }
        });
    }
    getLastRfidOutInCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador } = req.params;
                const lastRfidSalidaInCaliper = yield database_1.default.query('SELECT id,codigo AS codigo_last_rfid_salida,fecha AS fecha_last_rfid_salida,hora AS hora_last_rfid_salida, fk_calibrador AS id_calibrador, fk_rfid_salida AS id_rfid_salida FROM rfid_salida_en_calibrador WHERE fk_calibrador = ? ORDER BY id DESC LIMIT 1', [id_calibrador]);
                if (lastRfidSalidaInCaliper.length > 0) {
                    return res.status(200).json(lastRfidSalidaInCaliper);
                }
                else {
                    return res.status(200).json([{
                            id: "undefine", codigo_last_rfid_salida: "undefine", fecha_last_rfid_salida: "undefine", hora_last_rfid_salida: "undefine",
                            id_linea: id_calibrador, id_rfid_salida: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener el último código de rifid salida en el calibrador' });
            }
        });
    }
    getLastLectorValitatorIncaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador } = req.params;
                const lastLectorValidatorInCaliper = yield database_1.default.query('SELECT id,codigo AS codigo_last_lector_validador,fecha AS fecha_last_lector_validador,hora AS hora_last_lector_validador, fk_calibrador AS id_calibrador, fk_lector_validador AS id_lector_validador FROM lector_validador_en_calibrador WHERE fk_calibrador = ? ORDER BY id DESC LIMIT 1', [id_calibrador]);
                if (lastLectorValidatorInCaliper.length > 0) {
                    return res.status(200).json(lastLectorValidatorInCaliper);
                }
                else {
                    return res.status(200).json([{
                            id: "undefine", codigo_last_lector_validador: "undefine", fecha_last_lector_validador: "undefine", hora_last_lector_validador: "undefine",
                            id_calibrador: id_calibrador, id_lector_validador: "undefine"
                        }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener el último codigo de lector validador en el calibrador' });
            }
        });
    }
}
exports.monitoreoSistemaController = new MonitoreoSistemaController();
