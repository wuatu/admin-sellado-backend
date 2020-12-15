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
exports.codigoUnitecController = void 0;
const database_1 = __importDefault(require("../database"));
class CodigoUnitecController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let registrosDev;
                registrosDev = yield database_1.default.query('SELECT DISTINCT Codigo_Confection_Unitec AS codigo_confection, Confection_Unitec AS confection, Codigo_Embalaje_Unitec AS codigo_embalaje, Embalaje_Unitec AS embalaje, Codigo_Envase_Unitec AS codigo_envase, Envase_Unitec AS envase, Categoria_Unitec AS categoria, Categoria_Timbrada_Unitec AS categoria_timbrada  FROM registro_diario_caja_sellada ORDER BY id DESC');
                if (registrosDev.length > 0) {
                    return res.status(200).json(registrosDev);
                }
                else {
                    res.status(204).json({ text: 'No existen codigos unitec para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudieron obtener los códigos unitec' });
            }
        });
    }
    searchCodeBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { code } = req.params;
                let cajas;
                cajas = yield database_1.default.query('SELECT DISTINCT Codigo_Confection_Unitec AS codigo_confection, Confection_Unitec AS confection, Codigo_Embalaje_Unitec AS codigo_embalaje, Embalaje_Unitec AS embalaje, Codigo_Envase_Unitec AS codigo_envase, Envase_Unitec AS envase, Categoria_Unitec AS categoria, Categoria_Timbrada_Unitec AS categoria_timbrada FROM registro_diario_caja_sellada WHERE Cod_Caja_Unitec = ? ', [code]);
                if (cajas.length > 0) {
                    return res.status(200).json(cajas);
                }
                res.status(204).json({ text: 'No existen registros de cajas para mostrar' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener caja' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const registroDev = yield database_1.default.query('INSERT INTO codigo_unitec set ?', [req.body]);
                if (registroDev != null) {
                    if (registroDev.affectedRows > 0) {
                        res.status(200).json({ message: 'código unitec creado' });
                    }
                }
                else {
                    res.status(404).json({ text: 'No se pudo crear el código unitec' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear el código unitec' });
            }
        });
    }
}
exports.codigoUnitecController = new CodigoUnitecController();
