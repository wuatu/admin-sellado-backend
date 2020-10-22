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
exports.lectorValidadorController = void 0;
const database_1 = __importDefault(require("../database"));
class LectorValidadorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador } = req.params;
                let lectors_validador;
                if (id_calibrador != null) {
                    lectors_validador = yield database_1.default.query('SELECT DISTINCT * FROM lector_validador WHERE fk_calibrador = ?', [id_calibrador]);
                }
                if (lectors_validador.length > 0) {
                    return res.status(200).json(lectors_validador);
                }
                else {
                    res.status(404).json({ text: 'Sin registros de lector validador' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lector(es) validador' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const lector_validador = yield database_1.default.query('SELECT * FROM lector_validador WHERE id = ?', [id]);
                if (lector_validador.length > 0) {
                    return res.status(200).json(lector_validador[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener lector validador' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener lector validador' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const lector_validador = yield database_1.default.query('INSERT INTO lector_validador SET ?', [req.body]);
                if (lector_validador != null) {
                    console.log(lector_validador);
                    if (lector_validador != null) {
                        if (lector_validador.affectedRows > 0) {
                            res.status(200).json({ message: 'lector validador creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear lector validador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear lector validador' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const lector_validador = yield database_1.default.query('UPDATE lector_validador SET ? WHERE id = ?', [req.body, id]);
                if (lector_validador != null) {
                    if (lector_validador.affectedRows > 0) {
                        res.status(200).json({ message: 'lector validador actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar lector validador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar lector validador' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const lector_validador = yield database_1.default.query('DELETE FROM lector_validador WHERE id = ?', [id]);
                if (lector_validador != null) {
                    if (lector_validador.affectedRows > 0) {
                        res.status(200).json({ message: 'lector validador eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar lector validador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar lector' });
            }
        });
    }
}
exports.lectorValidadorController = new LectorValidadorController();
