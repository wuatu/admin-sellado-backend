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
exports.lineaController = void 0;
const database_1 = __importDefault(require("../database"));
class LineaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                let lineas;
                if (id != null) {
                    lineas = yield database_1.default.query('SELECT * FROM linea where fk_calibrador = ?', [id]);
                }
                else {
                    lineas = yield database_1.default.query('SELECT * FROM linea');
                }
                if (lineas.length > 0) {
                    return res.status(200).json(lineas);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de líneas para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lineas' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const linea = yield database_1.default.query('SELECT * FROM linea WHERE id = ?', [id]);
                if (linea.length > 0) {
                    return res.status(200).json(linea[0]);
                }
                else {
                    res.status(404).json({ text: 'No existen registros de la linea para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener linea' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO linea set ?', [req.body]);
                res.status(200).json({ message: 'linea creada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear linea' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE linea set ? WHERE id = ?', [req.body, id]);
                res.status(200).json({ message: 'linea actualizada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar linea' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM linea WHERE id = ?', [id]);
                res.status(200).json({ message: 'linea eliminada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar linea' });
            }
        });
    }
}
exports.lineaController = new LineaController();
