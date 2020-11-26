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
exports.rfidRegistroColaboradorController = void 0;
const database_1 = __importDefault(require("../database"));
class RfidRegistroColaboradorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rfids;
                rfids = yield database_1.default.query('SELECT * FROM rfid_registro_colaborador');
                if (rfids.length > 0) {
                    return res.status(200).json(rfids);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de rfid registro colaborador para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfids registros colaborador ' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('SELECT * FROM rfid_registro_colaborador WHERE id = ?', [id]);
                if (rfid.length > 0) {
                    return res.status(200).json(rfid[0]);
                }
                else {
                    res.status(204).json({ text: 'no existen registros de rfid registro colaborador para mostar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid registro colaborador' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const rfid = yield database_1.default.query('INSERT INTO rfid_registro_colaborador SET ?', [req.body]);
                console.log(rfid);
                if (rfid != null) {
                    console.log(rfid);
                    if (rfid != null) {
                        if (rfid.affectedRows > 0) {
                            res.status(200).json({ message: 'rfid registro colaborador creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear rfid registro colaborador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear rfid' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('UPDATE rfid_registro_colaborador SET ? WHERE id = ?', [req.body, id]);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid registro colaborador actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar rfid registro colaborador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar rfid registro colaborador' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('DELETE FROM rfid_registro_colaborador WHERE id = ?', [id]);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid registro colaborador eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar rfid registro colaborador' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar rfid registro colaborador' });
            }
        });
    }
}
exports.rfidRegistroColaboradorController = new RfidRegistroColaboradorController();
