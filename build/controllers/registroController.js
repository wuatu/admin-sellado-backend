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
exports.registroController = void 0;
const database_1 = __importDefault(require("../database"));
class RegistroController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let registros;
                registros = yield database_1.default.query('SELECT * FROM registro ORDER BY fecha, hora DESC');
                if (registros.length > 0) {
                    return res.status(200).json(registros);
                }
                else {
                    res.status(204).json({ text: 'No existen registros para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener el registro' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(req.body);
                const registro = yield database_1.default.query('INSERT INTO registro set ?', [req.body]);
                if (registro != null) {
                    if (registro.affectedRows > 0) {
                        res.status(200).json({ message: 'registro creado' });
                    }
                }
                else {
                    res.status(404).json({ text: 'No se pudo crear el registro' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear el registro' });
            }
        });
    }
}
exports.registroController = new RegistroController();
