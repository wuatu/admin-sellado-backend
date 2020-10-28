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
exports.lectorController = void 0;
const database_1 = __importDefault(require("../database"));
class LectorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador, id_linea } = req.params;
                let lectors;
                if (id_calibrador != "0" && id_linea != "0") {
                    lectors = yield database_1.default.query('SELECT DISTINCT lector.id,lector.nombre,lector.ip, lector.baudRate, lector.parity, lector.stopBits, lector.dataBits,lector.fk_linea FROM lector,calibrador INNER JOIN linea ON calibrador.id=linea.fk_calibrador WHERE calibrador.id= ? AND lector.fk_linea= ?', [id_calibrador, id_linea]);
                }
                if (lectors.length > 0) {
                    return res.status(200).json(lectors);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de lectores para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lector(es)' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const lector = yield database_1.default.query('SELECT * FROM lector WHERE id = ?', [id]);
                if (lector.length > 0) {
                    return res.status(200).json(lector[0]);
                }
                else {
                    res.status(204).json({ text: 'No existen registros del lector para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lector' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const lector = yield database_1.default.query('INSERT INTO lector SET ?', [req.body]);
                if (lector != null) {
                    console.log(lector);
                    if (lector != null) {
                        if (lector.affectedRows > 0) {
                            res.status(200).json({ message: 'lector creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear lector' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear lector' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const lector = yield database_1.default.query('UPDATE lector SET ? WHERE id = ?', [req.body, id]);
                if (lector != null) {
                    if (lector.affectedRows > 0) {
                        res.status(200).json({ message: 'lector actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar lector' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar lector' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const lector = yield database_1.default.query('DELETE FROM lector WHERE id = ?', [id]);
                if (lector != null) {
                    if (lector.affectedRows > 0) {
                        res.status(200).json({ message: 'lector eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar lector' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar lector' });
            }
        });
    }
}
exports.lectorController = new LectorController();
