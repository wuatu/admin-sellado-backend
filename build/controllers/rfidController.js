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
exports.rfidController = void 0;
const database_1 = __importDefault(require("../database"));
class RfidController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador, id_linea } = req.params;
                let rfids;
                if (id_calibrador != "0" && id_linea != "0") {
                    rfids = yield database_1.default.query('SELECT DISTINCT rfid.id,rfid.nombre,rfid.ip,rfid.fk_linea FROM rfid,calibrador INNER JOIN linea ON calibrador.id=linea.fk_calibrador WHERE calibrador.id= ? AND rfid.fk_linea= ?', [id_calibrador, id_linea]);
                }
                if (rfids.length > 0) {
                    return res.status(200).json(rfids);
                }
                else {
                    res.status(404).json({ text: 'Sin registros' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid(s)' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('SELECT * FROM rfid WHERE id = ?', [id]);
                if (rfid.length > 0) {
                    return res.status(200).json(rfid[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener rfid' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rfid = yield database_1.default.query('INSERT INTO rfid set ?', [req.body]);
                if (rfid != null) {
                    console.log(rfid);
                    if (rfid != null) {
                        if (rfid.affectedRows > 0) {
                            res.status(200).json({ message: 'rfid creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear rfid' });
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
                const rfid = yield database_1.default.query('UPDATE rfid SET ? WHERE id = ?', [req.body, id]);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar rfid' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar rfid' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('DELETE FROM rfid WHERE id = ?', [id]);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar rfid' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar rfid' });
            }
        });
    }
}
exports.rfidController = new RfidController();
