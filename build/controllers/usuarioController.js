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
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let usuarios;
                usuarios = yield database_1.default.query('SELECT * FROM usuario');
                if (usuarios.length > 0) {
                    return res.status(200).json(usuarios);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de usuarios para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuarios' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuario = yield database_1.default.query('SELECT * FROM usuario WHERE id = ?', [id]);
                if (usuario.length > 0) {
                    return res.status(200).json(usuario[0]);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de usuarios para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener usuario' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
                if (usuario != null) {
                    console.log(usuario);
                    if (usuario != null) {
                        if (usuario.affectedRows > 0) {
                            res.status(200).json({ message: 'usuario creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear usuario' });
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
                const usuario = yield database_1.default.query('UPDATE usuario SET ? WHERE id = ?', [req.body, id]);
                if (usuario != null) {
                    if (usuario.affectedRows > 0) {
                        res.status(200).json({ message: 'usuario actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar usuario' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar usuario' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuario = yield database_1.default.query('DELETE FROM usuario WHERE id = ?', [id]);
                if (usuario != null) {
                    if (usuario.affectedRows > 0) {
                        res.status(200).json({ message: 'usuario eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar usuario' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar usuario' });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
