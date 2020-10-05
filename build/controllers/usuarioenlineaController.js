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
                    res.status(404).json({ text: 'Sin registros de usuarios en linea' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuarios en linea' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
}
exports.usuarioEnLineaController = new UsuarioEnLineaController();
