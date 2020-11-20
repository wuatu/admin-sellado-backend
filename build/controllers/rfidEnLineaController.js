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
exports.rfidEnLineaController = void 0;
const database_1 = __importDefault(require("../database"));
class RfidEnLineaController {
    getLastRfidInLine(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rfidInLine = yield database_1.default.query('SELECT id, codigo, fecha, hora, fk_linea AS id_linea, fk_rfid AS id_rfid FROM rfid_en_linea WHERE fk_linea = ? ORDER BY id DESC LIMIT 1', [id]);
                if (rfidInLine.length > 0) {
                    return res.status(200).json(rfidInLine);
                }
                else {
                    return res.status(200).json([{ id: "undefine", codigo: "undefine", fecha: "undefine", hora: "undefine",
                            id_linea: id, id_rfid: "undefine" }]);
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener rfid en linea' });
            }
        });
    }
}
exports.rfidEnLineaController = new RfidEnLineaController();
