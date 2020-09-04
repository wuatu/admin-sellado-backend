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
exports.calibradorController = void 0;
const database_1 = __importDefault(require("../database"));
class CalibradorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calibradores = yield database_1.default.query('SELECT * FROM calibrador');
                if (calibradores.length > 0) {
                    console.log(calibradores);
                    return res.status(200).json(calibradores);
                }
                else {
                    res.status(404).json({ text: 'Sin registros' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener calibradores' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const calibrador = yield database_1.default.query('SELECT * FROM calibrador WHERE id = ?', [id]);
                if (calibrador.length > 0) {
                    return res.status(200).json(calibrador[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener calibrador' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener calibrador' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO calibrador set ?', [req.body]);
                res.status(200).json({ message: 'calibrador creada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear calibrador' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE calibrador set ? WHERE id = ?', [req.body, id]);
                res.status(200).json({ message: 'calibrador actualizada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar calibrador' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM calibrador WHERE id = ?', [id]);
                res.status(200).json({ message: 'calibrador eliminada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar calibrador' });
            }
        });
    }
}
exports.calibradorController = new CalibradorController();
