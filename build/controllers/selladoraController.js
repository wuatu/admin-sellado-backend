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
exports.selladoraController = void 0;
const database_1 = __importDefault(require("../database"));
class SelladoraController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const selladoras = yield database_1.default.query('SELECT * FROM selladora');
                if (selladoras.length > 0) {
                    console.log(selladoras);
                    return res.status(200).json(selladoras);
                }
                else {
                    res.status(404).json({ text: 'Sin registros' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener selladoras' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const selladora = yield database_1.default.query('SELECT * FROM selladora WHERE id = ?', [id]);
                if (selladora.length > 0) {
                    return res.status(200).json(selladora[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener selladora' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener selladora' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO selladora set ?', [req.body]);
                res.status(200).json({ message: 'selladora creada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear selladora' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE selladora set ? WHERE id = ?', [req.body, id]);
                res.status(200).json({ message: 'selladora actualizada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar selladora' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM selladora WHERE id = ?', [id]);
                res.status(200).json({ message: 'selladora eliminada' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar selladora' });
            }
        });
    }
}
exports.selladoraController = new SelladoraController();
