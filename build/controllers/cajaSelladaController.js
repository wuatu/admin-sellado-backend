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
exports.cajaSelladaController = void 0;
const database_1 = __importDefault(require("../database"));
class CajaSelladaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea, id_calibrador } = req.params;
                let cajasEnLinea;
                if (id_calibrador != "0" && id_linea != "0") {
                    cajasEnLinea = yield database_1.default.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ?', [id_linea, id_calibrador]);
                }
                if (cajasEnLinea.length > 0) {
                    return res.status(200).json(cajasEnLinea);
                }
                else {
                    res.status(404).json({ text: 'Sin registros de cajas en linea' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas en linea' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const cajaEnLinea = yield database_1.default.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
                if (cajaEnLinea != null) {
                    console.log(cajaEnLinea);
                    if (cajaEnLinea != null) {
                        if (cajaEnLinea.affectedRows > 0) {
                            res.status(200).json({ message: 'caja en línea creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear caja en línea' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear caja' });
            }
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rutSearch, fromDateSearch, toDateSearch } = req.params;
                console.log(rutSearch);
                console.log(fromDateSearch);
                console.log(toDateSearch);
                let userInLineSearch;
                if (rutSearch && fromDateSearch && !toDateSearch) {
                    userInLineSearch = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_caja = ? AND fecha_sellado like ?', [rutSearch, "%" + fromDateSearch]);
                }
                else if (rutSearch && fromDateSearch && toDateSearch) {
                    console.log("hola");
                    userInLineSearch = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_caja = ? AND (fecha_sellado BETWEEN ? AND ?)', [rutSearch, fromDateSearch + "%", toDateSearch + "%"]);
                }
                if (userInLineSearch.length > 0) {
                    return res.status(200).json(userInLineSearch);
                }
                else {
                    res.status(404).json({ text: 'Sin registros de cajas en linea' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas en linea' });
            }
        });
    }
}
exports.cajaSelladaController = new CajaSelladaController();
