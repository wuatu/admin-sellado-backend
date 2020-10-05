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
exports.configuracionController = void 0;
const database_1 = __importDefault(require("../database"));
class ConfiguracionController {
    getMinutes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("entre a la wea");
                const minute = yield database_1.default.query('SELECT * FROM configuracion');
                if (minute.length > 0) {
                    return res.status(200).json(minute[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener la configuración de minutos' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener la configuración de minutos' });
            }
        });
    }
    updateMinutes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_minute } = req.params;
                console.log(req.body);
                const minute = yield database_1.default.query('UPDATE configuracion SET ? WHERE id = ?', [req.body, id_minute]);
                if (minute != null) {
                    if (minute.affectedRows > 0) {
                        res.status(200).json({ message: 'Configuración de minutos actualizada' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar la configuración de minutos' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar la configuración de minutos' });
            }
        });
    }
}
exports.configuracionController = new ConfiguracionController();
