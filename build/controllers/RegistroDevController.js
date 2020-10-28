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
exports.registroDevController = void 0;
const database_1 = __importDefault(require("../database"));
class RegistroDevController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let registrosDev;
                registrosDev = yield database_1.default.query('SELECT * FROM registro_dev ORDER BY fecha, hora ASC');
                if (registrosDev.length > 0) {
                    return res.status(200).json(registrosDev);
                }
                else {
                    res.status(204).json({ text: 'No existen registros dev para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener el registro dev ' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const registroDev = yield database_1.default.query('INSERT INTO registro_dev set ?', [req.body]);
                if (registroDev != null) {
                    if (registroDev.affectedRows > 0) {
                        res.status(200).json({ message: 'registro dev creado' });
                    }
                }
                else {
                    res.status(404).json({ text: 'No se pudo crear registro dev el registro' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear el registro dev' });
            }
        });
    }
}
exports.registroDevController = new RegistroDevController();
