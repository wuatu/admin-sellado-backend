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
                let registro_diario_usuario_en_lineas;
                registro_diario_usuario_en_lineas = yield database_1.default.query('SELECT * FROM registro_diario_usuario_en_linea');
                if (registro_diario_usuario_en_lineas.length > 0) {
                    return res.status(200).json(registro_diario_usuario_en_lineas);
                }
                else {
                    res.status(404).json({ text: 'Sin registros' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener registro_diario_usuario_en_lineas' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const registro_diario_usuario_en_linea = yield database_1.default.query('SELECT * FROM registro_diario_usuario_en_linea WHERE id = ?', [id]);
                if (registro_diario_usuario_en_linea.length > 0) {
                    return res.status(200).json(registro_diario_usuario_en_linea[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener registro_diario_usuario_en_linea' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener registro_diario_usuario_en_linea' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const registro_diario_usuario_en_linea = yield database_1.default.query('INSERT INTO registro_diario_usuario_en_linea set ?', [req.body]);
                if (registro_diario_usuario_en_linea != null) {
                    console.log(registro_diario_usuario_en_linea);
                    if (registro_diario_usuario_en_linea != null) {
                        if (registro_diario_usuario_en_linea.affectedRows > 0) {
                            res.status(200).json({ message: 'registro_diario_usuario_en_linea creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear registro_diario_usuario_en_linea' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear registro_diario_usuario_en_linea' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const registro_diario_usuario_en_linea = yield database_1.default.query('UPDATE registro_diario_usuario_en_linea SET ? WHERE id = ?', [req.body, id]);
                if (registro_diario_usuario_en_linea != null) {
                    if (registro_diario_usuario_en_linea.affectedRows > 0) {
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const registro_diario_usuario_en_linea = yield database_1.default.query('DELETE FROM registro_diario_usuario_en_linea WHERE id = ?', [id]);
                if (registro_diario_usuario_en_linea != null) {
                    if (registro_diario_usuario_en_linea.affectedRows > 0) {
                        res.status(200).json({ message: 'registro_diario_usuario_en_linea eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar registro_diario_usuario_en_linea' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar registro_diario_usuario_en_linea' });
            }
        });
    }
}
exports.usuarioEnLineaController = new UsuarioEnLineaController();
