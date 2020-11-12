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
exports.usuarioEnLineaController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioEnLineaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea, id_calibrador, rutSearch, fromDateSearch, toDateSearch } = req.params;
                let usuariosEnLinea;
                console.log("id linea: " + id_linea + " id calibrador: " + id_calibrador + " rutSearch: " + rutSearch + " fromDateSearch: " + fromDateSearch + " toDateSearch: " + toDateSearch);
                if (id_calibrador != "null" && id_linea != "null" && rutSearch == "null" && fromDateSearch == "null" && toDateSearch == "null") {
                    usuariosEnLinea = yield database_1.default.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ?', [id_linea, id_calibrador]);
                }
                else if (id_calibrador != "null" && id_linea != "null" && rutSearch == "null" && fromDateSearch != "null" && toDateSearch == "null") {
                    usuariosEnLinea = yield database_1.default.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND fecha_inicio like ?', [id_linea, id_calibrador, fromDateSearch]);
                }
                else if (id_calibrador != "null" && id_linea != "null" && rutSearch != "null" && fromDateSearch == "null" && toDateSearch == "null") {
                    usuariosEnLinea = yield database_1.default.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND usuario_rut = ?', [id_linea, id_calibrador, rutSearch]);
                }
                else if (id_calibrador != "null" && id_linea != "null" && rutSearch == "null" && fromDateSearch != "null" && toDateSearch != "null") {
                    usuariosEnLinea = yield database_1.default.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND (fecha_inicio BETWEEN ? AND ?)', [id_linea, id_calibrador, fromDateSearch, toDateSearch]);
                }
                else if (id_calibrador != "null" && id_linea != "null" && rutSearch != "null" && fromDateSearch != "null" && toDateSearch == "null") {
                    usuariosEnLinea = yield database_1.default.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND usuario_rut = ? AND fecha_inicio like ?', [id_linea, id_calibrador, rutSearch, fromDateSearch]);
                }
                else if (id_calibrador != "null" && id_linea != "null" && rutSearch != "null" && fromDateSearch != "null" && toDateSearch != "null") {
                    usuariosEnLinea = yield database_1.default.query(' SELECT * FROM registro_diario_usuario_en_linea WHERE id_linea = ? AND id_calibrador = ? AND usuario_rut = ? AND (fecha_inicio BETWEEN ? AND ?)', [id_linea, id_calibrador, rutSearch, fromDateSearch, toDateSearch]);
                }
                if (usuariosEnLinea.length > 0) {
                    return res.status(200).json(usuariosEnLinea);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de usuarios en línea para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuarios en línea' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("USUARIO EN LINEA");
                console.log(req.body);
                const usuarioEnLinea = yield database_1.default.query('INSERT INTO registro_diario_usuario_en_linea set ?', [req.body]);
                if (usuarioEnLinea != null) {
                    console.log(usuarioEnLinea);
                    if (usuarioEnLinea != null) {
                        if (usuarioEnLinea.affectedRows > 0) {
                            res.status(200).json({ message: 'usuario en línea creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear usuario en línea' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear usuario' });
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
    validateCollaborator(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_turno, id_usuario, id_linea } = req.params;
                console.log("validateCollaborator!!!!!!  " + id_turno + id_usuario);
                const validacion = yield database_1.default.query("SELECT COUNT(registro_diario_usuario_en_linea.id) AS enTurno FROM registro_diario_usuario_en_linea WHERE id_apertura_cierre_de_turno = ? AND id_usuario = ? AND id_linea = ? AND fecha_termino = '' AND hora_termino = ''", [id_turno, id_usuario, id_linea]);
                if (validacion != null) {
                    console.log("ENTRE AL IF DIFERENTE DE NULL");
                    console.log("VALIDACION : " + validacion[0].enTurno);
                    if (validacion[0].enTurno >= 0) {
                        console.log("entre al if ");
                        return res.status(200).json(validacion);
                    }
                    else {
                        console.log("entre al else ");
                        res.status(404).json({ text: 'No se pudo realizar la validación' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la validación' });
            }
        });
    }
    closeTurnCollaborators(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("closeTurnCollaborators1");
            try {
                const { id_turno, id_usuario, id_linea, fecha_termino, hora_termino } = req.params;
                console.log("closeTurnCollaborators2");
                const respuesta = yield database_1.default.query("UPDATE registro_diario_usuario_en_linea SET fecha_termino = ?, hora_termino = ? WHERE id_apertura_cierre_de_turno = ? AND id_usuario = ? AND id_linea != ? AND fecha_termino = '' AND hora_termino = '' ", [fecha_termino, hora_termino, id_turno, id_usuario, id_linea, fecha_termino, hora_termino]);
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
}
exports.usuarioEnLineaController = new UsuarioEnLineaController();
