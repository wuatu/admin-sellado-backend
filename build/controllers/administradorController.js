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
exports.administradorController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt = require('bcryptjs');
class AdministradorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const {} = req.params;
                let administradores;
                administradores = yield database_1.default.query('SELECT administrador.id, administrador.rut,administrador.nombre,administrador.apellido,administrador.superadmin FROM administrador WHERE administrador.superadmin=0');
                if (administradores.length > 0) {
                    return res.status(200).json(administradores);
                }
                else {
                    res.status(404).json({ text: 'Sin registros' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener administrador(es)' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const administrador = yield database_1.default.query('SELECT * FROM administrador WHERE id = ?', [id]);
                if (administrador.length > 0) {
                    return res.status(200).json(administrador[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener administrador' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener administrador' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    rut: req.body.rut,
                    password: bcrypt.hashSync(req.body.password)
                };
                const administrador = yield database_1.default.query('INSERT INTO administrador set ?', newUser);
                if (administrador != null) {
                    console.log(administrador);
                    if (administrador != null) {
                        if (administrador.affectedRows > 0) {
                            res.status(200).json({ message: 'administrador creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear administrador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear administrador' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const administrador = yield database_1.default.query('UPDATE administrador SET ? WHERE id = ?', [req.body, id]);
                if (administrador != null) {
                    if (administrador.affectedRows > 0) {
                        res.status(200).json({ message: 'administrador actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar administrador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar administrador' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const administrador = yield database_1.default.query('DELETE FROM administrador WHERE id = ?', [id]);
                if (administrador != null) {
                    if (administrador.affectedRows > 0) {
                        res.status(200).json({ message: 'administrador eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar administrador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar administrador' });
            }
        });
    }
}
exports.administradorController = new AdministradorController();
