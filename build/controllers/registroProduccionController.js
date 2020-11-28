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
exports.registroProduccionController = void 0;
const database_1 = __importDefault(require("../database"));
class RegistroProduccionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let registrosProduccion;
                registrosProduccion = yield database_1.default.query('SELECT * FROM registro_produccion ORDER BY id desc');
                if (registrosProduccion.length > 0) {
                    return res.status(200).json(registrosProduccion);
                }
                else {
                    res.status(204).json({ text: 'No existen registros producción para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener el registro Producción' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(req.body);
                const registro = yield database_1.default.query('INSERT INTO registro_produccion set ?', [req.body]);
                if (registro != null) {
                    if (registro.affectedRows > 0) {
                        res.status(200).json({ message: 'registro producción creado' });
                    }
                }
                else {
                    res.status(404).json({ text: 'No se pudo crear el registro producción' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear el registro Producción' });
            }
        });
    }
}
exports.registroProduccionController = new RegistroProduccionController();
