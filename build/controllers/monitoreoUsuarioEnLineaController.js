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
exports.monitoreoUsuarioEnLineaController = void 0;
const database_1 = __importDefault(require("../database"));
class MonitoreoUsuarioEnLineaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea, id_calibrador, id_turno, nombre_linea } = req.params;
                let usuariosEnLinea;
                console.log("try!!!!!!!!!!!!!!!!!!!!!!!");
                console.log("id linea: " + id_linea + " id calibrador: " + id_calibrador + " id_turno: " + id_turno + "nombre linea: " + nombre_linea);
                if (id_calibrador != "null" && id_linea != "null" && id_turno != "null") {
                    console.log("backend!!!!!!!!!!!!!!!!!!!!!!!");
                    usuariosEnLinea = yield database_1.default.query('SELECT id, id_usuario, nombre_usuario, apellido_usuario, nombre_linea, id_linea FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_termino = "" AND hora_termino = "" AND id_apertura_cierre_de_turno = ?', [id_linea, id_calibrador, id_turno]);
                }
                if (usuariosEnLinea.length > 0) {
                    return res.status(200).json(usuariosEnLinea);
                }
                else {
                    return res.status(200).json([{ id: "undefine", id_usuario: "undefine",
                            nombre_usuario: "undefine", apellido_usuario: "undefine",
                            nombre_linea: nombre_linea, id_linea: "undefine" }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
            }
        });
    }
    closeTurnCollaborators(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("closeTurnCollaborators1");
            try {
                const { id_turno, id_usuario, id_linea, fecha_termino, hora_termino } = req.params;
                const respuesta = yield database_1.default.query("UPDATE registro_diario_usuario_en_linea SET fecha_termino = ?, hora_termino = ? WHERE id_apertura_cierre_de_turno = ? AND id_usuario = ? AND id_linea = ? AND fecha_termino = '' AND hora_termino = '' ", [fecha_termino, hora_termino, id_turno, id_usuario, id_linea, fecha_termino, hora_termino]);
                if (respuesta != null) {
                    if (respuesta.affectedRows > 0) {
                        res.status(200).json({ message: 'Turno cerrado correctamente a colaborador' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo cerrar correctamente el turno al colaborador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo cerrar correctamente el turno a los colaboradores' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuarioEnLinea = yield database_1.default.query('UPDATE registro_diario_usuario_en_linea SET ? WHERE id = ?', [req.body, id]);
                if (usuarioEnLinea != null) {
                    if (usuarioEnLinea.affectedRows > 0) {
                        res.status(200).json({ message: 'registro_diario_usuario_en_linea actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar registro_diario_usuario_en_linea' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar registro_diario_usuario_en_linea' });
            }
        });
    }
}
exports.monitoreoUsuarioEnLineaController = new MonitoreoUsuarioEnLineaController();
