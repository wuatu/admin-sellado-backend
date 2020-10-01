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
                let usuariosEnLinea;
                if (id_calibrador != "0" && id_linea != "0") {
                    usuariosEnLinea = yield database_1.default.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [id_linea, id_calibrador]);
                }
                if (usuariosEnLinea.length > 0) {
                    return res.status(200).json(usuariosEnLinea);
                }
                else {
                    res.status(404).json({ text: 'Sin registros de seguimiento de cajas' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener registro de seguimiento de cajas' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const registroSegimientoCaja = yield database_1.default.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
                if (registroSegimientoCaja != null) {
                    console.log(registroSegimientoCaja);
                    if (registroSegimientoCaja != null) {
                        if (registroSegimientoCaja.affectedRows > 0) {
                            res.status(200).json({ message: 'registro de seguimiento de cajas creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajasssssss' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajas' });
            }
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { criterionSearch, toSearch, fromDateSearch, toDateSearch } = req.params;
                console.log(criterionSearch);
                console.log(toSearch);
                console.log(fromDateSearch);
                console.log(toDateSearch);
                let registerByCriterion;
                if (criterionSearch == "codCalibre" && fromDateSearch && toDateSearch && toSearch) {
                    console.log("codCalibre");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%"]);
                }
                else if (criterionSearch == "codCategoria" && fromDateSearch && toDateSearch && toSearch) {
                    console.log("codCategoria");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%"]);
                }
                else if (criterionSearch == "codVariedad" && fromDateSearch && toDateSearch && toSearch) {
                    console.log("codVariedad");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%"]);
                }
                else if (criterionSearch == "codEnvase" && fromDateSearch && toDateSearch && toSearch) {
                    console.log("codEnvase");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%"]);
                }
                if (registerByCriterion.length > 0) {
                    return res.status(200).json(registerByCriterion);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    searchLineAndCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { criterionSearch, toSearch, fromDateSearch, toDateSearch, idLine, idCaliper } = req.params;
                console.log(criterionSearch);
                console.log(toSearch);
                console.log(fromDateSearch);
                console.log(toDateSearch);
                console.log(idLine);
                console.log(idCaliper);
                let registerByCriterion;
                if (criterionSearch == "codCalibre" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("codCalibre");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%", idLine, idCaliper]);
                }
                else if (criterionSearch == "codCategoria" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("codCategoria");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%", idLine, idCaliper]);
                }
                else if (criterionSearch == "codVariedad" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("codVariedad");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%", idLine, idCaliper]);
                }
                else if (criterionSearch == "codEnvase" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("codEnvase");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch + "%", toDateSearch + "%", idLine, idCaliper]);
                }
                if (registerByCriterion.length > 0) {
                    return res.status(200).json(registerByCriterion);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
}
exports.cajaSelladaController = new CajaSelladaController();
