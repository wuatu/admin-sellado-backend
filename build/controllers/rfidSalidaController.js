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
exports.rfidSalidaController = void 0;
const database_1 = __importDefault(require("../database"));
class RfidSalidaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador, id_linea } = req.params;
                let rfids;
                if (id_calibrador != "0" && id_linea != "0") {
                    rfids = yield database_1.default.query('SELECT DISTINCT rfid_salida.id, rfid_salida.nombre, rfid_salida.ip, rfid_salida.baudRate, rfid_salida.parity, rfid_salida.stopBits, rfid_salida.dataBits, rfid_salida.fk_linea FROM rfid_salida, calibrador INNER JOIN linea ON calibrador.id = linea.fk_calibrador WHERE calibrador.id = ? AND rfid_salida.fk_linea = ?', [id_calibrador, id_linea]);
                }
                if (rfids.length > 0) {
                    return res.status(200).json(rfids);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de rfid salida para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid(s) de salida' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('SELECT * FROM rfid_salida WHERE id = ?', [id]);
                if (rfid.length > 0) {
                    return res.status(200).json(rfid[0]);
                }
                else {
                    res.status(204).json({ text: 'no existen registros de rfid salida para mostar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid salida' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const rfid = yield database_1.default.query('INSERT INTO rfid_salida SET ?', [req.body]);
                console.log(rfid);
                if (rfid != null) {
                    console.log(rfid);
                    if (rfid != null) {
                        if (rfid.affectedRows > 0) {
                            res.status(200).json({ message: 'rfid salida creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear rfid salida' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear rfid salida' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('UPDATE rfid_salida SET ? WHERE id = ?', [req.body, id]);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid salida salida actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar rfid salida' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar rfid salida' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfid = yield database_1.default.query('DELETE FROM rfid_salida WHERE id = ?', [id]);
                if (rfid != null) {
                    if (rfid.affectedRows > 0) {
                        res.status(200).json({ message: 'rfid eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar rfid salida' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar rfid salida' });
            }
        });
    }
}
exports.rfidSalidaController = new RfidSalidaController();
