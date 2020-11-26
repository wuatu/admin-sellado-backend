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
exports.cajaController = void 0;
const database_1 = __importDefault(require("../database"));
class CajaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cajas;
                cajas = yield database_1.default.query('SELECT * FROM caja');
                if (cajas.length > 0) {
                    return res.status(200).json(cajas);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de cajas para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const caja = yield database_1.default.query('SELECT * FROM caja WHERE id = ?', [id]);
                if (caja.length > 0) {
                    return res.status(200).json(caja[0]);
                }
                res.status(204).json({ text: 'No existen registros de cajas para mostrar' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener caja' });
            }
        });
    }
    searchBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { criterio } = req.params;
                let criterio2 = criterio;
                console.log("criterio :" + criterio);
                console.log("criterio2 :" + criterio2);
                let cajas;
                cajas = yield database_1.default.query('SELECT * FROM caja WHERE codigo_envase = ? OR envase = ? ', [criterio, criterio2]);
                if (cajas.length > 0) {
                    return res.status(200).json(cajas);
                }
                res.status(204).json({ text: 'No existen registros de cajas para mostrar' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener caja' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const caja = yield database_1.default.query('INSERT INTO caja set ?', [req.body]);
                if (caja != null) {
                    console.log(caja);
                    if (caja != null) {
                        if (caja.affectedRows > 0) {
                            res.status(200).json({ message: 'caja creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear caja' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear caja' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(req.body);
                const caja = yield database_1.default.query('UPDATE caja SET ? WHERE id = ?', [req.body, id]);
                if (caja != null) {
                    if (caja.affectedRows > 0) {
                        res.status(200).json({ message: 'caja actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar caja' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar caja' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const caja = yield database_1.default.query('DELETE FROM caja WHERE id = ?', [id]);
                if (caja != null) {
                    if (caja.affectedRows > 0) {
                        res.status(200).json({ message: 'caja eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar caja' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar caja' });
            }
        });
    }
}
exports.cajaController = new CajaController();
